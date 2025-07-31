import React, { useState } from "react";
import Davet_logo from "../assets/davet-logo1.png";
import dataImages from "../data/dataImages.json";

const DavetSaloni = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    guestCount: "",
    phone: "",
    notes: ""
  });

  const services = [
    { name: "Kına Gecesi", img: "https://iasbh.tmgrup.com.tr/c9358c/1200/627/0/72/724/451?u=https://isbh.tmgrup.com.tr/sbh/2022/12/21/kina-gecesi-malzemeleri-listesi-kina-gecesi-icin-gerekli-malzemeler-nelerdir-nasil-hazirlik-yapilir-ve-neler-a-1671606449973.jpg" },
    { name: "Nişan", img: "https://www.mekece.com/class/INNOVAEditor/assets/nisan-hazirliklari/nisan-tepsisi/nisan-tepsisi-tps-41c-dogal-kutuk-soz-tepsisi.jpg" },
    { name: "Sünnet", img: "https://moonorganizasyon.com/wp-content/uploads/2022/07/moon-organizasyon-sunnet1.jpg" },
    { name: "Düğün", img: "https://i.pinimg.com/1200x/01/a5/c3/01a5c3e2ab9f599a5808d82216d6523d.jpg" },
    { name: "Doğum Günü", img: "https://www.livapastacilik.com/cdn/shop/products/makaronlu-dogum-gunu-ozel-pasta-liva-pastacilik-791769_x700.jpg?v=1691236408" }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async () => {
    const token = "7160637523:AAHLbVRgNd7yWO0WsBmvMVzOSau2Ex0q7z4";
    const chatId = "6059700809";

    if (!formData.name || !formData.surname || !formData.guestCount || !formData.phone || !selectedService) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    const message = `
📩 Yeni Rezervasyon Talebi
👤 Adınız Soyadınız: ${formData.name} ${formData.surname}
💍 Hizmet Türü: ${selectedService}
👥 Kişi Sayısı: ${formData.guestCount}
📞 Telefon: ${formData.phone}
📝 Not: ${formData.notes}
    `;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    alert("Bilgilerinizi aldık ve en kısa sürede sizinle iletişime geçeceğiz.");
    setFormData({ name: "", surname: "", guestCount: "", phone: "", notes: "" });
    setSelectedService("");
  };

  return (
    <div className="px-4 py-10 max-w-screen-xl mx-auto space-y-12 scroll-smooth">
      {/* Başlık */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
        <img src={Davet_logo} alt="Logo" className="w-32 h-24" />
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 text-center">
          Mor Salkım Düğün Davet Salonu
        </h2>
      </div>

      {/* Navigasyon */}
      <nav className="flex justify-center flex-wrap gap-4 sm:gap-6 text-white text-xs sm:text-lg bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg py-3 shadow-lg">
        <a href="#hakkimizda" className="hover:underline">Hakkımızda</a>
        <a href="#hizmetlerimiz" className="hover:underline">Hizmetlerimiz</a>
        <a href="#galeri" className="hover:underline">Galeri</a>
        <a href="#rezervasyon" className="hover:underline">Rezervasyon</a>
        <a href="#iletisim" className="hover:underline">İletişim</a>
      </nav>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="space-y-4">
        <h3 className="text-2xl font-semibold text-purple-600">Hakkımızda</h3>
        <p className="text-gray-700 leading-relaxed">
          Mor Salkım Düğün Davet Salonu, yılların tecrübesiyle siz değerli misafirlerimize unutulmaz anlar yaşatmak için hizmet vermektedir. Modern dekorasyonu, geniş salon kapasitesi ve profesyonel ekibiyle düğün, nişan, kına gecesi gibi özel günlerinize ev sahipliği yapıyoruz.
        </p>
      </section>

      {/* Hizmetlerimiz */}
      <section id="hizmetlerimiz">
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Hizmetlerimiz</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition p-2 text-center"
              onClick={() => setSelectedService(service.name)}
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-36 object-cover rounded-t-md"
              />
              <div className="mt-2 font-medium text-purple-700">{service.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri">
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Galeri</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dataImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src={img.url}
                alt={`Salon ${i + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Rezervasyon */}
      <section id="rezervasyon" className="space-y-4">
        <h3 className="text-2xl font-semibold text-purple-600">Rezervasyon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Adınız"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleFormChange}
            placeholder="Soyadınız"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleFormChange}
            placeholder="Kişi Sayısı"
            className="border p-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            placeholder="Telefon"
            className="border p-2 rounded"
          />
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="col-span-1 md:col-span-2 border p-2 rounded"
          >
            <option value="">Hizmet Türü Seçiniz</option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </select>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleFormChange}
            placeholder="Notlar"
            className="col-span-1 md:col-span-2 border p-2 rounded min-h-[100px]"
          ></textarea>
        </div>
        <button
          onClick={sendToTelegram}
          className="bg-purple-600 text-white px-6 py-2 rounded mt-4 hover:bg-purple-700"
        >
          Gönder
        </button>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="text-center mt-12 text-sm text-gray-500">
        <p>&copy; 2025 Mor Salkım Davet Salonu | Tüm hakları saklıdır</p>
      </section>
    </div>
  );
};

export default DavetSaloni;