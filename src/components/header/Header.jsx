import React from "react";
import logo from "@/assets/logo-removebg-preview.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-100 h-20">
      <div className="h-full flex gap-8 items-center container mx-auto">
        <NavLink
          className="text-2xl flex-1 w-10 h-10 object-contain flex items-center justify-start"
          to={"/"}
        >
          <div>
            <img className="w-36 h-16 " src={logo} alt="" />
          </div>
        </NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishlist"}>Wishlist</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/Cart"}>Cart</NavLink>
      </div>
    </header>
  );
};

export default Header;
