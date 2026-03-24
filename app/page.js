"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");

  const data = {
    trending: [
      {
        name: "HealthSense Kitchen Weight Machine",
        price: "₹699",
        reviews: "⭐ 4.1 (8.3K)",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        link: "#",
      },
    ],

    tech: {
      phones: [
        {
          name: "Realme Narzo 80 Pro 5G",
          price: "₹19999",
          reviews: "⭐ 4.3 (2.2K)",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          link: "https://amzn.to/3Pu5OV1",
        },
      ],
      laptops: [
        {
          name: "HP 15 13th Gen i3",
          price: "₹45990",
          reviews: "⭐ 4.1 (2.2K)",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
          link: "https://amzn.to/4t43Nx9",
        },
      ],
      speakers: [
        {
          name: "Tribit XSound Go",
          price: "₹2843",
          reviews: "⭐ 4.3 (18K)",
          image: "https://images.unsplash.com/photo-1585386959984-a41552262b3e",
          link: "https://amzn.to/4bxkCec",
        },
      ],
      tabs: [
        {
          name: "Honor Pad X9",
          price: "₹15126",
          reviews: "⭐ 4.3 (1.8K)",
          image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
          link: "https://amzn.to/4dGv44g",
        },
      ],
      earbuds: [
        {
          name: "OnePlus Nord Buds 3r",
          price: "₹1599",
          reviews: "⭐ 4.2 (40K)",
          image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
          link: "https://amzn.to/3NJisyH",
        },
      ],
      watches: [
        {
          name: "boAt Wave Call 3",
          price: "₹1399",
          reviews: "⭐ 4.1 (25K)",
          image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
          link: "https://amzn.to/4c3MQgE",
        },
      ],
    },

    lifestyle: {
      shoes: [
        {
          name: "U.S. Polo Assn. Men's Shoe",
          price: "₹2199",
          reviews: "⭐ 4.4 (1K)",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          link: "https://amzn.to/4bwnyHX",
        },
      ],
      watches: [
        {
          name: "Titan Karishma Watch",
          price: "₹1994",
          reviews: "⭐ 4.4 (1.4K)",
          image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
          link: "#",
        },
      ],
    },
  };

  const filter = (arr) =>
    arr.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  const Card = ({ p }) => (
    <div
      style={{
        minWidth: "230px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "15px",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={p.image}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
      <h3 style={{ marginTop: "10px" }}>{p.name}</h3>
      <p style={{ color: "#aaa" }}>{p.price}</p>
      <p style={{ fontSize: "14px" }}>{p.reviews}</p>

      <a href={p.link} target="_blank">
        <button
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            color: "black",
            fontWeight: "bold",
          }}
        >
          View Deal 🔥
        </button>
      </a>
    </div>
  );

  const Row = ({ title, items }) => (
    <div style={{ marginBottom: "40px" }}>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {filter(items).map((p, i) => (
          <Card key={i} p={p} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* NAV */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#tech">Tech</a>
          <a href="#lifestyle">Lifestyle</a>
          <a href="#trending">Trending 🔥</a>
        </div>

        <h1 style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          TREAZURE
        </h1>

        <a href="mailto:themk1762010@gmail.com">Contact Us</a>
      </div>

      {/* SEARCH */}
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
            background: "#111",
            color: "white",
          }}
        />
        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Smart deals. Zero waste. Only the best picks.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {["all", "tech", "lifestyle", "trending"].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            style={{
              margin: "5px",
              padding: "8px 15px",
              borderRadius: "20px",
              border: "none",
              background: active === c ? "white" : "#222",
              color: active === c ? "black" : "white",
            }}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TRENDING */}
      {(active === "all" || active === "trending") && (
        <div id="trending">
          <Row title="🔥 Trending" items={data.trending} />
        </div>
      )}

      {/* TECH */}
      {(active === "all" || active === "tech") && (
        <div id="tech">
          <h1>🎧 Tech</h1>
          <Row title="Earbuds" items={data.tech.earbuds} />
          <Row title="Phones" items={data.tech.phones} />
          <Row title="Speakers" items={data.tech.speakers} />
          <Row title="Laptops" items={data.tech.laptops} />
          <Row title="Tabs" items={data.tech.tabs} />
          <Row title="Smartwatches" items={data.tech.watches} />
        </div>
      )}

      {/* LIFESTYLE */}
      {(active === "all" || active === "lifestyle") && (
        <div id="lifestyle">
          <h1>👟 Lifestyle</h1>
          <Row title="Shoes" items={data.lifestyle.shoes} />
          <Row title="Watches" items={data.lifestyle.watches} />
        </div>
      )}
    </div>
  );
}
