const initialState = {
  isAuthenticated: false,
  profile: null,
};

export const authenticate = (state, { payload }) => ({
  ...state,
  isAuthenticated: true,
  profile: payload,
});

export default initialState;
