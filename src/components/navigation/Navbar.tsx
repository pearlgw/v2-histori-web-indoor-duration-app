"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";

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

const Navbar: React.FC<NavProps> = ({
  containerStyles,
  listStyles,
  linkStyles,
  mobile,
}) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href.startsWith("#") ? `/${link.href}` : link.href} className={linkStyles}>
              {link.name}
            </Link>
          </li>
        ))}

        {/* Show Dashboard link if logged in */}
        {isLoggedIn && (
          <li>
            <Link href="/dashboard" className={linkStyles}>
              Dashboard
            </Link>
          </li>
        )}
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
