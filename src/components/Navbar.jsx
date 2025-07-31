import GarsonModal from "./GarsonModal";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMapMarkerAlt, FaBars, FaHome, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import bell from "../assets/images/hotel-bell.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => setFoodData(data))
      .catch((err) => console.error("Error loading food data:", err));
  }, []);

  const filteredFood = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleSendRequest = async () => {
  try {
    const response = await fetch("http://localhost:3000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "Salom Garson!" }),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("ERROR:", error);
  }
};


  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-cover bg-center ">
        
        <div className="flex items-center gap-2">
                  <a rel="stylesheet" href="https://maps.app.goo.gl/7V9KUCu9uaQRc8448" target="_blank" className="flex items-center gap-1 text-white">
                  <FaMapMarkerAlt className="text-lg" />
                  <span>Sarıgazi, İstanbul</span>
                  </a>
                </div>
        <GiHamburgerMenu
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            {/* <img src={morsalkimlogo} alt="Asli Cafe" className="w-8 h-8 object-cover rounded-md" /> */}
            <div className="text-xl font-semibold text-gray-700">Mor Salkim</div>
          </div>
          <IoClose
            className="text-2xl cursor-pointer text-gray-600"
            onClick={toggleMenu}
          />
        </div>

        <div className="p-4 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Ne yemek istersiniz?"
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ul className="mt-2 bg-white border rounded-lg shadow max-h-40 overflow-y-auto">
                {filteredFood.length > 0 ? (
                  filteredFood.map((item) => (
                    <li
                      key={item.id}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2 text-gray-500">Bulunamadi</li>
                )}
              </ul>
            )}
          </div>

          <div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full mb-2 py-2 border text-black rounded-lg hover:bg-blue-300 transition flex items-center justify-center gap-2"
            >
              <img src={bell} alt="Bell" className="w-5 h-5" />
              <span>Garsonu Çağır</span>
            </button>
            <p className="text-sm text-gray-500 font-semibold mb-2">#ÇokYakında</p>

            <button className="w-full py-2 border text-black rounded-lg hover:bg-blue-300 hover:text-white transition flex items-center justify-center gap-2">
              {/* <img src={table} alt="Table" className="w-5 h-5" /> */}
              <span>Rezervasyon Yap</span>
            </button>
          </div>
        </div>

<div className="px-4">
          <button
            onClick={() => navigate("/MainPages")}
            className="w-56 h-12  mt-8 px-6 py-3 mr-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Menü
          </button>
          <button
            onClick={() => navigate("/DavetSaloni")}
            className="w-56 h-12 mt-8 mr-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Davet Salon
          </button>
          <button
            onClick={() => navigate("/OyunSaloni")}
            className="w-56 h-12 mt-8 mr-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Oyun Salon
          </button>
        </div>


      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}



      {showModal && (
<GarsonModal />
      )}
    </>
  );
}

export default Navbar;
