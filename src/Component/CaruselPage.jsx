import React, { useEffect, useState } from "react";
import foodData from "../data/foodData.json";
import { TiShoppingCart } from "react-icons/ti";

function CaruselPages() {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const keys = Object.keys(foodData);
    setCategories(keys);
    setActiveTab(keys[0]);
    setFilteredItems(
      foodData[keys[0]].map((item) =>
        item.name === "Cool Lime" ? { ...item, isDiscounted: true } : item
      )
    );
  }, []);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setFilteredItems(
      foodData[key].map((item) =>
        item.name === "Cool Lime" ? { ...item, isDiscounted: true } : item
      )
    );
  };

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.some((x) => x.name === item.name);
      if (!exists) {
        const updated = [...prev, item];
        localStorage.setItem("cartItems", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  const isInCart = (itemName) => {
    return cartItems.some((item) => item.name === itemName);
  };

  return (
    <div className="w-full mt-4 space-y-6">
      {/* Karusel */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-2 py-2 w-max">
          {categories.map((category, index) => {
            const image = foodData[category][0]?.image;
            return (
              <button
                key={index}
                onClick={() => handleTabClick(category)}
                className={`flex-shrink-0 w-28 text-center rounded-lg p-2 transition-all duration-300 border-2 ${
                  activeTab === category
                    ? "border-indigo-500 bg-indigo-500 text-white"
                    : "bg-blue-800 text-white border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={category}
                  className="w-24 h-24 rounded-md object-cover mx-auto hover:scale-105 transition-transform duration-200"
                />
                <p className="text-sm mt-2 font-semibold">{category}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mahsulotlar */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-2">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="bg-indigo-500 text-white rounded-lg shadow-md p-3 flex flex-col justify-between"
          >
            {/* Rasm va chegirma belgisi */}
            <div className="relative w-full h-28 mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
              {item.isDiscounted && (
                <img
                  src="/discount.gif"
                  alt="Chegirma"
                  className="absolute top-1 right-1 w-12 h-12 bg-white rounded-full"
                />
              )}
            </div>

            <h3 className="font-bold mt-1 text-sm">{item.name}</h3>
            <p className="text-xs text-black min-h-[32px]">{item.ingredients}</p>

            <div className="flex justify-between items-center mt-2">
              <p className="text-sm font-semibold">{item.price} ₺</p>
              <button onClick={() => addToCart(item)}>
                <TiShoppingCart
                  className={`text-2xl transition-colors ${
                    isInCart(item.name) ? "text-green-400" : "text-white"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaruselPages;
