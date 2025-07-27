

// pages/Home.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import FoodCategory from "../components/FoodCategory";
import SweetCategory from "../components/SweetCategory";
import SearchList from "../components/SearchList";
import pancakeImg from "../assets/images/pancakes.jpg";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar />

      {/* Header image */}
      <div className="relative rounded-xl overflow-hidden">
        <img src={pancakeImg} alt="Asli Cafe" className="w-full h-48 md:h-64 object-cover" />

        {/* Search input markazda */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Yemek ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full py-2 px-4 pr-10 text-black text-sm shadow-md"
            />
            <FaSearch className="absolute top-2.5 right-3 text-black" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <FoodCategory />
        <SweetCategory />
        <SearchList filter={searchTerm} />
      </div>
    </div>
  );
}

export default Home;