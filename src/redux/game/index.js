import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  UPDATE_STORAGE: undefined,
});

const reducer = handleActions(new Map([[actions.updateStorage, handlers.updateStorage]]), initialState);

export default reducer;
