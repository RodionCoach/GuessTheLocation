import * as data from './capitalCities.json';

const config = {
  kmLeft: 1500,
  cities: data.default.capitalCities,
  objectOfCities: data.default.capitalCities.reduce((acc, item) => {
    acc[item.capitalCity] = { lat: item.lat, long: item.long };
    return acc;
  }, {}),
};

export default config;
