"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "About", scrollLinkHref: "about", href: "/about" },
  { name: "Home", scrollLinkHref: "home", href: "/" },
  { name: "Contribute", scrollLinkHref: "contribute", href: "/contribute" },
];

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
}

const Navbar: React.FC<NavProps> = ({ containerStyles, listStyles, linkStyles }) => {
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
    </nav>
  );
};

export default Navbar;
