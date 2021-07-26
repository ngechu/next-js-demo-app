import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  //Create cart context
  const [cartCount, setCartCount] = React.useState(
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(`${localStorage.getItem("cart")}`).length
      : 0
  );

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
