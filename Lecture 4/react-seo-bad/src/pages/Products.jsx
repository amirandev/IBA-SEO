import categories from '../data/categories.json';
import products from '../data/products.json';

export default function Products() {
  return (
    <div>
      <h1>All Products</h1>

      <h2>Categories</h2>
      <div className="grid">
        {categories.map((cat, i) => (
          <div key={i} className="card">
            <img src={cat.image} />
            <h3>{cat.name}</h3>
            <button onClick={() => alert('category: ' + cat.slug)}>View</button>
          </div>
        ))}
      </div>

      <h2>Products</h2>
      <div className="grid">
        {products.map((p, i) => (
          <div key={i} className="card">
            <img src={p.images[0]} />
            <h3>{p.name}</h3>
            <p>Brand: {p.brand}</p>
            <p>Price: ${p.price}</p>
            <p>Rating: {p.rating}</p>
            <button onClick={() => alert('product: ' + p.slug)}>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
