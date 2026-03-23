"use client";

const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: "₹1999 (50% OFF)",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Luxury Watch",
    price: "₹1499 (40% OFF)",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "₹999 (60% OFF)",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262b3e",
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0a0a0a", color: "white" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #222"
      }}>
        <h2 style={{
          fontWeight: "bold",
          fontSize: "22px",
          letterSpacing: "3px"
        }}>
          TREAZURE
        </h2>

        <div>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Home</span>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Products</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Discover TREAZURE Deals
        </h1>
        <p style={{ color: "gray", fontSize: "18px" }}>
          Premium products. Best prices. Smart shopping.
        </p>
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
        padding: "30px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            background: "#111",
            borderRadius: "15px",
            overflow: "hidden",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={product.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>
              <p style={{ color: "#aaa" }}>{product.price}</p>

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
                View Product
              </button>
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
        <h3>Why Choose TREAZURE?</h3>
        <p style={{ color: "gray", marginTop: "10px" }}>
          ✔ Curated Quality Products <br />
          ✔ Best Deals Online <br />
          ✔ Trusted by Smart Shoppers
        </p>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #222",
        fontSize: "14px",
        color: "gray"
      }}>
        © 2026 TREAZURE. All rights reserved.
      </div>

    </div>
  );
}