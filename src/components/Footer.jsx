import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white mt-12 py-2 mb-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Logo va slogan */}
        <div className="flex flex-col items-center md:items-start">
          {
            /* <div className="w-24 h-18 rounded-xl overflow-hidden mb-2">
            <img
              src={logo}
              alt="Asli Cafe"
              className="w-full h-full object-cover"
            />
          </div> */
          }
          <h1 className="text-white text-lg md:text-xl font-bold drop-shadow-lg mb-2">
            Mor Salkım
          </h1>

          <p className="text-center md:text-left">
            Morun huzuru, salkımın zarafetiyle
          </p>
        </div>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Bizi Takip Edin</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.tiktok.com/@morsalkimloungecafe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Tiktok
            </a>
            <a
              href="https://www.instagram.com/morsalkimloungecafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/morsalkimloungecafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Cafe Bilgileri */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">İletişim</h3>
          <a
            href="tel:+905422081290"
            className="text-white hover:text-gray-400"
          >
            <p>Telefon: +90 542 208 12 90</p>
          </a>
          <a
            href="https://yandex.com.tr/harita/-/CHbpjUyn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <p>Adres: Atatürk, Atatürk Cd. 167A, 34870 Sancaktepe/İstanbul</p>
          </a>
          <p>Açılış Saatleri: 06:30 - 00:00</p>
          <p>Hafta Sonu: 06:30 - 01:00</p>
        </div>

        {/* Geliştirici Bilgisi */}
        <div className="text-center md:text-left mb-12">
          <h3 className="text-lg font-semibold mb-2">Geliştirici</h3>
          <a
            href="https://portfolio-muhibillo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <p>Ali Vefa</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
