import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  GET_FROM_STORAGE: undefined,
  UPDATE_STORAGE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getFromStorage, handlers.getFromStorage],
    [actions.updateStorage, handlers.updateStorage],
  ]),
  initialState,
);

export default reducer;
