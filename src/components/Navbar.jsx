import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ count, showCart, isCartOpen, cartItems, clearCart }) => {
  return (
    <nav className="text-black px-6 py-4 flex justify-around items-center relative">
      <h1 className="text-2xl font-semibold">Tienda</h1>

      <div className="relative">
        <button
          className="hover:text-sky-400 transition relative"
          onClick={showCart}
          aria-label="Mostrar carrito"
        >
          {count > 0 && (
            <span className="absolute -top-2 -right-2 rounded-full flex justify-center items-center bg-red-500 text-white w-5 h-5 text-xs font-bold">
              {count}
            </span>
          )}
          <FaShoppingCart size={26} />
        </button>

        {isCartOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg p-4 w-64 rounded-xl border z-20">
            <h2 className="text-lg font-semibold mb-2">Carrito</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">El carrito está vacío</p>
            ) : (
              <>
                <ul className="text-sm text-gray-700 mb-4 max-h-48 overflow-y-auto">
                  {cartItems.map((item, index) => (
                    <li key={index} className="border-b py-1">
                      {item.name} – ${item.price.toLocaleString()}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={clearCart}
                  className="bg-red-500 hover:bg-red-600 transition text-white w-full py-2 rounded"
                >
                  Vaciar carrito
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

