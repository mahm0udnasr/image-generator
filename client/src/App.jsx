import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      {isLoggedIn && <Login />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
