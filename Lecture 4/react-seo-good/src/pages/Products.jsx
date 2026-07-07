import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const categories = [
  { name: 'Electronics', slug: 'electronics', img: 'https://picsum.photos/seed/electronics-cat/400/300', count: 6 },
  { name: 'Clothing', slug: 'clothing', img: 'https://picsum.photos/seed/clothing-cat/400/300', count: 5 },
  { name: 'Home & Garden', slug: 'home-garden', img: 'https://picsum.photos/seed/home-cat/400/300', count: 6 },
  { name: 'Sports & Outdoors', slug: 'sports-outdoors', img: 'https://picsum.photos/seed/sports-cat/400/300', count: 4 },
];

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
            title={`View all ${cat.name} products (${cat.count} items)`}
            className="category-card"
          >
            <img
              src={cat.img}
              alt={`${cat.name} — ${cat.count} products available`}
              loading="lazy"
              width="400"
              height="300"
            />
            <h2>{cat.name}</h2>
            <p>{cat.count} products</p>
          </Link>
        ))}
      </div>
    </>
  );
}
