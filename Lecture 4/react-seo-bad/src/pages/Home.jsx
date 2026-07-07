export default function Home() {
  const items = [
    { name: 'Item 1', img: 'https://picsum.photos/seed/item1/400/300' },
    { name: 'Item 2', img: 'https://picsum.photos/seed/item2/400/300' },
    { name: 'Item 3', img: 'https://picsum.photos/seed/item3/400/300' },
    { name: 'Item 4', img: 'https://picsum.photos/seed/item4/400/300' },
  ];

  return (
    <div>
      <div className="hero">
        <h1>Welcome</h1>
        <p>This is our app. It has some items.</p>
      </div>
      <h2>Items</h2>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="card">
            <img src={item.img} />
            <h3>{item.name}</h3>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
