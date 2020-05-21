import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from 'redux/game';
import Modal from 'components/Modal';
import GoogleMap from 'components/GoogleMap';
import Button from 'components/Button';

import { randomCity, getGoogleMapLink, distanceInKm } from 'helpers';
import config from '../../config';

import * as S from './styled';

const Play = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.game);
  const [state, setState] = useState(reduxState);
  const [newGame, setNewGame] = useState(false);
  const [originalMarker, setOriginalMarker] = useState(false);
  const [playerMarker, setPlayerMarker] = useState({});
  const cities = config.objectOfCities;

  const startGame = () => {
    // start the game for new player or if reseted the progress
    setState({
      ...state,
      currentCity: reduxState.currentCity || randomCity(),
      kmLeft: config.kmLeft,
      guessedCities: 0,
      scores: state.scores,
    });

    setNewGame(false);
  };

  const mapClickHandler = event => {
    // get player pin coordinates
    setPlayerMarker({
      lat: event.latLng.lat().toFixed(6),
      long: event.latLng.lng().toFixed(6),
    });

    setOriginalMarker(true);
  };

  const placeMarker = () => {
    // update state, calculate kmLeft, guessed city + 1 or no, update scores
    const differenceIn = distanceInKm(cities[state.currentCity], playerMarker);
    const currentScores = state.scores;
    const kmLeft = state.kmLeft - differenceIn;

    if (kmLeft < 0) {
      currentScores.push(state.guessedCities);
      setState({
        ...state,
        currentCity: null,
        guessedCities: currentScores,
        kmLeft: config.kmLeft,
        newGame: true,
        scores: currentScores,
      });
      setNewGame(true);
    }

    // setState({
    //   ...state,
    //   currentCity: randomCity(),
    // });

    // setOriginalMarker(false);

    setState({
      ...state,
      currentCity: null,
      guessedCities: currentScores,
      kmLeft: config.kmLeft,
      newGame: false,
    });
    // setNewGame(true)
    dispatch(actions.updateStorage(state));
  };

  const clearStorage = () => {
    // clear the game scores progress
    const reset = {
      currentCity: randomCity(),
      kmLeft: config.kmLeft,
      guessedCities: 0,
      newGame: false,
      scores: [0],
    };

    dispatch(actions.updateStorage(reset));
    setOriginalMarker(false);
    setState(reset);
  };

  return (
    <>
      {newGame && <Modal startNewGame={startGame} />}
      <S.Wrapper>
        <S.LabelWrapper>
          <S.Label>{`${state.guessedCities} cities placed`}</S.Label>
          <S.Label>{`${state.kmLeft} left`}</S.Label>
        </S.LabelWrapper>
        <h3>{`Select the location of: ${state.currentCity}`}</h3>
        <S.MapWrapper>
          <GoogleMap
            googleMapURL={getGoogleMapLink()}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            originalMarker={originalMarker}
            originalLat={state.currentCity && cities[state.currentCity].lat}
            originalLong={state.currentCity && cities[state.currentCity].long}
            playerLat={playerMarker.lat}
            playerLong={playerMarker.long}
            onMapClick={mapClickHandler}
          />
        </S.MapWrapper>
        <S.ButtonWrapper>
          <Button onClick={clearStorage}>Clear The Progress</Button>
          <Button disabled={!originalMarker} onClick={placeMarker}>
            Place
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Play;
