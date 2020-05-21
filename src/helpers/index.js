import { computeDistanceBetween, LatLng } from 'spherical-geometry-js';
import config from '../config';

const googleMapKey = process.env.REACT_APP_GOOGLE_API;

export const randomCity = () => config.cities[Math.floor(Math.random() * config.cities.length)].capitalCity;

export const getGoogleMapLink = () =>
  `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}&v=3.exp&libraries=geometry,drawing,places`;

export const distanceInKm = (firstMarker, secondMarker) => {
  const p1 = new LatLng(firstMarker.lat, firstMarker.long);
  const p2 = new LatLng(secondMarker.lat, secondMarker.long);
  return (computeDistanceBetween(p1, p2) / 1000).toFixed(2);
};
