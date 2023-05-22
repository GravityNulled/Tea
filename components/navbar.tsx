import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Navbar = () => {
  const { data } = useSession();
  return (
    <nav className="container mx-auto my-3 md:w-5/6 font-primary">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Link
            href={"/"}
            className="uppercase hover:text-secondary hover:cursor-pointer"
          >
            Majani Chai
          </Link>
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
          <AiOutlineShoppingCart size={20} className="hover:cursor-pointer" />
          {data ? (
            <div className="flex items-center gap-2">
              <p>{data.user?.name}</p>
              <AiOutlineLogout
                size={20}
                className="hover:cursor-pointer"
                onClick={() => signOut()}
              />
            </div>
          ) : (
            <Link href={"/account/login"}>
              <AiOutlineUser size={20} className="hover:cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
