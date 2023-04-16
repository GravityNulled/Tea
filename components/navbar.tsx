import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="container mx-auto my-3 md:w-5/6 font-primary">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p className="uppercase hover:text-secondary hover:cursor-pointer">
            Majani
          </p>
          <p className="uppercase hover:text-secondary hover:cursor-pointer">
            Chai
          </p>
        </div>
        <div className="flex gap-4">
          <p className="uppercase hover:text-secondary hover:cursor-pointer">
            tea collections
          </p>
          <p className="uppercase hover:text-secondary hover:cursor-pointer">
            accessories
          </p>
          <p className="uppercase hover:text-secondary hover:cursor-pointer">
            blog
          </p>
          <p className="uppercase hover:text-secondary hover:cursor-pointer">
            contact us
          </p>
        </div>
        <div className="flex gap-5">
          <AiOutlineSearch size={20} className="hover:cursor-pointer" />
          <AiOutlineUser size={20} className="hover:cursor-pointer" />
          <AiOutlineShoppingCart size={20} className="hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
