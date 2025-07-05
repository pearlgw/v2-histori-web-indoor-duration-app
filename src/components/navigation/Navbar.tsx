"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

const links = [
  { name: "About", href: "#about" },
  { name: "Home", href: "/" },
  { name: "Contribute", href: "#contribute" },
];

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  mobile?: boolean;
}

const Navbar: React.FC<NavProps> = ({ containerStyles, listStyles, linkStyles, mobile }) => {
  const pathname = usePathname();

  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
      {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={linkStyles}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login on Mobile*/}
      {mobile && (
        <div className="flex flex-row items-center gap-2 pt-12">
          <Link href="/login" className="text-primary text-xl font-bold">Login</Link>
          <FiLogIn className="text-primary text-xl"/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
