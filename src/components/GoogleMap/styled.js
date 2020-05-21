import styled from 'styled-components';
import { Polygon as GoogleMapPolygon } from 'react-google-maps';

export const Polygon = styled(GoogleMapPolygon).attrs(props => ({
  ...props,
  options: {
    ...props.options,
    fillColor: 'dark',
    fillOpacity: 0.7,
    strokeColor: 'white',
    strokeOpacity: 1,
    strokeWeight: 0.8,
  },
}))`
  && {
    cursor: default;
  }
`;
