import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Home() {
  const categories = [
    { name: 'Electronics', slug: 'electronics', img: 'https://picsum.photos/seed/electronics/600/400', desc: 'Laptops, smartphones, headphones and more' },
    { name: 'Clothing', slug: 'clothing', img: 'https://picsum.photos/seed/clothing/600/400', desc: 'Fashion for men, women and kids' },
    { name: 'Home & Garden', slug: 'home-garden', img: 'https://picsum.photos/seed/homegarden/600/400', desc: 'Furniture, kitchen, decor and outdoor' },
    { name: 'Sports & Outdoors', slug: 'sports-outdoors', img: 'https://picsum.photos/seed/sports/600/400', desc: 'Fitness, camping, cycling gear' },
  ];

  return (
    <>
      <Seo
        title="Home"
        description="Welcome to React SEO Project — learn how to build SEO-friendly React applications."
        keywords="react, seo, helmet, react-router, web performance"
        path="/"
      />

      <h1>Welcome to React SEO Project</h1>
      <p>This is a fully SEO-optimized React application. Every page has unique meta tags, semantic HTML, breadcrumbs, and structured data.</p>

      <section>
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              title={`Browse ${cat.name} products`}
              className="category-card"
            >
              <img
                src={cat.img}
                alt={`${cat.name} category — ${cat.desc}`}
                loading="lazy"
                width="600"
                height="400"
              />
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
