import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({dark, onToggle}) {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Destination", href: "#destination" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const [menu, SetMenu] = useState(false)

  function menuToggle () {
    SetMenu(!menu)
  }

  return (
    <nav className="bg-white dark:bg-[#0B1625] dark:text-white p-3 sticky top-0 left-0 z-50">
      <div className="flex flex-row items-center max-w-6xl mx-auto justify-between">
        <div>
        <a href="#home" className="flex flex-row items-center">
          <img
            className="w-10 h-10 object-contain"
            src="https://res.cloudinary.com/ggqklbyt/image/upload/file_0000000013f082089f202b030a19dda3.png"
            alt="Logo"
          />
          <span className="text-2xl font-bold text-[#1769AA] dark:text-white">Bolly<span className="dark:text-[#1769AA]">Scapes</span></span>
        </a>
        </div>

        <ul className="hidden lg:flex flex-row items-center space-x-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="font-semibold text-lg text-[#1769AA] dark:text-white hover:bg-[#1769AA] hover:text-white px-3 py-2 rounded-lg" href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="max-lg:hidden"><ThemeToggle onToggle={onToggle} dark={dark}/></div>

        <div className="lg:hidden">
            <button className="text-xl" onClick={menuToggle} >{menu ? "✖" : "☰"}</button>
        </div>

      </div>
      {menu && (
            <ul className="flex flex-col gap-3 border-t pt-2 lg:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a onClick={() => SetMenu(false)} className="block hover:text-white font-semibold text-lg text-[#1769AA] hover:bg-[#1769AA] px-3 py-2 rounded-lg text-center" href={link.href}>{link.name}</a>
              </li>
            ))}
            <a className="flex justify-center" onClick={() => SetMenu(false)}><ThemeToggle onToggle={onToggle} dark={dark}/></a>
          </ul>
        )}
    </nav>
  );
}

export default Navbar;
