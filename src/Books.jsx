import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';


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
      <div className="books-grid">
        {books.map(book => {
          const imageUrl = book.coverImage || book.cover || book.image || '';
          const fullImageUrl = imageUrl.startsWith('http')
            ? imageUrl
            : `https://seussology.info${imageUrl}`;
  
          return (
            <Link key={book.id} to={`/books/${book.id}`} className="book-item">
              <img src={fullImageUrl} alt={book.title} className="book-image" loading="lazy" />
              <div className="book-title">{book.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Books;


