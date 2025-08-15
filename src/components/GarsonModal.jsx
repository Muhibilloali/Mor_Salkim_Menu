import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const GarsonModal = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const modalRef = useRef(null);

    const botToken = "8414809454:AAGzbYOMw8VgrudYpTF6JXfhrM3OQ6uc3YY";
  const chatId = "6059700809";

  const categories = ["Menüyü Getir", "Hesabı Getir", "Garsonu Çağır"];

  const tableNumbersList = [
    "Masa 1", "Masa 2", "Masa 3", "Masa 4", "Masa 5",
    "Masa A1", "Masa B2", "VIP 1", "VIP 2", "Teras 3"
  ];

  const filteredTables = tableNumber
    ? tableNumbersList.filter((num) =>
        num.toLowerCase().includes(tableNumber.toLowerCase())
      )
    : [];

  const handleSend = async () => {
    if (!selectedCategory || !tableNumber) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    const text = `📩 Yeni Çağrı:\nKategori: ${selectedCategory}\nMasa Numarası: ${tableNumber}`;
    
    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`
      );
      setIsSent(true);
      setError("");

      setTimeout(() => {
        setIsSent(false);
        setSelectedCategory("");
        setTableNumber("");
        // onClose();
      }, 3000);
    } catch (err) {
      setError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      console.error(err);
    }
  };

  // modal tashqarisiga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="relative bg-white p-6 rounded-xl w-80 shadow-lg space-y-4 text-center"
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-semibold text-gray-700">Ne istersiniz?</h2>

        {/* Kategoriya tugmalari */}
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full py-2 rounded-lg transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masa tanlash */}
        <div className="relative">
          <input
            type="text"
            placeholder="Masa Numarası"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none"
          />

          {tableNumber && !tableNumbersList.includes(tableNumber) && (
            <ul className="absolute z-10 bg-white border w-full rounded-lg mt-1 max-h-40 overflow-y-auto shadow">
              {filteredTables.map((num) => (
                <li
                  key={num}
                  onClick={() => setTableNumber(num)}
                  className="px-3 py-2 text-black cursor-pointer hover:bg-blue-100"
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Xabarlar */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {isSent ? (
          <p className="text-green-600 font-medium">✅ Gönderildi!</p>
        ) : (
          <button
            onClick={handleSend}
            disabled={!selectedCategory || !tableNumber}
            className={`w-full py-2 rounded-lg transition ${
              selectedCategory && tableNumber
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Gönder
          </button>
        )}
      </div>
    </div>
  );
};

export default GarsonModal;
