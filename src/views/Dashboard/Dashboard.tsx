import { auth, getProducts, logout, onAuthStateChanged } from "../../Config/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>();

  const [product, setProduct] = useState<any>([]);

  onAuthStateChanged(auth, (user:any) => {
    setUser(user)
  })

  useEffect(() => {
    const products = async () => {
      const allProduct = await getProducts();
      setProduct(allProduct);
    };
    products();
  }, []);

  const detailPage = (item: any) => {
    navigate(`/detail/${item.id}`);
  };

  const userLoggedOut = async () => {
    try {
      if (user) {
        await logout();
        // setUser(null)
        toast.success("Successfully logged out!");
      } else {
        toast.error("Error 404: Already logged out!");
      }
    } catch (error:any) {
      toast.error(`Logout failed: ${error.message}`);
    }
  };

  return (
    <div className="h-screen w-full p-7">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl text-center font-semibold">Dashboard</h2>
        {user && <p className="font-medium">User Email: {user?.email}</p>
      }
        <div>
          <button
            onClick={() => navigate("/addproduct")}
            className="px-3 py-2 font-medium border-2 border-black hover:bg-black hover:text-white rounded-md"
          >
            Add Product
          </button>
          <button
            onClick={userLoggedOut}
            className="px-3 py-2 ml-2 font-medium border-2 border-black hover:bg-black hover:text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 flex-wrap py-6">
        {product?.map((item: any, index: any) => (
          <div
            key={index}
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
