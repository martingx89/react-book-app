const BooksList = (props) => {
  return (
    <ul>
      {props.books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
        </li>
      ))}
    </ul>
  );
};

export default BooksList;