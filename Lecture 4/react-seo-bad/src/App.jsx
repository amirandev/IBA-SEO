import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'products': return <Products />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-title">My App</div>
        <div className="nav-links">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('products')}>Products</button>
          <button onClick={() => setPage('about')}>About</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </div>
      </div>
      <div className="content">
        {renderPage()}
      </div>
      <div className="footer">
        <p>Copyright 2025</p>
      </div>
    </div>
  );
}
