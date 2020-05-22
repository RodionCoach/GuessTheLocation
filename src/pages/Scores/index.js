import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const Scores = () => {
  const list = useSelector(state => state.game.scores);

  return (
    <S.ListWrapper>
      <S.List>
        {list.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>{item}</li>
        ))}
      </S.List>
    </S.ListWrapper>
  );
};

export default Scores;
