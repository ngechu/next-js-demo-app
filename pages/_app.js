import React from "react";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout";

import { CartProvider } from "../store/CartProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
// import apiData from "./apiData.json";

export const CartContext = React.createContext();
function MyApp({ Component, pageProps }) {
  // Create a client
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default MyApp;
