"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/logo1.png";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { Button } from "flowbite-react";

import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <div className="border-b shadow">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="logo" width={100} />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Post Car</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
