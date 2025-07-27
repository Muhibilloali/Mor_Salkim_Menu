import { useState } from "react";
import foodData from "../data/foodData.json";
import foodCategories from "../data/foodCategories.json";

function HeroSection({ onSearchSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = [];

  Object.entries(foodData).forEach(([categoryKey, val]) => {
    const sections = Array.isArray(val) ? { [categoryKey]: val } : val;

    Object.entries(sections).forEach(([subCat, items]) => {
      items.forEach((item) => {
        if (
          typeof item.name === "string" &&
          item.name.toLowerCase().includes((searchTerm || "").toLowerCase())
        ) {
          filteredProducts.push({ name: item.name, category: subCat });
        }
      });
    });
  });

  const filteredCategories = Object.entries(foodCategories)
    .filter(
      ([key, items]) =>
        Array.isArray(items) &&
        items.length > 0 &&
        typeof items[0]?.title === "string" &&
        items[0].title.toLowerCase().includes((searchTerm || "").toLowerCase())
    )
    .map(([key, items]) => ({ title: items[0].title }));

  return (
    <div className="relative w-full h-[40vh] sm:h-[70vh] md:h-[80vh] mt-2 lg:h-screen">
      <img
        src="https://img.pikbest.com/wp/202347/exterior-3d-illustration-of-a-coffee-shop-or-restaurant-s_9763107.jpg!w700wp"
        alt="main_bg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-2">
          Mor Salkım
        </h1>
        <p className="text-white text-lg md:text-2xl mb-4">
          Morun huzuru, salkımın zarafetiyle
        </p>
        
      </div>
      
    </div>
  );
}

export default HeroSection;