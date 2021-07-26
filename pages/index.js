import Image from "next/image";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { Skeleton, Space, Divider } from "antd";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { mockData } from "../mocks/apiData";
//Fetch data
const fetchProducts = async () => {
  return mockData;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("products", fetchProducts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home({ products }) {
  // Access the client
  const { isLoading, data, error } = useQuery("products", fetchProducts);
  if (isLoading) {
    return <Skeleton active size="large" />;
  }

  return (
    <div className="flex flex-col">
      <div className="">
        <Hero />
      </div>
      <div className="h-180 p-6 flex flex-row flex-wrap justify-start content-center gap-6">
        {data.map((product) => {
          return (
            <Card
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </div>
      <div className="h-80">
        <Image
          className="object-cover"
          src="/rolex.jpg"
          height="300 "
          width="1200"
        />
      </div>
    </div>
  );
}
