import React from 'react';

import styled from 'styled-components';

export const Button = styled(({ children, disabled, ...rest }) => {
  return (
    <button type="submit" disabled={disabled} {...rest}>
      {children}
    </button>
  );
})`
  && {
    margin: 5px 5px 5px 5px;
    background-color: #44b8c7;
    border-radius: 4px;
    border: 1px solid #18abab;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 14px;
    padding: 10px 20px;

    &:hover {
      background-color: #4aa9b6;
    }

    &:active {
      position: relative;
      top: 1px;
    }

    &:disabled {
      background-color: #4aa9b6;
      cursor: default;
    }
  }
`;
