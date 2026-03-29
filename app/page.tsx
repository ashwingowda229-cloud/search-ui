"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const data = [
    {
      title: "Machine Learning Basics",
      description: "Machine learning allows systems to learn from data.",
      category: "AI",
      year: 2022,
    },
    {
      title: "Natural Language Processing",
      description: "NLP helps computers understand human language.",
      category: "AI",
      year: 2021,
    },
    {
      title: "Deep Learning",
      description: "Deep learning uses neural networks with many layers.",
      category: "AI",
      year: 2023,
    },
    {
      title: "Information Retrieval",
      description: "Information retrieval helps search engines find data.",
      category: "Search",
      year: 2020,
    },
  ];

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Search Result Browser UI
      </h1>

      <input
        type="text"
        placeholder="Search documents..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {filtered.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        >
          <h2 style={{ margin: "0 0 5px 0" }}>{item.title}</h2>
          <p style={{ margin: "0 0 5px 0" }}>{item.description}</p>
          <p style={{ color: "gray", fontSize: "14px" }}>
            {item.category} • {item.year}
          </p>
        </div>
      ))}
    </div>
  );
}