import { useState } from "react";
import { addProduct } from "../../Config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [image, setImage] = useState<any>();
  const [price, setPrice] = useState<any>();

  const navigate = useNavigate();

  axios.defaults.withCredentials = true


  const onSubmit = async () => {
    try {
      // Assuming addProduct returns an object with an image URL
      const imageUrl = await addProduct({ image });
  
      // Validate inputs
      if (!description || !price || !title || !imageUrl) {
        throw new Error("All fields are required.");
      }
  
      const response = await axios.post(
        "https://mern-olx-api.vercel.app/product/create",
        { description, price, title, imageUrl },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      toast.success("Product Added Successfully!", response.data);
      navigate("/");
    } catch (error:any) {
      toast.error(error.message);
    }
  };

  return (
    // <div className="px-10 w-full h-min-screen py-6">
    //   <div className="bg-white mt-2 px-8 py-3 w-full rounded-md">
    //     <h3 className="font-medium tracking-wider text-2xl text-gray-700 uppercase text-center">
    //       Product Details
    //     </h3>
    //     <p className="font-bold text-base tracking-wider mb-16 text-gray-700 text-center">
    //       Add product details here
    //     </p>

    //     <label className="block mb-3 font-medium text-xl text-gray-600">
    //       Product Title
    //     </label>
    //     <input
    //       onChange={(e) => setTitle(e.target.value)}
    //       className="block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md"
    //       type="text"
    //       placeholder="Enter Product Title"
    //     />

    //     <label className="block mb-3 font-medium text-xl text-gray-600">
    //       Product Description
    //     </label>
    //     <input
    //       onChange={(e) => setDescription(e.target.value)}
    //       className="block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md"
    //       type="text"
    //       placeholder="Enter Product Description"
    //     />

    //     <label className="block mb-3 font-medium text-xl text-gray-600">
    //       Product Image
    //     </label>
    //     <input
    //       onChange={(e) => setIamge(e.target!.files![0])}
    //       className="block mb-7"
    //       type="file"
    //     />

    //     <label className="block mb-3 font-medium text-xl text-gray-600">
    //       Product Price
    //     </label>
    //     <input
    //       onChange={(e) => setPrice(e.target.value)}
    //       className="block mb-10 border-2 border-gray-300 px-3 py-3 w-full rounded-md"
    //       type="number"
    //       placeholder="Rs."
    //     />

    //     <button
    //       onClick={onSubmit}
    //       className="border w-full px-7 py-2 font-medium rounded-md bg-blue-500 hover:bg-blue-400 text-white"
    //     >
    //       Add
    //     </button>
    //   </div>
    // </div>

    <div className="px-10 w-full min-h-screen py-6 bg-gray-100 flex justify-center items-center">
  <div className="bg-white mt-2 px-8 py-6 w-full max-w-lg rounded-lg shadow-lg">
    <h3 className="font-semibold tracking-wide text-3xl text-blue-600 uppercase text-center">
      Product Details
    </h3>
    <p className="font-medium text-lg tracking-wide mb-8 text-gray-500 text-center">
      Add product details here
    </p>

    <label className="block mb-2 font-medium text-lg text-gray-700">
      Product Title
    </label>
    <input
      onChange={(e) => setTitle(e.target.value)}
      className="block mb-6 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-3 w-full rounded-md transition duration-300 ease-in-out"
      type="text"
      placeholder="Enter Product Title"
    />

    <label className="block mb-2 font-medium text-lg text-gray-700">
      Product Description
    </label>
    <textarea
      onChange={(e) => setDescription(e.target.value)}
      className="block mb-6 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-3 w-full h-32 rounded-md resize-none transition duration-300 ease-in-out"
      placeholder="Enter Product Description"
    />

    <label className="block mb-2 font-medium text-lg text-gray-700">
      Product Image
    </label>
    <input
      onChange={(e) => setImage(e.target!.files![0])}
      className="block mb-6 text-gray-600 cursor-pointer focus:outline-none"
      type="file"
    />

    <label className="block mb-2 font-medium text-lg text-gray-700">
      Product Price
    </label>
    <input
      onChange={(e) => setPrice(e.target.value)}
      className="block mb-10 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-3 w-full rounded-md transition duration-300 ease-in-out"
      type="number"
      placeholder="Rs."
    />

    <button
      onClick={onSubmit}
      className="border w-full px-5 py-3 font-medium rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      Add Product
    </button>
  </div>
</div>

  );
}

export default AddProduct;
