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
    <div style={{ fontFamily: "Arial", background: "#0a0a0a", color: "white" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #222"
      }}>
        <h2 style={{ letterSpacing: "3px" }}>TREAZURE</h2>
        <div>
          <span style={{ marginRight: "20px" }}>Home</span>
          <span>Products</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1>Best Earbuds Deals 🔥</h1>
        <p style={{ color: "gray" }}>
          Handpicked top earbuds at unbeatable prices
        </p>
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
        padding: "20px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            background: "#111",
            borderRadius: "15px",
            overflow: "hidden",
            paddingBottom: "10px"
          }}>
            <img
              src={product.image}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>
              <p style={{ color: "#aaa" }}>{product.price}</p>
              <p style={{ color: "lightgreen" }}>{product.rating}</p>

              <a href={product.link} target="_blank">
                <button style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  background: "white",
                  color: "black",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}>
                  Buy Now 🔥
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* TRUST */}
      <div style={{
        textAlign: "center",
        padding: "40px",
        borderTop: "1px solid #222"
      }}>
        <h3>Why Choose TREAZURE?</h3>
        <p style={{ color: "gray" }}>
          ✔ Best Deals on Amazon <br />
          ✔ Trusted by Smart Buyers <br />
          ✔ Updated Daily
        </p>
      </div>

    </div>
  );
}
