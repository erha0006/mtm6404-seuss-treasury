import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Books from './Books';
import BookDetail from './BookDetail';
import Quotes from './Quotes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Books />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
