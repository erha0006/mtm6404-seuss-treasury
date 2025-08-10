import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
