import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import categories from '../data/categories.json';

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Browse all product categories — electronics, clothing, home & garden, sports and more."
        keywords="products, categories, shop, buy online"
        path="/products"
      />

      <h1>All Categories</h1>

      <div className="category-grid">
        {categories.map(cat => (
          <Link
            key={cat.slug}
            to={`/products/${cat.slug}`}
            title={`View all ${cat.name} products — ${cat.description}`}
            className="category-card"
          >
            <img
              src={cat.image}
              alt={`${cat.name} — ${cat.description}`}
              loading="lazy"
              width="400"
              height="300"
            />
            <h2>{cat.name}</h2>
            <p>{cat.subcategories?.length || 0} subcategories</p>
          </Link>
        ))}
      </div>
    </>
  );
}
