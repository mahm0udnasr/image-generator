import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { User, Mail, Lock, X } from "lucide-react";
export default function Login() {
  // stop scrolling when the form is open
  const { setIsLoggedIn, apiUrl } = useContext(AppContext);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [mode, setMode] = useState({
    title: "Sign In",
    text: "Welcome back! Please sign in to continue",
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Full Name",
      required: true,
      icon: <User size={20} color="#4040408a" />,
      hidden: mode.title === "Sign In",
      disabled: mode.title === "Sign In",
      value: data.name,
      onChange: (e) => setData({ ...data, name: e.target.value }),
    },
    {
      id: 2,
      type: "email",
      placeholder: "Email Address",
      required: true,
      icon: <Mail size={20} color="#4040408a" />,
      hidden: false,
      value: data.email,
      onChange: (e) => setData({ ...data, email: e.target.value }),
    },
    {
      id: 3,
      type: "password",
      placeholder: "Password",
      required: true,
      icon: <Lock size={20} color="#4040408a" />,
      hidden: false,
      value: data.password,
      onChange: (e) => setData({ ...data, password: e.target.value }),
    },
  ];
  const handleModeChange = () => {
    if (mode.title === "Sign In") {
      setMode({
        title: "Sign Up",
        text: "Create an account to get started",
      });
    } else {
      setMode({
        title: "Sign In",
        text: "Welcome back! Please sign in to continue",
      });
    }
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode.title === "Sign In") {
        const { data } = await axios.post(`${apiUrl}/users/login`, {
          email: data.email,
          password: data.password,
        }); 
      } else {
        await axios.post(`${apiUrl}/users/register`, {
          name: data.name,
          email: data.email,
          password: data.password,
        });
        console.log("Sign Up", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0  bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {mode.title}
        </h1>
        <p className="text-sm text-center">{mode.text}</p>
        {inputs.map((input) => (
          <div
            key={input.id}
            className={
              "border border-[#4040408a] px-2 py-2 flex items-center rounded-full mt-4 " +
              (input.hidden ? "hidden" : "")
            }
          >
            {input.icon}
            <input
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              className="outline-none text-sm pl-2"
              disabled={input.disabled}
              value={input.value}
              onChange={input.onChange}
            />
          </div>
        ))}
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {mode.title}
        </button>
        {mode.title === "Sign Up" && (
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleModeChange}
            >
              Sign In
            </span>
          </p>
        )}
        {mode.title === "Sign In" && (
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleModeChange}
            >
              Sign Up
            </span>
          </p>
        )}
        <X
          onClick={setIsLoggedIn.bind(null, false)}
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
}
