import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mor from "../../public/morout.jpg"; 
import bgopen from "../../public/photo/bgopen.png";

export default function OpenPage() {
  const navigate = useNavigate();

  const buttons = [
    {
      label: "Menü",
      images: [
        "https://media.istockphoto.com/id/1018141890/tr/foto%C4%9Fraf/s%C4%B1cak-g%C3%BCne%C5%9Fli-bir-%C3%B6%C4%9Fleden-sonra-%C3%BCzerinde-bir-restoranda-oturan-iki-bo%C5%9F-%C5%9Farap-barda%C4%9F%C4%B1m.jpg?s=612x612&w=0&k=20&c=-wEL1qSwS_sOADdFpeaGGdKw2rdByQwFmCxWZEnQvWg=",
"https://media.istockphoto.com/id/1829241109/tr/foto%C4%9Fraf/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=tJU5WbQLEgUXsNvq6I-7V7-pJuZmzCzQ6jwLiP0cLSY=",
        "https://qul.imgix.net/4ae52d3d-0990-4c49-841e-37ee988a00ba/598851_sld.jpg",
      ],
      route: "/MainPages",
    },
    {
      label: "Davet Salon",
      images: [
        "https://lh4.googleusercontent.com/proxy/pKyl8iJkLTgxP7Lf4sCwoHZ-TyltzbiPz9OIkoCh8NTFyDrmdp2Zl9u3AWXIWwcSNFXh73QMk1vYAhzyX--UWtZO7DXsyuJc1cvspDd54w",
        "https://i.dugun.com/gallery/47164/preview_osmanli-davet-balo-salonu_LO6MebhK.jpg",
        "https://i.dugun.com/gallery/47164/preview_osmanli-davet-balo-salonu_2KFFy8Oh.jpg",
      ],
      route: "/DavetSaloni",
    },
    {
      label: "Oyun Salon",
      images: [
        "https://www.raster.com.tr/uploads/img/1583578405.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/1a/10/af/77/sade-garden-tabu.jpg",
        "https://i.pinimg.com/originals/a4/4d/f5/a44df53a845ebc8b59edb4e170b0a5e6.jpg",
      ],
      route: "/OyunSaloni",
    },
  ];

  const [imageIndexes, setImageIndexes] = useState(buttons.map(() => 0));

  // Har 2 sekundda rasm indeksini yangilash
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % buttons[i].images.length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 p-4">
      
      <div className="text-center max-w-4xl w-full">
        <h1 className="text-white text-4xl md:text-4xl lg:text-8xl font-bold mt-6 mb-12">
          MOR SALKIM
        </h1>

        <p className="text-white text-xl md:text-2xl mb-10">
          Morun huzuru, salkımın zarafetiyle
        </p>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {buttons.map((btn, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <button
                onClick={() => navigate(btn.route)}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-green-500 rounded-full overflow-hidden shadow-lg border-2 border-white hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={btn.images[imageIndexes[index]]}
                  alt={`${btn.label} carousel`}
                  className="w-full h-full object-cover"
                />
              </button>
              <span className="text-white mt-2 text-2xl font-medium">
                {btn.label}
              </span>
            </div>
          ))}
        </div>

        {/* <div className="mt-12">
          <img
            src={bgopen}
            alt="Alt Görsel"
            className="w-full max-w-xs mx-auto rounded-full"
          />
        </div> */}
      </div>
    </div>
  );
}
