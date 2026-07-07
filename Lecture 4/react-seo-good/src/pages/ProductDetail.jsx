import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';

const products = {
  'electronics': [
    { name: 'MacBook Pro 16 M3 Max', slug: 'macbook-pro-16-m3-max', price: 3499.99, img: 'https://picsum.photos/seed/macbook/400/400', rating: 4.8, reviews: 1245, brand: 'Apple', desc: 'Apple MacBook Pro with M3 Max chip, 36GB RAM, 1TB SSD.' },
    { name: 'iPhone 16 Pro Max', slug: 'iphone-16-pro-max', price: 1499.99, img: 'https://picsum.photos/seed/iphone/400/400', rating: 4.7, reviews: 3456, brand: 'Apple', desc: 'A18 Pro chip, 48MP camera, Titanium design.' },
    { name: 'Sony WH-1000XM6', slug: 'sony-wh-1000xm6', price: 399.99, img: 'https://picsum.photos/seed/sony/400/400', rating: 4.7, reviews: 4532, brand: 'Sony', desc: 'Industry-leading noise cancelling headphones.' },
    { name: 'AirPods Pro 3', slug: 'airpods-pro-3', price: 269.99, img: 'https://picsum.photos/seed/airpods/400/400', rating: 4.5, reviews: 6789, brand: 'Apple', desc: 'Adaptive audio, active noise cancellation.' },
    { name: 'Dell XPS 15 OLED', slug: 'dell-xps-15-oled', price: 2499.99, img: 'https://picsum.photos/seed/dell/400/400', rating: 4.5, reviews: 876, brand: 'Dell', desc: 'i9, 32GB RAM, RTX 4070, OLED display.' },
    { name: 'Google Pixel 10 Pro', slug: 'google-pixel-10-pro', price: 1099.99, img: 'https://picsum.photos/seed/pixel/400/400', rating: 4.4, reviews: 1567, brand: 'Google', desc: 'Tensor G5, 50MP camera, pure Android.' },
  ],
  'clothing': [
    { name: 'Oxford Button-Down Shirt', slug: 'oxford-button-down-shirt', price: 89.99, img: 'https://picsum.photos/seed/shirt/400/400', rating: 4.3, reviews: 876, brand: 'Brooks Brothers', desc: 'Premium Egyptian cotton shirt.' },
    { name: 'Slim Fit Chino Pants', slug: 'slim-fit-chino-pants', price: 69.99, img: 'https://picsum.photos/seed/chinos/400/400', rating: 4.4, reviews: 1203, brand: 'Dockers', desc: '4-way stretch, moisture wicking.' },
    { name: 'Floral Summer Dress', slug: 'floral-summer-dress', price: 59.99, img: 'https://picsum.photos/seed/dress/400/400', rating: 4.2, reviews: 654, brand: 'Zara', desc: 'A-line silhouette, breathable cotton.' },
    { name: 'Classic Leather Jacket', slug: 'classic-leather-jacket', price: 299.99, img: 'https://picsum.photos/seed/jacket/400/400', rating: 4.6, reviews: 432, brand: 'AllSaints', desc: 'Genuine lambskin leather.' },
    { name: 'Nike Air Max 270 React', slug: 'nike-air-max-270-react', price: 159.99, img: 'https://picsum.photos/seed/nikeshoe/400/400', rating: 4.5, reviews: 3456, brand: 'Nike', desc: 'React foam + Air unit.' },
  ],
  'home-garden': [
    { name: 'Scandinavian Sectional Sofa', slug: 'scandinavian-sectional-sofa', price: 1899.99, img: 'https://picsum.photos/seed/sofa/400/400', rating: 4.3, reviews: 567, brand: 'IKEA', desc: 'L-shaped linen fabric sofa.' },
    { name: 'Queen Platform Bed Frame', slug: 'queen-platform-bed-frame', price: 799.99, img: 'https://picsum.photos/seed/bed/400/400', rating: 4.1, reviews: 890, brand: 'Wayfair', desc: 'LED lighting, storage drawers.' },
    { name: 'Professional Chef Knife Set', slug: 'professional-chef-knife-set', price: 249.99, img: 'https://picsum.photos/seed/knife/400/400', rating: 4.7, reviews: 2100, brand: 'Zwilling', desc: '8-piece German steel set.' },
    { name: 'Smart Air Fryer Oven', slug: 'smart-air-fryer-oven', price: 199.99, img: 'https://picsum.photos/seed/airfryer/400/400', rating: 4.5, reviews: 4567, brand: 'Cosori', desc: '12-in-1, 10 quart, Wi-Fi.' },
    { name: 'Modern Floor Lamp LED', slug: 'modern-floor-lamp-led', price: 149.99, img: 'https://picsum.photos/seed/lamp/400/400', rating: 4.4, reviews: 1234, brand: 'Brightech', desc: 'Adjustable color temperature.' },
    { name: 'Electric Standing Desk', slug: 'electric-standing-desk', price: 599.99, img: 'https://picsum.photos/seed/desk/400/400', rating: 4.5, reviews: 2345, brand: 'Fully', desc: 'Dual motors, bamboo desktop.' },
  ],
  'sports-outdoors': [
    { name: 'Adjustable Dumbbell Set', slug: 'adjustable-dumbbell-set', price: 349.99, img: 'https://picsum.photos/seed/dumbbell/400/400', rating: 4.6, reviews: 3456, brand: 'Bowflex', desc: '5-52.5 lbs quick dial.' },
    { name: 'Premium Yoga Mat 6mm', slug: 'premium-yoga-mat-6mm', price: 49.99, img: 'https://picsum.photos/seed/yoga/400/400', rating: 4.4, reviews: 2345, brand: 'Manduka', desc: 'Non-slip TPE with alignment lines.' },
    { name: '4-Person Weatherproof Tent', slug: '4-person-weatherproof-tent', price: 219.99, img: 'https://picsum.photos/seed/tent/400/400', rating: 4.3, reviews: 1789, brand: 'The North Face', desc: 'Weatherproof with bathtub floor.' },
    { name: 'Trail Running Shoes Ultra Grip', slug: 'trail-running-shoes', price: 189.99, img: 'https://picsum.photos/seed/trailshoe/400/400', rating: 4.6, reviews: 1456, brand: 'Salomon', desc: 'Vibram Megagrip, Gore-Tex.' },
  ]
};

export default function ProductDetail() {
  const { slug } = useParams();

  const allProducts = Object.values(products).flat();
  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return (
      <>
        <h1>Product Not Found</h1>
        <p>Sorry, we could not find this product.</p>
        <Link to="/products" title="Back to all products">Back to Products</Link>
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.desc,
    image: product.img,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
      bestRating: 5
    }
  };

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.name} — ${product.desc} Price: $${product.price}. Brand: ${product.brand}.`}
        keywords={`${product.name}, ${product.brand}, buy ${product.name.toLowerCase()}`}
        path={`/products/${product.slug}`}
        image={product.img}
        type="product"
      />

      <article>
        <img
          src={product.img}
          alt={`${product.name} by ${product.brand} — $${product.price}`}
          width="400"
          height="400"
        />
        <h1>{product.name}</h1>
        <p className="brand">Brand: {product.brand}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.desc}</p>
        <p className="rating">Rating: {product.rating} / 5 ({product.reviews} reviews)</p>
      </article>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
