import Seo from '../components/Seo';
import categories from '../data/categories.json';
import products from '../data/products.json';
import { Link } from 'react-router-dom';

export default function Categories() {
  const totalProducts = products.length;

  return (
    <>
      <Seo
        title="Categories"
        description="Browse all product categories — electronics, clothing, home & garden, sports. Find what you need."
        keywords="categories, shop by category, electronics, clothing, home, sports"
        path="/categories"
      />

      <div className="categories-layout">
        <aside className="categories-sidebar">
          <h2>Categories</h2>
          <nav aria-label="Category navigation">
            <ul>
              {categories.map(cat => {
                const count = products.filter(p => p.categorySlug === cat.slug).length;
                return (
                  <li key={cat.slug}>
                    <Link
                      to={`/products/${cat.slug}`}
                      title={`${cat.name} — ${count} products`}
                    >
                      {cat.name}
                      <span className="cat-count">({count})</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <p className="sidebar-total">{totalProducts} products total</p>
        </aside>

        <div className="categories-main">
          <h1>All Categories</h1>
          <div className="category-grid">
            {categories.map(cat => {
              const catProductCount = products.filter(p => p.categorySlug === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  title={`Browse ${cat.name} — ${cat.description}`}
                  className="category-card"
                >
                  <img
                    src={cat.image}
                    alt={`${cat.name} — ${cat.description}`}
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <h2>{cat.name}</h2>
                  <p>{cat.description?.substring(0, 100)}...</p>
                  <p className="brand">{catProductCount} products · {cat.subcategories?.length || 0} subcategories</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
