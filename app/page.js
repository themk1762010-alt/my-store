"use client";

import { useState } from "react";

export default function Home() {

  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "boAt Airdopes 800",
      price: "₹1299 (80% OFF)",
      image: "/boat.jpg",
      link: "https://amzn.to/47LyL4Y"
    },
    {
      id: 2,
      name: "Wireless Earbuds Pro",
      price: "₹999 (Deal Price)",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      link: "https://amzn.to/40OJYxW"
    },
    {
      id: 3,
      name: "Bluetooth Earbuds",
      price: "₹899 (Limited Offer)",
      image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605",
      link: "https://amzn.to/4t9dwCB"
    }
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#000", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>

      {/* 🔍 TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px"
      }}>

        <div></div>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            width: "40%",
            outline: "none"
          }}
        />

        {/* CONTACT */}
        <a href="mailto:themk1762010@gmail.com" style={{ color: "white", textDecoration: "none" }}>
          Contact Us
        </a>
      </div>

      {/* 🏆 TITLE */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1 style={{
          fontSize: "60px",
          fontWeight: "bold",
          letterSpacing: "3px"
        }}>
          TREAZURE
        </h1>

        <p style={{
          maxWidth: "600px",
          margin: "10px auto",
          color: "#aaa",
          lineHeight: "1.6"
        }}>
          Discover the best deals on trending products. We handpick high-quality items
          so you don’t waste time searching. Simple, smart, and reliable shopping.
        </p>
      </div>

      {/* 🔥 SECTION TITLE */}
      <h2 style={{
        textAlign: "center",
        marginTop: "40px",
        fontSize: "26px",
        fontWeight: "bold"
      }}>
        🔥 Trending Earbuds You Can’t Miss
      </h2>

      {/* 🛒 PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "25px",
        padding: "40px"
      }}>
        
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={p.image}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{p.name}</h3>
              <p style={{ color: "#aaa" }}>{p.price}</p>

              <a href={p.link} target="_blank">
                <button style={{
                  width: "100%",
                  padding: "12px",
                  background: "white",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}>
                  View Deal 🔥
                </button>
              </a>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
