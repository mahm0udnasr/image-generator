/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const value = {
    user,
    setUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
