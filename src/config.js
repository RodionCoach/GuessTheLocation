import * as dataOfCities from './capitalCities.json';
import * as dataOfMapSyles from './mapStyle.json';

const config = {
  kmLeft: 1500,
  cities: dataOfCities.default.capitalCities,
  mapStyles: dataOfMapSyles.default,
  objectOfCities: dataOfCities.default.capitalCities.reduce((acc, item) => {
    acc[item.capitalCity] = { lat: item.lat, long: item.long };
    return acc;
  }, {}),
};

export default config;
