import BooksForm from './components/BooksForm/BooksForm';
import BooksList from './components/BooksList/BooksList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './redux/booksRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
