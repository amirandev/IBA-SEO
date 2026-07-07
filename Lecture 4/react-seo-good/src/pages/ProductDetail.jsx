import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import allProducts from '../data/products.json';

export default function ProductDetail() {
  const { category, slug } = useParams();
  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return (
      <>
        <h1>Product Not Found</h1>
        <p>Sorry, we could not find this product.</p>
        <Link to={category ? `/products/${category}` : '/products'} title="Back to products">
          Back to {category || 'Products'}
        </Link>
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images?.[0] || product.images,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency || 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5
    }
  };

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.name} — ${product.description}. Price: $${product.price}. Brand: ${product.brand}.`}
        keywords={`${product.name}, ${product.brand}, buy ${product.name.toLowerCase()}`}
        path={`/products/${product.categorySlug}/${product.slug}`}
        image={product.images?.[0] || product.images}
        type="product"
      />

      <article>
        <div className="product-gallery">
          {product.images?.slice(0, 3).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.name} by ${product.brand} — image ${i + 1}`}
              width="400"
              height="400"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        <h1>{product.name}</h1>
        <p className="brand">Brand: {product.brand}</p>
        <p className="price">${product.price.toFixed(2)} {product.currency || 'USD'}</p>
        <p>{product.description}</p>

        {product.features && (
          <>
            <h2>Key Features</h2>
            <ul>
              {product.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </>
        )}

        <p className="rating">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
          {' '}{product.rating} / 5 ({product.reviewCount} reviews)
        </p>

        {product.reviews && product.reviews.length > 0 && (
          <section>
            <h2>Customer Reviews</h2>
            {product.reviews.map(review => (
              <div key={review.id} className="review">
                <p className="review-author">
                  <strong>{review.author}</strong>
                  {' '}{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  {' '}<span className="review-date">{review.date}</span>
                </p>
                <h3>{review.title}</h3>
                <p>{review.text}</p>
              </div>
            ))}
          </section>
        )}
      </article>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
