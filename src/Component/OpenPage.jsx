import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgopen from "../../public/photo/bgopen.png";
// import morlogo from "../../public/photo/morlogo.jpg";

export default function OpenPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/MainPages");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 p-4">
      <div className="text-center  max-w-md w-full">

        {/* <div className="bg-blue-900 mb-12 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-bold text-4xl md:text-xl">
            <img 
            src={morlogo}
            alt="Food Bowl" 
            className="w-40 h-40 max-w-xs mx-auto rounded-full"
          />
          </span>
        </div> */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold -mt-6 mb-24">MOR SALKIM</h1>

        <p className="text-white text-xl md:text-2xl">Morun huzuru, salkımın zarafetiyle</p>

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
