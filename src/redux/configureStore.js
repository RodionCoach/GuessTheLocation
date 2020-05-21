import { createStore } from 'redux';

import rootReducer from './reducers';

const configure = initalState =>
  createStore(
    rootReducer,
    initalState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configure;
