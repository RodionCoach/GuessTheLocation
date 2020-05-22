const initialState = {
  kmLeft: null,
  currentCity: null,
  guessedCities: null,
  newGame: false,
  scores: [],
};

export const getFromStorage = state => ({
  ...state,
  ...JSON.parse(localStorage.getItem('state')),
});

export const updateStorage = (state, { payload }) => {
  localStorage.setItem(
    'state',
    JSON.stringify({
      ...state,
      ...payload,
    }),
  );
  return {
    ...state,
    ...payload,
  };
};

export default initialState;
