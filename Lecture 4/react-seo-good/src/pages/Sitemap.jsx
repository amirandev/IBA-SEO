import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import categories from '../data/categories.json';
import products from '../data/products.json';

export default function Sitemap() {
  return (
    <>
      <Seo
        title="Sitemap"
        description="Complete site map — all pages, categories, and products listed in one place."
        keywords="sitemap, site map, navigation, all pages"
        path="/sitemap"
      />

      <h1>Site Map</h1>

      <section>
        <h2>Main Pages</h2>
        <ul>
          <li><Link to="/" title="Go to homepage">Home</Link></li>
          <li><Link to="/products" title="Browse all categories">Products</Link></li>
          <li><Link to="/about" title="About our company">About</Link></li>
          <li><Link to="/contact" title="Contact us">Contact</Link></li>
        </ul>
      </section>

      <section>
        <h2>Categories & Products</h2>
        {categories.map(cat => (
          <div key={cat.slug}>
            <h3>
              <Link to={`/products/${cat.slug}`} title={`Browse ${cat.name} — ${cat.description}`}>
                {cat.name}
              </Link>
            </h3>
            {cat.subcategories?.length > 0 && (
              <>
                <p className="sitemap-desc">{cat.description}</p>
                <ul>
                  {cat.subcategories.map(sub => (
                    <li key={sub.slug}>
              <Link
                  to={`/products/${cat.slug}/${sub.slug}`}
                  title={`${sub.name} — ${sub.description}`}
                >
                  {sub.name}
                </Link>
                {sub.description && <p className="sitemap-desc">{sub.description}</p>}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>All Products ({products.length})</h2>
        <ul>
          {products.map(p => (
            <li key={p.id}>
              <Link
                to={`/products/${p.categorySlug}/${p.slug}`}
                title={`${p.name} — $${p.price} — ${p.brand}`}
              >
                {p.name} — ${p.price} ({p.brand})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
