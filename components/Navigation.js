import React, { useState } from "react";

export default function Navigation({ reverseOrder }) {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex justify-around items-center fixed top-0 left-0 right-0 bg-white text-black h-16 z-10 border-b border-slate-200">
        {reverseOrder && <p className="md:flex">Company Name</p>}
        <ul className="md:flex gap-2 flex-wrap hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                className="px-4 py-2 bg-white transition-all hover:bg-slate-900 hover:text-white"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {!reverseOrder && <p className="md:flex">Company Name</p>}
        <div className="md:hidden">
          <button
            className="flex items-center px-4 py-2 bg-white rounded-xl transition-all hover:bg-slate-900 hover:text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="mt-32 md:hidden">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  className="block px-4 py-2 bg-white rounded-xl transition-all hover:bg-slate-900 hover:text-white border border-slate-400 text-center w-1/2 mx-auto"
                  href={item.link}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
