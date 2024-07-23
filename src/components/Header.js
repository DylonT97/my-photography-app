import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black p-4 flex justify-between items-center border-b-2 border-white z-50">
      <Link to="/" className="text-2xl font-bold">
        NexGen Visuals
      </Link>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <nav
        className={`md:flex md:items-center ${
          isOpen ? "block" : "hidden"
        } md:ml-6`}
      >
        <Link
          to="/"
          className="block md:inline-block mt-4 md:mt-0 md:ml-6 md:border-l md:border-white pl-6"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="block md:inline-block mt-4 md:mt-0 md:ml-6 md:border-l md:border-white pl-6"
        >
          Contact
        </Link>
        <Link
          to="/booking"
          className="block md:inline-block mt-4 md:mt-0 md:ml-6 md:border-l md:border-white pl-6"
        >
          Booking
        </Link>
        <Link
          to="/gallery"
          className="block md:inline-block mt-4 md:mt-0 md:ml-6 md:border-l md:border-white pl-6"
        >
          Gallery
        </Link>
        <Link
          to="/reviews"
          className="block md:inline-block mt-4 md:mt-0 md:ml-6 md:border-l md:border-white pl-6"
        >
          Reviews
        </Link>
        <Link
          to="/packages"
          className="block md:inline-block mt-4 md:mt-0 md:ml-6 md:border-l md:border-white pl-6"
        >
          Packages
        </Link>
      </nav>
    </header>
  );
};

export default Header;
