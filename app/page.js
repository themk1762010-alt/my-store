"use client";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");

  const categories = ["all", "tech", "lifestyle", "trending"];

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", color: "white", fontFamily: "Arial" }}>
      
      {/* 🔥 NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px" }}>
        <h2 style={{ fontWeight: "bold", letterSpacing: "2px" }}>TREAZURE</h2>

        <a
          href="mailto:themk1762010@gmail.com?subject=Contact from Treazure&body=Hi, I visited your site"
          style={{ textDecoration: "none", color: "white", border: "1px solid #555", padding: "8px 16px", borderRadius: "20px" }}
        >
          Contact Us
        </a>
      </div>

      {/* 🔍 SEARCH */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "15px",
            width: "50%",
            borderRadius: "30px",
            border: "none",
            background: "#1a1a1a",
            color: "white",
            outline: "none"
          }}
        />

        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Smart deals. Zero waste. Only the best picks.
        </p>
      </div>

      {/* 🧠 FILTER BUTTONS */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            style={{
              margin: "5px",
              padding: "8px 15px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: active === c ? "white" : "#222",
              color: active === c ? "black" : "white",
              transition: "0.3s"
            }}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🛍️ PRODUCTS (DUMMY UI) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", gap: "20px", flexWrap: "wrap" }}>
        
        {["Product 1", "Product 2", "Product 3"].map((p, i) => (
          <div
            key={i}
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "15px",
              width: "200px",
              textAlign: "center",
              transition: "0.3s",
              cursor: "pointer"
            }}
          >
            <div style={{ height: "120px", background: "#333", borderRadius: "10px", marginBottom: "10px" }}></div>
            <h4>{p}</h4>
            <p style={{ color: "#aaa" }}>Best deal 🔥</p>

            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                borderRadius: "10px",
                border: "none",
                background: "white",
                color: "black",
                cursor: "pointer"
              }}
            >
              View
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}
