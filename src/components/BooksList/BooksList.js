import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../../redux/booksRedux';
import { useParams } from 'react-router';
import { removeSelectedBook } from '../../redux/booksRedux';

const BooksList = () => {
  const { id } = useParams();
  const booksData = useSelector((state) => getAllBooks(state, id));

  const dispatch = useDispatch();

  const removeBook = (bookId) => {
    dispatch(removeSelectedBook(bookId));
  };

  return (
    <ul>
      {booksData.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
