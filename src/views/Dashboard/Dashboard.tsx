import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [products, setProducts] = useState<any>([]);

  const navigate = useNavigate();

  return (
    <div className="h-screen w-full p-7">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl text-center font-semibold">Dashboard</h2>
        <button onClick={() => navigate('/addproduct')} className="px-3 py-2 font-medium border-2 border-black hover:bg-black hover:text-white rounded-md">Add Product</button>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap py-6">
        <div className="border w-[300px] h-[350px] overflow-hidden ease-out duration-300 shadow-md hover:scale-110 p-3 rounded-md cursor-pointer">
          <img
            className="w-44 mb-6 mx-auto rounded-md"
            src="https://static-01.daraz.pk/p/1c6bd9e2415b413f197723ee4d1592c3.png_400x400q75-product.jpg_.webp"
            alt=""
          />
          <h3 className="text-lg font-medium mb-3">
            OLIM NATURALS - Acne-Fighting Blackhead Removal Face Wash
          </h3>
          <p className="text-slate-500 py-1">Rs. 499</p>
        </div>

        <div className="border w-[300px] h-[350px] overflow-hidden ease-out duration-300 shadow-md hover:scale-110 p-3 rounded-md cursor-pointer">
          <img
            className="w-44 mb-6 mx-auto rounded-md"
            src="https://static-01.daraz.pk/p/3154d6d1e8bbd1b746820b8daa9ab76c.jpg_300x0q75.webp"
            alt=""
          />
          <h3 className="text-lg font-medium mb-3">
            Men Watch Business Stainless Steel
          </h3>
          <p className="text-slate-500 py-1">Rs. 2499</p>
        </div>

        <div className="border w-[300px] h-[350px] overflow-hidden ease-out duration-300 shadow-md hover:scale-110 p-3 rounded-md cursor-pointer">
          <img
            className="w-44 mb-6 mx-auto rounded-md"
            src="https://static-01.daraz.pk/p/24734b33b26b2646f71c7eadd31493e0.png_300x0q75.webp"
            alt=""
          />
          <h3 className="text-lg font-medium mb-3">
            Motorola Moto G84 - 12GB RAM 256GB ROM - 6.5 Inches pOLED Display{" "}
          </h3>
          <p className="text-slate-500 py-1">Rs. 49999</p>
        </div>

        <div className="border w-[300px] h-[350px] overflow-hidden ease-out duration-300 shadow-md hover:scale-110 p-3 rounded-md cursor-pointer">
          <img
            className="w-44 mb-6 mx-auto rounded-md"
            src="https://static-01.daraz.pk/p/bec177b78e40079e1f169e623975a00d.jpg_300x0q75.webp"
            alt=""
          />
          <h3 className="text-lg font-medium mb-3">
            HP 15 FQ2505TU I51135G7 8GB 512GB WIN11 1YR HP WARRANTY
          </h3>
          <p className="text-slate-500 py-1">Rs. 173499</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
