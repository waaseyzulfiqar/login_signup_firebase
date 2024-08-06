import React, { useState } from "react";

interface ModalProps {
  closeModal: (closeModal: boolean) => void;
}

function Modal({ closeModal, data }: any) {
  return (
    <div className="h-screen w-full fixed inset-0 flex justify-center items-center  bg-slate-200 bg-opacity-100 z-50 overflow-y-auto">
      <div className="w-[80%] max-h-[68vh] px-5 py-5 bg-white shadow-lg rounded overflow-y-auto">
        {data && data.length > 0 ? (
          data.map((x: any, index: any) => (
            <div key={index} className="border border-slate-300 rounded-md mb-4 p-4 flex justify-start items-center gap-10">
              <div>
                <img className="w-32 rounded" src={x.image} alt="product image" />
              </div>

              <div>
                <h1 className="text-xl font-semibold mb-4">{x.title}</h1>
                <p>{x.description}</p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-black text-center font-medium text-xl">
            No Products to show...
          </h1>
        )}
        <button
          className="float-end mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          onClick={() => closeModal(false)}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
