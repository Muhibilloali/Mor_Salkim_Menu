import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import Sepet from "./components/Sepet";
import MainPages from "./Component/MainPage";
import OpenPage from "./Component/OpenPage";
import DavetSaloni from "./Component/DavetSaloni";
import OyunSaloni from "./Component/OyunSaloni";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className=" min-h-screen">
      <Router>
        <Routes>
          
          <Route path="/sepet" element={<Sepet />} />
          <Route path="/" element={<OpenPage />} />
          <Route path="/MainPages" element={<MainPages />} />
          <Route path="/DavetSaloni" element={<DavetSaloni />} />
          <Route path="/OyunSaloni" element={<OyunSaloni />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
