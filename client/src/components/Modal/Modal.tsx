import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { removeFromCart } from "../../store/themeSlice";

function Modal({ closeModal, data, dispatch }: any) {
  return (
    <div className="h-screen w-full fixed inset-0 flex justify-center items-center  bg-slate-200 bg-opacity-100 z-50 overflow-y-auto">
      <div className="w-[80%] max-h-[68vh] px-5 py-5 bg-white shadow-lg rounded overflow-y-auto">
        {data && data.length > 0 ? (
          data.map((x: any, index: any) => (
            <div
              key={index}
              className="border border-slate-300 rounded-md mb-4 p-4 flex justify-between"
            >
              <div className="flex justify-start items-center gap-10">
                <div>
                  <img
                    className="w-32 rounded"
                    src={x.image}
                    alt="product image"
                  />
                </div>

                <div>
                  <h1 className="text-xl font-semibold mb-4">{x.title}</h1>
                  <p>{x.description}</p>
                  <p className="font-medium mt-1">Rs. {x.price}</p>
                  {/* <p>{x.id}</p> */}
                </div>
              </div>

              <div className="flex justify-center place-items-end">
                <div className="flex justify-center items-center gap-2">
                  {x.quantity === 1 ? (
                    <MdDeleteOutline
                    onClick={() => dispatch(removeFromCart(x.id))}
                    className="border font-bold p-1 text-3xl rounded cursor-pointer hover:bg-black hover:text-white"
                    />
                  ) : (
                    <FiMinus
                      onClick={() => dispatch(removeFromCart(x.id))}
                      className="border p-1 text-2xl rounded cursor-pointer"
                      />
                  )}

                  <p>{x.quantity}</p>

                  {/* <GrAdd onClick={() => dispatch(increment(x.id))} className="border font-bold p-1 text-2xl rounded cursor-pointer" /> */}
                </div>
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
