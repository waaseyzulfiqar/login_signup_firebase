import axios from "axios";
import { auth, logout, onAuthStateChanged } from "../../Config/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>();

  const [product, setProduct] = useState<any>([]);

  onAuthStateChanged(auth, (user: any) => {
    setUser(user);
  });

  useEffect(() => {
    axios
      .get("https://mern-olx-api.vercel.app/product/allProducts")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
  }, []);

  const detailPage = (item: any) => {
    navigate(`/detail/${item._id}`);
  };

  const userLoggedOut = async () => {
    if (user) {
      await logout();
      navigate("/");
      toast.success("Successfully logged out!");
    } else {
      toast.error("Error 404: Already logged out!");
    }
  };

  return (
    // <div className="h-screen w-full p-7">
    //   <div className="flex justify-between mb-6">
    //     <h2 className="text-2xl text-center font-semibold">Dashboard</h2>
    //     {user && <p className="font-medium">User Email: {user?.email}</p>
    //   }
    //     <div>
    //       <button
    //         onClick={() => navigate('/addproduct')}
    //         className="px-3 py-2 font-medium border-2 border-black hover:bg-black hover:text-white rounded-md"
    //       >
    //         Add Product
    //       </button>
    //       <button
    //         onClick={userLoggedOut}
    //         className="px-3 py-2 ml-2 font-medium border-2 border-black hover:bg-black hover:text-white rounded-md"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </div>

    //   <div className="flex justify-center items-center gap-10 flex-wrap py-6">
    //     {product?.map((item: any, index: any) => (
    //       <div
    //         key={index}
    //         onClick={() => detailPage(item)}
    //         className="border w-[300px] h-[320px] overflow-hidden ease-out duration-300 shadow-md hover:scale-110 px-3 py-3 rounded-md cursor-pointer"
    //       >
    //         <img
    //           className="w-44 mb-6 mx-auto rounded-md"
    //           src={item.image}
    //           alt=""
    //         />
    //         <h3 className="text-lg font-medium mb-3">{item.title}</h3>
    //         <p className="text-slate-500 py-1">{item.price}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="min-h-screen w-full p-7 md:p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-6 flex-wrap md:flex-nowrap">
        <h2 className="text-3xl font-bold text-blue-600 text-center md:text-left">
          Dashboard
        </h2>
        {user && (
          <p className="font-medium text-gray-700 md:ml-auto lg:mx-auto">
            User Email: {user?.email}
          </p>
        )}

        <div className="space-x-4 mt-4 md:mt-0">
          <button
            onClick={() => navigate("/addproduct")}
            className="px-4 py-2 font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 transition duration-300 ease-in-out rounded-lg"
          >
            Add Product
          </button>
          <button
            onClick={userLoggedOut}
            className="px-4 py-2 font-semibold border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 transition duration-300 ease-in-out rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap py-6">
        {product?.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => detailPage(item)}
            className="border w-full md:w-[310px] lg:w-[250px] xl:w-[310px] h-[300px] bg-white shadow-lg hover:shadow-xl overflow-hidden transition ease-out duration-300 hover:scale-105 rounded-lg cursor-pointer"
          >
            <img
              className="w-full h-40 object-cover mb-3 mx-auto rounded-md"
              src={item.image}
              alt=""
            />
            <div className="px-3 py-2">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                {item.title}
              </h3>
              <p className="text-md text-green-500 font-medium mb-2">
                Rs. {item.price}
              </p>
              <button
                onClick={() => detailPage(item)}
                className="block w-full py-2 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
