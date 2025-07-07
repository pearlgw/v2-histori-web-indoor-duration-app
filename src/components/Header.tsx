"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./navigation/Navbar";
import Button from "./button/Button";
import Hamburger from "hamburger-react";
import { useSession, signOut } from "next-auth/react";
import CircleButton from "./button/CircleButton";
import { logoutUser } from "@/lib/authService";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // Ambil session user

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    const token = session?.accessToken;

    if (!token) {
      console.error("Token tidak ditemukan. Gagal logout.");
      return;
    }
    await logoutUser(token);
  };

  return (
    <div className="relative">
      <header
        className={`fixed top-0 z-50 w-full py-[10px] max-sm:py-[20px] transition-all duration-1000 ${
          isScrolled && "bg-white bg-opacity-30 backdrop-blur-xl shadow-sm"
        }`}
      >
        <div className="mx-4 xl:mx-10">
          <div className="flex flex-row gap-6 justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="flex max-md:hidden items-center">
              <Navbar
                containerStyles="xl:flex py-4"
                listStyles="flex md:gap-[25px] xl:gap-[50px] font-bold"
                linkStyles="flex text-center items-center justify-center cursor-pointer"
              />
            </div>

            {/* Desktop Right Button */}
            <div className="flex max-md:hidden items-center w-[250px] md:w-[150px] justify-end">
              {session ? (
                <CircleButton type='logout' onClick={handleLogout} />
              ) : (
                <Button variant="primary" size="md" href="/login" />
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="hidden max-md:block">
              <Hamburger
                size={24}
                duration={0.5}
                distance="md"
                toggled={isOpen}
                toggle={setIsOpen}
              />

              {/* Mobile Navigation */}
              {isOpen && (
                <div className="fixed bg-white px-6 py-6 rounded-xl shadow-xl right-6 w-[250px]">
                  <Navbar
                    containerStyles=""
                    listStyles="flex flex-col gap-4 font-bold"
                    linkStyles="text-xl font-primary tracking-wide transition-all duration-300 cursor-pointer hover:text-violet-700"
                    mobile
                  />
                  {/* Mobile login/logout */}
                  <div className="pt-6">
                    {session ? (
                      <CircleButton type='logout' onClick={handleLogout} />
                    ) : (
                      <Button variant="primary" size="md" href="/login" />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
