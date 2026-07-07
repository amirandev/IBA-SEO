import products from '../data/products.json';

export default function About() {
  const totalProducts = products.length;
  const avgRating = (products.reduce((s, p) => s + p.rating, 0) / totalProducts).toFixed(1);
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      <h1>About</h1>
      <p>Some information about us. We have {totalProducts} products with an average rating of {avgRating}.</p>
      <p>This is great. Click here to learn more. Click here to learn more. Click here to learn more.</p>

      <img src="https://picsum.photos/seed/about/800/400" />
      <img src="https://picsum.photos/seed/team/800/400" />
      <img src="https://picsum.photos/seed/office/800/400" />

      <h2>Our Top Products</h2>
      <div className="grid">
        {topRated.map((p, i) => (
          <div key={i} className="card">
            <img src={p.images[0]} />
            <h3>{p.name}</h3>
            <p>Rating: {p.rating} / 5</p>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
