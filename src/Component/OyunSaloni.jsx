import React from "react";
import oyunImages from "../data/OyunImages.json";

function OyunSaloni() {
  return (
    <div className="px-4 py-10 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Oyun Salonu Galerisi
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {oyunImages.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.url}
              alt={`Oyun Resmi ${index + 1}`}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OyunSaloni;


