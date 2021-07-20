import React from "react";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";

export const CartContext = React.createContext();
function MyApp({ Component, pageProps }) {
  // Create a client
  const [queryClient] = React.useState(() => new QueryClient());

  //Create cart context
  const [cartCount, setCartCount] = React.useState(
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(`${localStorage.getItem("cart")}`).length
      : 0
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartContext.Provider value={{ cartCount, setCartCount }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContext.Provider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default MyApp;
