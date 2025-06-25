/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/users/credits`, {
        headers: {
          authorization: token,
        },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      console.log(token);
      const { data } = await axios.post(
        `${apiUrl}/images/generate`,
        {
          prompt,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (data.success) {
        loadCreditData();
        return data.imageUrl;
      } else {
        toast.error(data.message);
        loadCreditData();
        if (data.creditBalance == 0) {
          navigate("/pricing");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    setUser(false);
    setIsLoggedIn(false);
    setToken(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    apiUrl,
    token,
    setToken,
    credit,
    setCredit,
    logout,
    loadCreditData,
    generateImage,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
