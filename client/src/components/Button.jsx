import { motion } from "motion/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Button({ text }) {
  const { user, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      navigate("/generate-images");
    } else {
      setIsLoggedIn(true);
    }
  };
  return (
    <motion.button
      className="my-5 px-5 py-2 uppercase rounded-full sm:text-lg  font-medium text-gray-500 border border-gray-500 transition duration-500 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: { duration: 0.5 },
        opacity: { delay: 0.2, duration: 0.5 },
        scale: { delay: 0, duration: 0.2 },
      }}
      onClick={handleClick}
    >
      {text || "Generate Images"}
    </motion.button>
  );
}
