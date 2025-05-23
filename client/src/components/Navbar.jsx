import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
export default function Navbar() {
  const navigate = useNavigate();
  const { user, setIsLoggedIn, logout, credit } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img
          src={assets.logo}
          alt="imagify logo"
          className="w-28 sm:w-32 lg:w-40"
        />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="flex items-center gap-2 bg-blue-100  px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-[0.95]
            transition-all duration-700"
              onClick={() => navigate("/pricing")}
            >
              <img
                src={assets.credit_star}
                alt="credit plans star icon"
                className="w-5"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left: {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile icon"
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="m-0 p-2 bg-white rounded-md border border-gray-200 drop-shadow-xs text-sm">
                  <li
                    className="py-1 px-2 cursor-pointer pr-10"
                    onClick={logout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/pricing")} className="cursor-pointer">
              Pricing
            </p>
            <button
              onClick={setIsLoggedIn.bind(null, true)}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
