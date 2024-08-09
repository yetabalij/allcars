"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Plus } from "lucide-react";
import Logo from "../../../components/Logo";

const GlobalNavBar = () => {
  return (
    <div className="border-b shadow">
      <div className="flex justify-between text-center items-center py-4 w-[94%] mx-auto">
        <Logo />
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

export default GlobalNavBar;
