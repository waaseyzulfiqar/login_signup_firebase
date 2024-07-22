import React from 'react'

function AddProduct() {
  return (
    <div className='px-10 w-full h-min-screen py-6 bg-gray-200'>
        <h2 className='font-bold text-4xl mb-3 text-gray-700'>Add Product</h2>
        <p className='font-bold text-lg pb-2 text-gray-600'>Here you can add product to your store.</p>
        
        <div className='border-b border-gray-400'></div>

        <div className='bg-white mt-4 px-8 py-3 w-full rounded-md'>
            <h3 className='font-medium tracking-wider text-2xl pt-3 text-gray-700 uppercase'>Product Details</h3>
            <p className='font-bold text-base tracking-wider mb-9 text-gray-700'>Add product details here</p>

            <label className='block mb-3 font-medium text-xl text-gray-600'>Product Title</label>
            <input className='block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md' type="text" placeholder='Enter Product Title' />

            <label className='block mb-3 font-medium text-xl text-gray-600'>Product Description</label>
            <input className='block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md' type="text" placeholder='Enter Product Description' />

            <label className='block mb-3 font-medium text-xl text-gray-600'>Product Image</label>
            <input className='block mb-7' type="file" name="" id="" />


            <label className='block mb-3 font-medium text-xl text-gray-600'>Product Price</label>
            <input className='block mb-7 border-2 border-gray-300 px-3 py-3 w-full rounded-md' type="number" placeholder='Rs.' />

            <button className='border px-7 py-2 mb-4 font-medium rounded-md hover:bg-black hover:text-white'>Add</button>

        </div>

    </div>

  )
}

export default AddProduct