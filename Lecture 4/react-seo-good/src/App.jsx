import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Sitemap from './pages/Sitemap';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <nav aria-label="Main navigation">
            <Link to="/" title="Go to homepage">Home</Link>
            <Link to="/products" title="Browse all products">Products</Link>
            <Link to="/about" title="About our company">About</Link>
            <Link to="/contact" title="Contact us">Contact</Link>
          </nav>
        </header>

        <Breadcrumbs />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 React SEO Project. All rights reserved.</p>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
