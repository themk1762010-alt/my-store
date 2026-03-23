"use client";

const products = [
  {
    id: 1,
    name: "boAt Airdopes 800",
    price: "₹1299 (80% OFF)",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262b3e",
    link: "https://amzn.to/47LyL4Y",
    rating: "⭐ 4.1 (8,600+ reviews)"
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    price: "₹999 (Deal Price)",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    link: "https://amzn.to/40OJYxW",
    rating: "⭐ 4.3 (5,200+ reviews)"
  },
  {
    id: 3,
    name: "Bluetooth Earbuds",
    price: "₹899 (Limited Offer)",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605",
    link: "https://amzn.to/4t9dwCB",
    rating: "⭐ 4.0 (3,900+ reviews)"
  },
];

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>
      
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        TREAZURE 🔥 Earbuds Deals
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {products.map((p) => (
          <div key={p.id} style={{
            background: "#111",
            borderRadius: "10px",
            padding: "10px"
          }}>
            <img src={p.image} style={{ width: "100%", borderRadius: "10px" }} />
            <h3>{p.name}</h3>
            <p style={{ color: "gray" }}>{p.price}</p>
            <p style={{ color: "lightgreen" }}>{p.rating}</p>

            <a href={p.link} target="_blank">
              <button style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                background: "white",
                color: "black",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold"
              }}>
                Buy Now 🔥
              </button>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
