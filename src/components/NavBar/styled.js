import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Nav = styled(NavLink)`
  && {
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;
  }
`;

export const NavWrapper = styled.div`
  padding: 30px;
`;
