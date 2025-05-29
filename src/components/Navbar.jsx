import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" text-black px-6 py-4 flex justify-around ">
     
      <h1 className="text-2xl font-semibold  " >Tienda</h1>

      <button className="hover:text-sky-400 transition">
        <FaShoppingCart size={26} />
      </button>
    </nav>
  );
};

export default Navbar;