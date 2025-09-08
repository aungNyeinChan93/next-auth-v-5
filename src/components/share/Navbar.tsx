import Link from "next/link";
import React from "react";

export const navlinks = [
  { name: "home", path: "/" },
  { name: "posts", path: "/posts" },
  { name: "quotes", path: "/quotes" },
  { name: "about", path: "/about" },
];

const Navbar = () => {
  return (
    <React.Fragment>
      <header className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 cursor-pointer bg-indigo-600 text-white font-bold flex items-center justify-center rounded-lg">
            <Link href={"/"}>H</Link>
          </div>
          <span className="font-semibold text-lg">HomePro</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navlinks?.map((nav, idx) => {
            return (
              <Link key={idx} href={nav.path} className="hover:text-indigo-600">
                <span className=" capitalize text-base font-semibold">
                  {nav.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex gap-3">
          <Link
            href={"/login"}
            className="text-sm px-4 py-2 bg-white border rounded-xl shadow-sm"
          >
            Log in
          </Link>
          <Link
            href={"/register"}
            className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-xl shadow"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* mobile view */}
      <div className="md:hidden flex flex-col space-y-2.5 justify-center w-full bg-slate-100 text-center px-10 py-3">
        {navlinks?.map((nav, idx) => {
          return (
            <Link key={idx} href={nav.path} className="hover:text-indigo-600">
              <span className=" capitalize text-base  font-semibold">
                {nav.name}
              </span>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
