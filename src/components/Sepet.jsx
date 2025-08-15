import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function Sepet() {
  const [cartItems, setCartItems] = useState([]);
  const [masaNo, setMasaNo] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);


  const botToken = "8414809454:AAGzbYOMw8VgrudYpTF6JXfhrM3OQ6uc3YY";
  const chatId = "6059700809";

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToDelete);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  const handleSendToTelegram = async () => {
    if (!masaNo) {
      alert("Lütfen masa numarasını girin.");
      return;
    }

    setIsSending(true);

    const message = `
📋 *Yeni Sipariş!*
🪑 Masa No: ${masaNo}

🛒 *Siparişler:*
${cartItems.map((item, i) => `#${i + 1}: ${item.name} - ${item.price} TL`).join("\n")}

💰 *Toplam:* ${totalPrice.toFixed(2)} TL
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown"
        })
      });

      setSent(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Tekrar deneyin, bir sorun oluştu.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-indigo-500 p-4 md:p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => window.history.back()}
          className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
        >
          <IoMdArrowBack size={24} />
        </button>
        <h1 className="text-2xl font-bold text-white">Sepetim</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center text-white text-lg font-medium mt-12">
          Sepetiniz şu anda boş 🛒
        </div>
      ) : (
        <>
          {/* Mahsulotlar */}
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-20 object-cover rounded-xl shadow"
                  />
                  <div>
                    <div className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.price} TL
                    </div>
                    {sent && (
                      <div className="text-sm text-green-600 mt-1 font-semibold">
                        Hazırlanıyor...
                      </div>
                    )}
                  </div>
                </div>
                {!sent && (
                  <button onClick={() => handleDelete(index)}>
                    <MdDeleteOutline className="text-3xl text-rose-500 hover:text-rose-700 transition" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Toplam + Masa */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-5 space-y-4 border-t-2 border-orange-500">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">Toplam Tutar:</span>
              <span className="text-2xl font-bold text-orange-600">
                {totalPrice.toFixed(2)} TL
              </span>
            </div>
            <input
              type="text"
              value={masaNo}
              onChange={(e) => setMasaNo(e.target.value)}
              placeholder="Masa numarasıni girin"
              className="w-full border rounded-lg px-4 py-2 text-gray-800 outline-none focus:ring-2 ring-orange-500"
              disabled={sent}
            />
            <button
              onClick={handleSendToTelegram}
              disabled={isSending || sent}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
            >
              {isSending ? "Gönderilmakda..." : sent ? "Gönderildi ✅" : "Onayla ve Garsona Gönder"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Sepet;
