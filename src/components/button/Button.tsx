import Link from "next/link";
import React from "react";
import { BsWhatsapp, BsPersonAdd } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { IoChevronBackCircleOutline } from "react-icons/io5";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "whatsapp" | "addUser" | "back" | "logout"; // Default variant is 'primary'
  size?: "sm" | "md" | "lg"; // Different button sizes
}

// Define styles in an object for better scalability
const variantStyles = {
  primary: {
    bg: "bg-primary hover:bg-blue-800",
    icon: <FiLogIn className="text-white w-4 h-4" />,
    text: "Login",
    buttonStyle: "text-white font-semibold",
  },
  back: {
    bg: "bg-gray-200 hover:bg-gray-200",
    icon: <IoChevronBackCircleOutline className="text-gray-800 w-4 h-4" />,
    text: "Kembali",
    buttonStyle: "text-gray-500 shadow-sm shadow-gray-200",
  },
  logout: {
    bg: "bg-red-200 hover:bg-gray-200",
    icon: <IoChevronBackCircleOutline className="text-gray-800 w-4 h-4" />,
    text: "Kembali",
    buttonStyle: "text-gray-500 shadow-sm shadow-gray-200",
  },
  whatsapp: {
    bg: "bg-green-500 hover:bg-green-600",
    icon: <BsWhatsapp className="text-white w-4 h-4" />,
    text: "Hubungi Admin",
    buttonStyle: "text-white font-semibold",
  },
  addUser: {
    bg: "bg-white hover:bg-gray-200",
    icon: <BsPersonAdd className="text-green-400 w-4 h-4" />,
    text: "Tambah Pengguna",
    buttonStyle: "text-green-400 shadow-sm shadow-gray-200",
  },
};

// Define different sizes
const sizeStyles = {
  sm: "text-xs px-3 py-3",
  md: "text-sm px-6 py-3",
  lg: "text-base px-6 py-3",
};

const Button: React.FC<ButtonProps> = ({ href, onClick, variant = "primary", size = "md" }) => {
  const { bg, icon, text, buttonStyle } = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  const classNames = `inline-flex items-center justify-center gap-2 rounded-full transition-all 
    ${bg} ${sizeClass} ${buttonStyle}`;

  return href ? (
    <Link href={href} className={classNames}>
      {icon}
      <span>{text}</span>
    </Link>
  ) : (
    <button onClick={onClick} className={classNames}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;