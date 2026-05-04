"use client";
import { useState, useEffect } from "react";
import TileCard from "../component/tileCard/TileCard";
import { Search } from "lucide-react";

const TilesPage = () => {
  const [allTiles, setAllTiles] = useState([]);
  const [filteredTiles, setFilteredTiles] = useState([]);
  const [category, setCategory] = useState("All Materials");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All Materials", "Ceramic", "Porcelain", "Marble", "Terracotta"];

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const res = await fetch('/api/proxy/products');
        const data = await res.json();
        const tiles = Array.isArray(data) ? data : data.products || [];
        setAllTiles(tiles);
        setFilteredTiles(tiles);
      } catch (error) {
        console.error("Failed to fetch tiles:", error);
      }
    };
    fetchTiles();
  }, []);

  // Filter Logic
  useEffect(() => {
    let temp = allTiles;

    if (category !== "All Materials") {
      temp = temp.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }

    if (searchQuery) {
      temp = temp.filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.material.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTiles(temp);
  }, [category, searchQuery, allTiles]);

  return (
    <div className="bg-[#FCFCFC] min-h-screen pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto pt-20 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Curated Textures</h1>
          <p className="text-gray-500 leading-relaxed">
            Explore our architectural catalog of high-end ceramic, porcelain, and natural stone finishes for modern design projects.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search by material, color, or collection..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#A15D3F] transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 text-xs font-medium rounded-full transition-all ${
                  category === cat 
                  ? "bg-[#8B4513] text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>

        {/* Empty State */}
        {filteredTiles.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No textures found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default TilesPage;