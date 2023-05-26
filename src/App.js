import { useState } from 'react';
import BooksForm from './components/BooksForm/BooksForm';
import BooksList from './components/BooksList/BooksList';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
    { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski' },
  ]);

  const removeBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <h1>Books App</h1>
      <BooksList books={books}></BooksList>
      <BooksForm></BooksForm>
    </div>
  );
};

export default App;
