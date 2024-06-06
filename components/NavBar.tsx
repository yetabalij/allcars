import Image from "next/image";
import React from "react";
import Logo from "@/public/logo1.png";

const NavBar = () => {
  return (
    <div className="">
      <div className="flex justify-between border-b shadow h-20 items-center px-10">
        <div className="mt-6">
          <Image alt="logo" src={Logo} width={120} />
        </div>
        <div>
          <input />
        </div>
        <div>right component</div>
      </div>
    </div>
  );
};

export default NavBar;
