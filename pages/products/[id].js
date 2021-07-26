import { useRouter } from "next/router";
import { Skeleton } from "antd";
import { useQuery, QueryClient } from "react-query";
import { mockData } from "../../mocks/apiData";

const fetchProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
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
        <div className="col-span-1 bg-blue-100 flex justify-center items-center pb-8"></div>
      </div>
    </div>
  );
};

export default Product;
