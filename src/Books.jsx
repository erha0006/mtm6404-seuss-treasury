import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {books.map(book => (
          <li key={book.id} style={{ marginBottom: '0.5rem' }}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;


