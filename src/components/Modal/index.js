import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Modal = ({ startNewGame }) => (
  <S.Modal>
    <S.Label onClick={startNewGame}>Tap to the New Game</S.Label>
  </S.Modal>
);

Modal.propTypes = {
  startNewGame: PropTypes.func.isRequired,
};

export default Modal;
