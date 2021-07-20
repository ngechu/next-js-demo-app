import { useRouter } from "next/router";
import { Skeleton } from "antd";
import { useQuery, QueryClient } from "react-query";

const fetchProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data;
};
const Product = () => {
  const router = useRouter();

  const { isLoading, data, error } = useQuery(
    ["product", router.query["id"]],
    () => fetchProduct(router.query["id"])
  );
  if (isLoading) {
    return <Skeleton active />;
  }
  return (
    <div>
      <div className="container h-4/5 rounded shadow-xl bg-white grid grid-cols-3 ">
        <div className="col-span-2">
          <div className="w-full">
            <img
              src={data.image}
              alt=""
              className="h-80 w-full object-scale-down pt-8"
            />
            <h2 className="w-full text-center text-2xl mt-4 font-semibold">
              {data.title}
            </h2>
            <h2 className="w-full p-8 font-medium text-lg text-center">
              {data.description}
            </h2>
            <h3 className="w-full text-center text-3xl font-bold">
              $ {data.price}
            </h3>
          </div>
        </div>
        <div className="col-span-1 bg-blue-100 flex justify-center items-center pb-8">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="w-2/3 flex content-center justify-center h-16 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            <h3 className="text-2xl font-semibold self-center text-indigo-100 ">
              Add to Cart
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
