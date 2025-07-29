import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgopen from "../../public/photo/bgopen.png";

export default function OpenPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 p-4">
      <div className="text-center  max-w-md w-full">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold -mt-6 mb-24">
          MOR SALKIM
        </h1>

        <p className="text-white text-xl md:text-2xl">
          Morun huzuru, salkımın zarafetiyle
        </p>

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

        <div className="mt-12">
          <img
            src={bgopen}
            alt="Food Bowl"
            className="w-full max-w-xs mx-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
