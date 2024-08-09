import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const PartnersNavBar = () => {
  return (
    <div className="border-b shadow">
      <div className="flex justify-between text-center items-center py-4 w-[94%] mx-auto">
        <Logo />
        <div className="hidden md:flex gap-5 items-center">
          <Link href="/partners/home">
            <Button variant="default" size="sm">
              login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnersNavBar;
