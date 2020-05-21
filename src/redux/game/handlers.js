const initialState = {
  kmLeft: localStorage.getItem('kmLeft') || null,
  currentCity: localStorage.getItem('currentCity') || null,
  guessedCities: localStorage.getItem('guessedCities') || null,
  newGame: localStorage.getItem('newGame') || false,
  scores: localStorage.getItem('scores') || [0],
};

export const updateStorage = (state, { payload }) => {
  Object.keys(payload).forEach(item => localStorage.setItem(`${item}`, `${payload[item]}`));
  return {
    ...state,
    ...payload,
  };
};

export default initialState;
