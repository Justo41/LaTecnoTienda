import React from 'react'

const Cards = () => {
  return (
    
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 w-fit mx-auto mt-20 place-items-stretch ">
  {/* CARD */}
  <div className="flex flex-col w-96 bg-white rounded-t-3xl shadow-xl h-full overflow-hidden">
    <div className="overflow-hidden">
      <img
        className="rounded-t-3xl object-contain w-full h-60 bg-white transition-transform duration-700 ease-in-out hover:scale-110"
        src="https://http2.mlstatic.com/D_NQ_NP_675122-CBT75962017058_052024-O.webp"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-6 py-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Monitor Viewsonic j2728</h1>
        <p className="text-2xl">$398.000</p>
      </div>
      <button className="bg-black text-white px-2 py-2 hover:bg-sky-400 w-full">
        Añadir al carrito
      </button>
    </div>
  </div>

  {/* Repetí lo mismo para todas las cards */}
  <div className="flex flex-col w-96 bg-white rounded-t-3xl shadow-xl h-full overflow-hidden hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        className="rounded-t-3xl object-contain w-full h-60 bg-white transition-transform duration-700 ease-in-out hover:scale-110"
        src="https://mexx-img-2019.s3.amazonaws.com/38267_1.jpeg"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-6 py-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Auriculares logitech g pro x</h1>
        <p className="text-2xl">$120.000</p>
      </div>
      <button className="bg-black text-white px-2 py-2 hover:bg-sky-400 w-full">
        Añadir al carrito
      </button>
    </div>
  </div>

  <div className="flex flex-col w-96 bg-white rounded-t-3xl shadow-xl h-full overflow-hidden hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        className="rounded-t-3xl object-contain w-full h-60 bg-white transition-transform duration-700 ease-in-out hover:scale-110"
        src="https://s3-sa-east-1.amazonaws.com/saasargentina/2OQWVy5Ejus3anvdphkp/imagen"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-6 py-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Teclado Mecánico Logitech</h1>
        <p className="text-2xl">$210.000</p>
      </div>
      <button className="bg-black text-white px-2 py-2 hover:bg-sky-400 w-full">
        Añadir al carrito
      </button>
    </div>
  </div>

  <div className="flex flex-col w-96 bg-white rounded-t-3xl shadow-xl h-full overflow-hidden hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        className="rounded-t-3xl object-contain w-full h-60 bg-white transition-transform duration-700 ease-in-out hover:scale-110"
        src="https://arsonyb2c.vtexassets.com/arquivos/ids/364250/01_Product_WH-1000XM4-B.jpg?v=638632937848200000"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-6 py-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Auriculares sony xm4</h1>
        <p className="text-2xl">$421.000</p>
      </div>
      <button className="bg-black text-white px-2 py-2 hover:bg-sky-400 w-full">
        Añadir al carrito
      </button>
    </div>
  </div>

  <div className="flex flex-col w-96 bg-white rounded-t-3xl shadow-xl h-full overflow-hidden hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        className="rounded-t-3xl object-contain w-full h-60 bg-white transition-transform duration-700 ease-in-out hover:scale-110"
        src="https://images.fravega.com/f500/f2a395dcb687f7573edfc2da3178e534.jpg"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-6 py-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Monopatin electrico xioami</h1>
        <p className="text-2xl">$712.152</p>
      </div>
      <button className="bg-black text-white px-2 py-2 hover:bg-sky-400 w-full">
        Añadir al carrito
      </button>
    </div>
  </div>

  <div className="flex flex-col w-96 bg-white rounded-t-3xl shadow-xl h-full overflow-hidden hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        className="rounded-t-3xl object-contain w-full h-60 bg-white transition-transform duration-700 ease-in-out hover:scale-110"
        src="https://mexx-img-2019.s3.amazonaws.com/Silla-Gamer-Xtrike-Me-GC-907-Negro-Rgb_45872_1.jpeg"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-between flex-grow px-6 py-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Silla gamer xtrike</h1>
        <p className="text-2xl">$445.145</p>
      </div>
      <button className="bg-black text-white px-2 py-2 hover:bg-sky-400 w-full">
        Añadir al carrito
      </button>
    </div>
  </div>
</div>



  )
}

export default Cards
