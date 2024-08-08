"use client";

import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b shadow">
      <div className="flex justify-between text-center items-center py-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={70} height={70} />
        </Link>
        <div>search</div>
        <div>Right Side menu</div>
      </div>
    </div>
  );
};

export default NavBar;
