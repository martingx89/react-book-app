import { createStore, combineReducers } from 'redux';
import booksRedux from './booksRedux';
import initialState from './initialState';

const reducer = combineReducers({
  books: booksRedux,
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
