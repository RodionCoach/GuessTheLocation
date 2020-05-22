import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  background-color: rgba(103, 191, 187, 0.8);
  width: 100%;
  height: 100%;
  z-index: 4;
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  margin: 0 auto;
  background-color: white;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;
