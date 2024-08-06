import React from "react";

interface ModalProps {
  closeModal: (isOpen: boolean) => void;
}

function Modal({ closeModal }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-200 bg-opacity-100 z-50">
      <div className="w-[500px] p-6 bg-white shadow-lg rounded">
        <h1 className="text-xl font-semibold mb-4">This is a modal</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          onClick={() => closeModal(false)}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
