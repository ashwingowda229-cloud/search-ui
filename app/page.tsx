"use client";
import { init } from "next/dist/compiled/webpack/webpack";
import { useState } from "react";

export default function Home() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");

  const results = [
    {
      title: "Natural Language Processing",
      snippet: "Natural Language Processing helps computers understand human language.",
      category: "AI",
      year: "2023",
      link: "https://example.com/nlp"
    },
    {
      title: "Machine Learning Basics",
      snippet: "Machine learning allows systems to learn from data.",
      category: "AI",
      year: "2024",
      link: "https://example.com/ml"
    },
    {
      title: "Web Development Guide",
      snippet: "Web development includes frontend and backend technologies.",
      category: "Web",
      year: "2022",
      link: "https://example.com/web"
    }
  ];

  const highlight = (text: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ?
        <mark key={i} className="bg-yellow-300">{part}</mark>
        : part
    );
  };

  const filtered = results.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) &&
    (category ? item.category === category : true) &&
    (year ? item.year === year : true)
  );

  return (

    <div className="max-w-6xl mx-auto p-8">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Search Result Browser UI
      </h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search documents..."
        className="border p-3 w-full rounded mb-8"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid md:grid-cols-4 gap-6">

        {/* Sidebar Filters */}
        <div className="border rounded p-4 h-fit">

          <h2 className="font-bold mb-4 text-lg">Filters</h2>

          <p className="font-semibold">Category</p>

          <select
            className="border p-2 w-full mb-4"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="AI">AI</option>
            <option value="Web">Web</option>
          </select>

          <p className="font-semibold">Year</p>

          <select
            className="border p-2 w-full"
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">All</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

        </div>

        {/* Results Section */}
        <div className="md:col-span-3 space-y-6">

          {filtered.map((item, index) => (

            <div
              key={index}
              className="border rounded p-4 hover:shadow-lg"
            >

              <a
                href={item.link}
                className="text-blue-600 text-xl font-semibold"
              >
                {highlight(item.title)}
              </a>

              <p className="text-green-700 text-sm">
                {item.link}
              </p>

              <p className="mt-2 text-gray-700">
                {highlight(item.snippet)}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {item.category} • {item.year}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}
git init
git add <div className=""></div>
git commit -m "search ui project"