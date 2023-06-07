import shortid from 'shortid';

// selectors
export const getAllBooks = (state) => state.books;

//action names
const createActionName = (name) => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');

const booksReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return statePart.filter((book) => book.id !== action.payload);
    case ADD_BOOK:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default booksReducer;
