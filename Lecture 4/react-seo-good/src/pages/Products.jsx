import Seo from '../components/Seo';
import products from '../data/products.json';
import categories from '../data/categories.json';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Browse all products — electronics, clothing, home & garden, sports. {products.length} items available."
        keywords="products, shop, buy online, all items"
        path="/products"
      />

      <h1>All Products ({products.length})</h1>

      <div className="category-grid">
        {products.map(p => (
          <Link
            key={p.id}
            to={`/products/${p.categorySlug}/${p.slug}`}
            title={`${p.name} by ${p.brand} — $${p.price} — ${p.description?.substring(0, 80)}`}
            className="category-card"
          >
            <img
              src={p.images[0]}
              alt={`${p.name} — ${p.brand} — ${p.description?.substring(0, 60)}`}
              loading="lazy"
              width="400"
              height="400"
            />
            <h2>{p.name}</h2>
            <p className="brand">{p.brand}</p>
            <p className="price">${p.price.toFixed(2)}</p>
            <p className="rating">
              {'★'.repeat(Math.round(p.rating))}{'☆'.repeat(5 - Math.round(p.rating))}
              {' '}{p.rating} ({p.reviewCount})
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
