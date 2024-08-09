"use client";

import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const NavBar = () => {
  return (
    <div className="border-b shadow">
      <div className="flex justify-between text-center items-center py-4 w-[94%] mx-auto">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={70} height={70} />
        </Link>
        <div className="hidden lg:flex">search</div>
        <div className="hidden md:flex gap-5 items-center">
          <Link href="/partners/home">
            <Button variant="default" size="sm">
              <div className="mr-1">
                <Plus size={16} />
              </div>
              Post a Car
            </Button>
          </Link>
          <div>localization</div>
          <div>menu</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
