import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "@/public/logo.png";

function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={LogoImage} alt="Logo" width={70} height={70} />
      </Link>
    </div>
  );
}

export default Logo;
