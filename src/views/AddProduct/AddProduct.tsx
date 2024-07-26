import { useState } from "react";
import { addProduct } from "../../Config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [image, setIamge] = useState<any>();
  const [price, setPrice] = useState<any>();

  const navigate = useNavigate()

  const onSubmit = async() => {
    try{
        await addProduct({title, description, image, price})
        toast.success('Product added successfully!')
        navigate('/dashboard')
    }catch(e:any){
      toast.error(e.message)
    }
  }

  return (
    <div className="px-10 w-full h-min-screen py-6">
  
      <div className="bg-white mt-2 px-8 py-3 w-full rounded-md">
        <h3 className="font-medium tracking-wider text-2xl text-gray-700 uppercase text-center">
          Product Details
        </h3>
        <p className="font-bold text-base tracking-wider mb-16 text-gray-700 text-center">
          Add product details here
        </p>

        <label className="block mb-3 font-medium text-xl text-gray-600">
          Product Title
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md"
          type="text"
          placeholder="Enter Product Title"
        />

        <label className="block mb-3 font-medium text-xl text-gray-600">
          Product Description
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md"
          type="text"
          placeholder="Enter Product Description"
        />

        <label className="block mb-3 font-medium text-xl text-gray-600">
          Product Image
        </label>
        <input
          onChange={(e) => setIamge(e.target!.files![0])}
          className="block mb-7"
          type="file"
        />

        <label className="block mb-3 font-medium text-xl text-gray-600">
          Product Price
        </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="block mb-10 border-2 border-gray-300 px-3 py-3 w-full rounded-md"
          type="number"
          placeholder="Rs."
        />

        <button
        onClick={onSubmit}
        className="border w-full px-7 py-2 font-medium rounded-md bg-blue-500 hover:bg-blue-400 text-white">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
