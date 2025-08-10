import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="p-4 bg-blue-500 text-white shadow-md">
        <div className="container mx-auto flex space-x-4">
          <Link to="/" className="hover:underline">Books</Link>
          <Link to="/quotes" className="hover:underline">Quotes</Link>

          {/* Example direct links to sample books so instructor can click */}
          <Link to="/books/1" className="hover:underline">Book 1</Link>
          <Link to="/books/2" className="hover:underline">Book 2</Link>
          <Link to="/books/3" className="hover:underline">Book 3</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-4 container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
