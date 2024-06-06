import Image from "next/image";
import React from "react";
import Logo from "@/public/logo1.png";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="">
      <div className="flex border-b shadow h-20 items-center justify-between ">
        {/* Logo Component */}
        <div className="mt-6">
          <Image alt="logo" src={Logo} width={120} />
        </div>
        {/* Search Component */}
        <div className="rounded-3xl border-gray-300 border-solid border-[1px] w-4/12 flex items-center px-2 py-1 shadow-sm">
          <Input placeholder="Search" />
          <div className="p-2 bg-blue-800 text-white rounded-full">
            <CiSearch className="text-xl" />
          </div>
        </div>
        {/* Navigation Component */}
        <div className="mr-10">
          <div className="flex gap-4 justify-center items-center text-sm">
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contact"}>Contact Us</Link>
            <Link href={"/signup"}>
              <Button className="bg-blue-800">Sell A Car</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
