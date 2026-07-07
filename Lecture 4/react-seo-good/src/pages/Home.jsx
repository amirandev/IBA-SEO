import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import categories from '../data/categories.json';
import products from '../data/products.json';

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Seo
        title="Home"
        description="Welcome to React SEO Project — learn how to build SEO-friendly React applications."
        keywords="react, seo, helmet, react-router, web performance"
        path="/"
      />

      <h1>Welcome to React SEO Project</h1>
      <p>This is a fully SEO-optimized React application. Every page has unique meta tags, semantic HTML, breadcrumbs, and structured data. Data is loaded from <code>categories.json</code> and <code>products.json</code>.</p>

      <section>
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              title={`Browse ${cat.name} products — ${cat.description}`}
              className="category-card"
            >
              <img
                src={cat.image}
                alt={`${cat.name} category — ${cat.description}`}
                loading="lazy"
                width="800"
                height="600"
              />
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Featured Products</h2>
        <div className="category-grid">
          {featured.map(p => (
            <Link
              key={p.id}
              to={`/products/${p.categorySlug}/${p.slug}`}
              title={`${p.name} by ${p.brand} — $${p.price}`}
              className="category-card"
            >
              <img
                src={p.images[0]}
                alt={`${p.name} — ${p.description?.substring(0, 60)}`}
                loading="lazy"
                width="400"
                height="400"
              />
              <h3>{p.name}</h3>
              <p className="brand">{p.brand}</p>
              <p className="price">${p.price.toFixed(2)}</p>
              <p className="rating">{'★'.repeat(Math.round(p.rating))}{'☆'.repeat(5 - Math.round(p.rating))} {p.rating}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
