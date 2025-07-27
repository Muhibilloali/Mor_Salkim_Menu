import React from 'react'

function SidebarPage() {
  return (
    <div>
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
              <img src={table} alt="Table" className="w-5 h-5" />
              <span>Rezervasyon Yap</span>
            </button>
          </div>
        </div>
          {/* {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={toggleMenu}
            ></div>
          )}
    
    
    
          {showModal && (
    <GarsonModal /> */}
      </div>

    
  )
}

export default SidebarPage
