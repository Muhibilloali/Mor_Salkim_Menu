import { useState, useRef, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Sidebar from "./SidebarPage";
import CaruselPage from "./CaruselPage";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import Navbar from "../components/Navbar";
import bell from "../assets/images/hotel-bell.png";
import GarsonModal from "../components/GarsonModal";

export default function MainPages() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ modal state
  const navigate = useNavigate();
  const topRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  {showModal && <GarsonModal onClose={() => setShowModal(false)} />}


  const addToCart = (item) => {
    setCart((prevCart) => {
      const updated = [...prevCart, item];
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="relative min-h-screen bg-indigo-950 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {isSidebarOpen && (
        <div className="fixed inset-0 z-20">
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>
      )}

      <div className="pt-4 px-4" ref={topRef}>
        <CaruselPage handleTabClick={handleTabClick} />
      </div>

      {/* ✅ Modal component */}
      {showModal && <GarsonModal onClose={() => setShowModal(false)} />}

      <div className="fixed bottom-0 left-0 right-0 bg-indigo-700 text-white flex justify-around items-center py-3 z-10 rounded-t-xl">
        <FaHome
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/MainPages")}
        />
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/sepet")}
        >
          <TiShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* ✅ Bell icon button */}
        <button onClick={() => setShowModal(true)}>
          <img src={bell} alt="Bell" className="w-5 h-5" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
