// GlobalContext.js
import React, { createContext, useEffect, useState } from "react";
import mockData from "../apis/mock-data";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(mockData?.cart);
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser, cartItems, setCartItems }}>
      {children}
    </GlobalContext.Provider>
  );
};
