import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import categories from '../data/categories.json';
import products from '../data/products.json';

export default function Category() {
  const { slug } = useParams();
  const cat = categories.find(c => c.slug === slug);
  const catProducts = products.filter(p => p.categorySlug === slug);

  if (!cat) {
    return (
      <>
        <h1>Category Not Found</h1>
        <p>Sorry, we could not find this category.</p>
        <Link to="/products" title="Back to all categories">Back to all categories</Link>
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: cat.name,
    description: cat.description,
    url: `https://myproject.byethost.com/products/${cat.slug}`,
    numberOfItems: catProducts.length
  };

  return (
    <>
      <Seo
        title={cat.name}
        description={cat.description}
        keywords={cat.keywords}
        path={`/products/${cat.slug}`}
      />

      <h1>{cat.name}</h1>
      <p className="category-desc">{cat.description}</p>

      {cat.subcategories?.length > 0 && (
        <section>
          <h2>Subcategories</h2>
          <div className="category-grid">
            {cat.subcategories.map(sub => (
              <Link
                key={sub.slug}
                to={`/products/${cat.slug}/${sub.slug}`}
                title={`${sub.name} — ${sub.description}`}
                className="category-card"
              >
                <img
                  src={sub.image}
                  alt={`${sub.name} subcategory — ${sub.description}`}
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <h3>{sub.name}</h3>
                <p>{sub.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {catProducts.length > 0 && (
        <section>
          <h2>Products ({catProducts.length})</h2>
          <div className="category-grid">
            {catProducts.map(p => (
              <Link
                key={p.id}
                to={`/products/${cat.slug}/${p.slug}`}
                title={`${p.name} by ${p.brand} — $${p.price}`}
                className="category-card"
              >
                <img
                  src={p.images[0]}
                  alt={`${p.name} — ${p.description?.substring(0, 80)}`}
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <h3>{p.name}</h3>
                <p className="brand">{p.brand}</p>
                <p className="price">${p.price.toFixed(2)}</p>
                <p className="rating">
                  {'★'.repeat(Math.round(p.rating))}{'☆'.repeat(5 - Math.round(p.rating))} {p.rating} ({p.reviewCount})
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {catProducts.length === 0 && (
        <p>No products found in this category.</p>
      )}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
