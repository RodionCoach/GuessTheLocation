import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0 auto;
`;

export const MapWrapper = styled.div`
  height: 45vh;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  align-items: center;
  align-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-height: 50px;
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Label = styled.div`
  width: 100%;
  background-color: #44c767;
  border: 1px solid #18ab29;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  padding: 10px 20px;
`;
