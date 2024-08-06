import {
  onAuthStateChanged,
  auth,
  getProducts,
} from "../../Config/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const [product, setProduct] = useState<any>([]);



  useEffect(() => {
    onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        setUser(user.email);

        const allProduct = await getProducts();
        setProduct(allProduct);

        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const detailPage = (item: any) => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="h-screen w-full p-7">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl text-center font-semibold">Dashboard</h2>
        <p className="font-medium">
          User Email: <span className="font-bold underline">{user}</span>
        </p>
        <button
          onClick={() => navigate("/addproduct")}
          className="px-3 py-2 font-medium border-2 border-black hover:bg-black hover:text-white rounded-md"
        >
          Add Product
        </button>
      </div>

      <div className="flex justify-center items-center gap-10 flex-wrap py-6">
        {product?.map((item: any, index:any) => (
          <div key={index}
            onClick={() => detailPage(item)}
            className="border w-[300px] h-[320px] overflow-hidden ease-out duration-300 shadow-md hover:scale-110 px-3 py-3 rounded-md cursor-pointer"
          >
            <img
              className="w-44 mb-6 mx-auto rounded-md"
              src={item.image}
              alt=""
            />
            <h3 className="text-lg font-medium mb-3">{item.title}</h3>
            <p className="text-slate-500 py-1">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
