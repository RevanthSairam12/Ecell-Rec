"use client";

import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

interface MenuItem {
  label: string;
  link: string;
}

export default function SimpleMenu() {
  const [open, setOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    { label: "Ideathon", link: "/ideathon" },
    { label: "Events", link: "/events" },
    { label: "Team", link: "/team" },
  ];

  return (
    <div className="relative z-[9999]">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent z-[9999]">
        <img src="/icons/whitelogo.png" className="h-8" />

        <button onClick={() => setOpen(true)} className="text-white text-3xl">
          <HiOutlineMenu />
        </button>
      </div>

      {/* OVERLAY MENU */}
      <div
        className={`
          fixed inset-0 bg-black/80 backdrop-blur-xl transition-all duration-300 
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white z-[10000]"
        >
          <RxCross2 />
        </button>

        {/* MENU CONTENT */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[80%] max-w-[400px] bg-white p-10 
            shadow-xl transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col gap-6 mt-16">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  className="text-3xl font-semibold text-black"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
