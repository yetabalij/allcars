import GlobalNavBar from "@/app/(global)/_components/GlobalNavBar";
import NavBar from "@/app/(global)/_components/GlobalNavBar";
import React from "react";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="">
        <GlobalNavBar />
        {children}
      </div>
    </div>
  );
};

export default GlobalLayout;
