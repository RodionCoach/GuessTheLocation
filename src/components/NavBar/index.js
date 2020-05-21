import React from 'react';

import * as S from './styled';

const NotFound = () => (
  <S.NavWrapper>
    <S.Nav exact to="/play" activeStyle={{ color: '#42b983' }}>
      Play
    </S.Nav>
    |
    <S.Nav exact to="/scores" activeStyle={{ color: '#42b983' }}>
      Scores
    </S.Nav>
  </S.NavWrapper>
);

export default NotFound;
