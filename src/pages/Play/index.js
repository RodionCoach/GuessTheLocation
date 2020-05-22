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
  const [newGame, setNewGame] = useState(null);
  const [originalMarker, setOriginalMarker] = useState(null);
  const [playerMarker, setPlayerMarker] = useState(null);
  const cities = config.objectOfCities;

  const startGame = () => {
    // start the game for new player or if reseted the progress
    setState({
      ...state,
      currentCity: randomCity(),
      kmLeft: config.kmLeft,
      guessedCities: 0,
      scores: state.scores,
    });

    setNewGame(false);
    setOriginalMarker(false);
    setPlayerMarker({
      lat: 0,
      long: 0,
    });
  };

  const mapClickHandler = event => {
    // get player pin coordinates
    setPlayerMarker({
      lat: event.latLng.lat().toFixed(6),
      long: event.latLng.lng().toFixed(6),
    });
  };

  const deleteMarker = () => {
    setPlayerMarker({
      lat: 0,
      long: 0,
    });
  };

  const placeMarker = () => {
    // update state, calculate kmLeft, guessed city + 1 or no, update scores, update store
    const differenceIn = distanceInKm(cities[state.currentCity], playerMarker);
    const currentScores = state.scores;

    const kmLeft = differenceIn > 50 ? state.kmLeft - differenceIn : state.kmLeft;
    const guessedCities = differenceIn > 50 ? state.guessedCities : state.guessedCities + 1;

    if (kmLeft < 0) {
      currentScores.push(state.guessedCities);
      setState({
        ...state,
        currentCity: randomCity(),
        guessedCities: 0,
        kmLeft: config.kmLeft,
        newGame: true,
        scores: currentScores,
      });
      setNewGame(true);
      setOriginalMarker(false);
      setPlayerMarker({
        lat: 0,
        long: 0,
      });

      dispatch(
        actions.updateStorage({
          ...state,
          guessedCities: 0,
          kmLeft: config.kmLeft,
          newGame: true,
          scores: currentScores,
        }),
      );
    } else {
      setState({
        ...state,
        guessedCities,
        kmLeft: +kmLeft.toFixed(2),
        currentCity: randomCity(),
      });

      setNewGame(false);
      setOriginalMarker(true);

      dispatch(
        actions.updateStorage({
          ...state,
          guessedCities,
          kmLeft: +kmLeft.toFixed(2),
        }),
      );
    }
  };

  const clearStorage = () => {
    // clear the game scores progress
    const reset = {
      currentCity: randomCity(),
      kmLeft: config.kmLeft,
      guessedCities: 0,
      newGame: false,
      scores: [],
    };

    dispatch(actions.updateStorage(reset));
    setState(reset);
    setNewGame(false);
    setOriginalMarker(false);
    setPlayerMarker({
      lat: 0,
      long: 0,
    });
  };

  return (
    <>
      {(!state.currentCity || newGame) && <Modal startNewGame={startGame} />}
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
            originalLat={reduxState.currentCity && cities[reduxState.currentCity].lat}
            originalLong={reduxState.currentCity && cities[reduxState.currentCity].long}
            playerLat={playerMarker && playerMarker.lat}
            playerLong={playerMarker && playerMarker.long}
            onMapClick={mapClickHandler}
            deleteMarker={deleteMarker}
          />
        </S.MapWrapper>
        <S.ButtonWrapper>
          <Button onClick={clearStorage}>Clear The Progress</Button>
          <Button disabled={!(playerMarker && playerMarker.lat)} onClick={placeMarker}>
            Place
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Play;
