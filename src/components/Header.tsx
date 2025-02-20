"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <header
          className={`fixed top-0 z-50 w-full py-[10px] transition-all duration-1000 ${
            isScrolled && "bg-white bg-opacity-30 backdrop-blur-xl shadow-sm"
          }`}
        >
          <div className="mx-10">
            <div className="flex flex-row gap-6 justify-between">
              {/* Logo */}
              <Logo />
              <div className="flex items-center">
                {/* Navigations & Socials */}
                <Navbar
                  containerStyles="xl:flex"
                  listStyles="flex gap-[55px] font-bold"
                  linkStyles="flex text-center items-center justify-center cursor-pointer"
                />
              </div>
              <div className="flex items-center w-[250px] justify-end">
                <Button variant="primary" size="md" href="/login"/>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
