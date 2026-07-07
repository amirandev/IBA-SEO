import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <Link to="/" title="Go to homepage">Home</Link>
          <Link to="/products" title="Browse all products">Products</Link>
          <Link to="/categories" title="Browse by category">Categories</Link>
          <Link to="/about" title="About our company">About</Link>
          <Link to="/contact" title="Contact us">Contact</Link>
          <Link to="/sitemap" title="View site map">Sitemap</Link>
        </nav>
      </header>

      <Breadcrumbs />

      <main>
        {children}
      </main>

      <footer>
        <nav aria-label="Footer navigation">
          <Link to="/" title="Go to homepage">Home</Link>
          <Link to="/about" title="About our company">About</Link>
          <Link to="/contact" title="Contact us">Contact</Link>
          <Link to="/sitemap" title="View site map">Sitemap</Link>
        </nav>
        <p>&copy; 2025 React SEO Project. All rights reserved.</p>
      </footer>
    </>
  );
}
