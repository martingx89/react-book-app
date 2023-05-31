import BooksForm from './components/BooksForm/BooksForm';
import BooksList from './components/BooksList/BooksList';

const App = () => {
  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
