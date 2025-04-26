import React from "react";
import { assets } from "../assets/assets";
import { Github, Linkedin, Facebook } from "lucide-react";
export default function Footer() {
  const socialIcons = [
    { icon: <Github size={20} />, link: "#" },
    { icon: <Linkedin size={20} />, link: "#" },
    { icon: <Facebook size={20} />, link: "#" },
  ];
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="imagify logo" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        All right reserved. Copyright @imagify
      </p>
      <div className="flex gap-2.5">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
