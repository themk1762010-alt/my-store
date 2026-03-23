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
    <div style={{ background: "#000", color: "white", fontFamily: "Arial" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #222"
      }}>
        <h2 style={{ letterSpacing: "4px" }}>TREAZURE</h2>
        <span style={{ color: "gray" }}>Premium Deals</span>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <h1 style={{ fontSize: "40px" }}>
          🔥 Trending Earbuds You Can’t Miss
        </h1>
        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Limited-time deals curated for smart buyers
        </p>
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "25px",
        padding: "20px"
      }}>
        {products.map((p) => (
          <div key={p.id} style={{
            background: "#111",
            borderRadius: "15px",
            overflow: "hidden",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={p.image} style={{ width: "100%", height: "220px", objectFit: "cover" }} />

            <div style={{ padding: "15px" }}>
              <h3>{p.name}</h3>
              <p style={{ color: "#aaa" }}>{p.price}</p>
              <p style={{ color: "lightgreen" }}>{p.rating}</p>

              <a href={p.link} target="_blank">
                <button style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "10px",
                  background: "#fff",
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}>
                  Grab Deal 🔥
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* TRUST SECTION */}
      <div style={{
        textAlign: "center",
        padding: "50px 20px",
        borderTop: "1px solid #222"
      }}>
        <h2>Trusted by 10,000+ Smart Buyers</h2>
        <p style={{ color: "#aaa", marginTop: "10px" }}>
          ✔ Best Amazon Deals <br />
          ✔ Verified Products <br />
          ✔ Updated Daily
        </p>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #222",
        color: "gray",
        fontSize: "14px"
      }}>
        © 2026 TREAZURE
      </div>

    </div>
  );
}
