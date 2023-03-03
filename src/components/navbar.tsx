import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icon";

interface NavbarProps {}

const tabs = [
  { title: "Home", path: "/" },
  { title: "Destination", path: "/destination" },
  { title: "Crew", path: "/crew" },
  { title: "Transport", path: "/transport" },
];

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (isModalOpen) setIsModalOpen((prev) => !prev);
    navigate(path);
  };

  return (
    <>
      <Icon />
      <header className="absolute right-0 top-8 w-auto z-20">
        {isModalOpen ? (
          <AiOutlineClose
            className="relative w-8 h-8 mr-4 cursor-pointer block md:hidden z-20"
            onClick={() => setIsModalOpen((prev) => !prev)}
          />
        ) : (
          <HiMenu
            className="relative w-8 h-8 mr-4 cursor-pointer block md:hidden z-20"
            onClick={() => setIsModalOpen((prev) => !prev)}
          />
        )}
        <nav className="backdrop-blur-sm bg-white/5 py-4 px-12 hidden md:block">
          <ul className="flex justify-center gap-x-12 p-4 text-xl">
            {tabs.map((t, i) => (
              <li
                key={i}
                className="flex gap-x-4 font-['Barlow_Condensed'] cursor-pointer hover:font-bold"
                onClick={() => handleNavigate(t.path)}
              >
                <span className="font-bold">0{i}</span>
                <span className="uppercase tracking-[0.2rem]">{t.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`fixed w-[75%] h-full flex justify-center py-36 px-8 top-0 right-0 backdrop-blur-sm bg-white/2 translate-x-full transition-transform ease-in-out delay-200 duration-500 ${
          isModalOpen && "translate-x-0"
        }`}
      >
        <ul className="flex flex-col gap-y-4 text-xl cursor-pointer w-full">
          {tabs.map((t, i) => (
            <li
              key={i}
              className="flex gap-x-4 font-['Barlow_Condensed'] cursor-pointer hover:font-bold"
              onClick={() => handleNavigate(t.path)}
            >
              <span className="uppercase tracking-[0.2rem]">{t.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
