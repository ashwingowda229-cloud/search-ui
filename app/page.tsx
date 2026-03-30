"use client";

import { useState } from "react";

export default function Home() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");

  const data = [
    {
      title: "Machine Learning Basics",
      description: "Machine learning allows systems to learn from data.",
      category: "AI",
      year: "2022",
    },
    {
      title: "Natural Language Processing",
      description: "NLP helps computers understand human language.",
      category: "AI",
      year: "2021",
    },
    {
      title: "Deep Learning",
      description: "Deep learning uses neural networks with many layers.",
      category: "AI",
      year: "2023",
    },
    {
      title: "Information Retrieval",
      description: "Information retrieval helps search engines find data.",
      category: "Search",
      year: "2020",
    },
  ];

  const highlightText = (text: string, keyword: string) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "gi");

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow", fontWeight: "bold" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filtered = data.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      (category ? item.category === category : true) &&
      (year ? item.year === year : true)
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

      <div style={{ display: "flex", gap: "20px" }}>

        {/* Sidebar Filters */}
        <div style={{ width: "200px" }}>

          <h3>Category</h3>
          <select
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
          >
            <option value="">All</option>
            <option value="AI">AI</option>
            <option value="Search">Search</option>
          </select>

          <h3>Year</h3>
          <select
            onChange={(e) => setYear(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          >
            <option value="">All</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>

        </div>

        {/* Search Results */}
        <div style={{ flex: 1 }}>
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
              <h2 style={{ margin: "0 0 5px 0" }}>
                {highlightText(item.title, query)}
              </h2>

              <p style={{ margin: "0 0 5px 0" }}>
                {highlightText(item.description, query)}
              </p>

              <p style={{ color: "gray", fontSize: "14px" }}>
                {item.category} • {item.year}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}