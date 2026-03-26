"use client";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const products = [
    // TECH
    {
      name: "Realme Narzo 80 Pro 5G",
      price: "₹19,999",
      reviews: "4.3 (2.2K)",
      link: "https://amzn.to/3Pu5OV1",
      category: "tech",
    },
    {
      name: "HP 15 13th Gen i3 Laptop",
      price: "₹45,990",
      reviews: "4.1 (2.2K)",
      link: "https://amzn.to/4t43Nx9",
      category: "tech",
    },
    {
      name: "Tribit XSound Go Speaker",
      price: "₹2,843",
      reviews: "4.3 (18K)",
      link: "https://amzn.to/4bxkCec",
      category: "tech",
    },
    {
      name: "Honor Pad X9",
      price: "₹15,126",
      reviews: "4.3 (1.8K)",
      link: "https://amzn.to/4dGv44g",
      category: "tech",
    },
    {
      name: "OnePlus Nord Buds 3r",
      price: "₹1,599",
      reviews: "4.2 (40K)",
      link: "https://amzn.to/3NJisyH",
      category: "tech",
    },
    {
      name: "Boat Wave Call 3 Smartwatch",
      price: "₹1,399",
      reviews: "4.1 (25K)",
      link: "https://amzn.to/4c3MQgE",
      category: "tech",
    },

    // LIFESTYLE
    {
      name: "U.S. Polo Assn. Men's Shoes",
      price: "₹2,199",
      reviews: "4.4 (1K)",
      link: "https://amzn.to/4bwnyHX",
      category: "lifestyle",
    },
    {
      name: "Titan Karishma Watch",
      price: "₹1,994",
      reviews: "4.4 (1.4K)",
      link: "https://amzn.to/4t1w7Ae",
      category: "lifestyle",
    },

    // TRENDING
    {
      name: "HealthSense Kitchen Weighing Machine",
      price: "₹699",
      reviews: "4.1 (8.3K)",
      link: "https://amzn.to/3NnDq6o",
      category: "trending",
    },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderSection = (title, key) => (
    <div id={key} style={{ marginTop: "50px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "15px",
          paddingBottom: "10px",
        }}
      >
        {filtered
          .filter((p) => p.category === key)
          .map((p, i) => (
            <div
              key={i}
              style={{
                minWidth: "250px",
                background: "#111",
                padding: "15px",
                borderRadius: "15px",
                boxShadow: "0 0 10px rgba(255,255,255,0.1)",
                transition: "0.3s",
              }}
            >
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <p>{p.reviews}</p>

              <a href={p.link} target="_blank">
                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    width: "100%",
                    borderRadius: "10px",
                    border: "none",
                    background: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  View Deal 🔥
                </button>
              </a>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* TOP BAR */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <a href="#tech">Tech</a>
          <a href="#lifestyle">Lifestyle</a>
          <a href="#trending">Trending🔥</a>
        </div>

        <a
          href="mailto:themk1762010@gmail.com?subject=Regarding Treazure&body=Hi, I visited your website"
          style={{ textDecoration: "none", color: "white" }}
        >
          Contact Us
        </a>
      </div>

      {/* TITLE */}
      <h1 style={{ textAlign: "center", fontSize: "40px", marginTop: "20px" }}>
        TREAZURE
      </h1>

      {/* SEARCH */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "15px",
            width: "60%",
            borderRadius: "30px",
            border: "none",
            outline: "none",
            background: "#111",
            color: "white",
          }}
        />
      </div>

      {/* TRUST TEXT */}
      <p style={{ textAlign: "center", marginTop: "15px", color: "#aaa" }}>
        Smart deals. Zero waste. Only the best picks.
      </p>
      <p style={{ textAlign: "center", color: "#aaa" }}>
        Every product is handpicked for quality, value and trust.
      </p>

      {/* SECTIONS */}
      {renderSection("TECH", "tech")}
      {renderSection("LIFESTYLE", "lifestyle")}
      {renderSection("TRENDING🔥", "trending")}
    </div>
  );
}
