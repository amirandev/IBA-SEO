import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Sitemap() {
  const categories = [
    { name: 'Electronics', slug: 'electronics', subcategories: ['macbook-pro-16-m3-max', 'iphone-16-pro-max', 'sony-wh-1000xm6', 'airpods-pro-3', 'dell-xps-15-oled', 'google-pixel-10-pro'] },
    { name: 'Clothing', slug: 'clothing', subcategories: ['oxford-button-down-shirt', 'slim-fit-chino-pants', 'floral-summer-dress', 'classic-leather-jacket', 'nike-air-max-270-react'] },
    { name: 'Home & Garden', slug: 'home-garden', subcategories: ['scandinavian-sectional-sofa', 'queen-platform-bed-frame', 'professional-chef-knife-set', 'smart-air-fryer-oven', 'modern-floor-lamp-led', 'electric-standing-desk'] },
    { name: 'Sports & Outdoors', slug: 'sports-outdoors', subcategories: ['adjustable-dumbbell-set', 'premium-yoga-mat-6mm', '4-person-weatherproof-tent', 'trail-running-shoes'] },
  ];

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
            <h3><Link to={`/products/${cat.slug}`} title={`Browse ${cat.name}`}>{cat.name}</Link></h3>
            <ul>
              {cat.subcategories.map(sub => (
                <li key={sub}>
                  <Link to={`/products/${sub}`} title={`View ${sub.replace(/-/g, ' ')}`}>
                    {sub.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
