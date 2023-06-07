import { createStore, combineReducers } from 'redux';
import booksReducer from './booksRedux';
import initialState from './initialState';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
