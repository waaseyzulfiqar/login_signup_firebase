import {
  onAuthStateChanged,
  auth,
  getProducts,
} from "../../Config/firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTheme } from "../../store/themeSlice";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const [product, setProduct] = useState<any>([]);

  const dispatch = useDispatch()

  const color = useSelector<any>(state =>  state.color)

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
    <div style={{backgroundColor: `${color}`}} className="h-screen w-full p-7">
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

        <div>
          <button onClick={() => dispatch(setTheme('red'))} className="border px-5 py-1 bg-red-500 text-white rounded">red</button>
          <button onClick={() => dispatch(setTheme('blue'))} className="border px-5 py-1 bg-blue-500 text-white rounded">blue</button>
          <button onClick={() => dispatch(setTheme('green'))} className="border px-5 py-1 bg-green-500 text-white rounded">green</button>
          <button onClick={() => dispatch(setTheme(''))} className="border-2 px-5 py-1  rounded">Normal</button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 flex-wrap py-6">
        {product?.map((item: any) => (
          <div
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
