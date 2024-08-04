import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showProductOnDetailPage } from "../../Config/firebase";
import { IoCart } from "react-icons/io5";

function Detail() {
  const [handleProduct, setHandleProduct] = useState<any>([]);

  const param = useParams();

  useEffect(() => {
    const singleProduct = async () => {
      const product = await showProductOnDetailPage(`${param.id}`);

      setHandleProduct(product);
    };

    singleProduct();
  }, []);

  return (
    <div className="h-screen w-full px-14 py-5">
      <div className="flex items-center justify-between">
        <h2 className="text-center text-2xl font-semibold">Detail</h2>
        <div className="flex">
          <IoCart className="text-2xl cursor-pointer" />
          <span className="text-sm font-medium">0</span>
        </div>
      </div>

      <div className="flex justify-around items-center mt-20 py-8 shadow-lg rounded-lg border">
        <img className="w-72" src={handleProduct.image} alt="" />
        <div className="w-[450px] flex flex-col gap-6">
          <h1 className="text-2xl font-medium">{handleProduct.title}</h1>
          <p>
            Actual Price: <s>$200</s>
          </p>
          <p className="font-medium">{handleProduct.description}</p>
          <p className="text-sm font-medium text-indigo-700">{`Deal of the day: $${handleProduct.price}`}</p>
          <p className="capitalize text-slate-500"></p>
          <div className="bg-indigo-500 w-fit text-white font-semibold px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-400">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
