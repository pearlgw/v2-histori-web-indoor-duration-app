import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

interface ButtonProps {
  href: string;
  variant?: "primary" | "whatsapp"; // Default variant is 'primary'
  size?: "sm" | "md" | "lg"; // Different button sizes
}

// Define styles in an object for better scalability
const variantStyles = {
  primary: {
    bg: "bg-primary hover:bg-blue-800",
    icon: <FiLogIn className="text-white w-4 h-4" />,
    text: "Login",
  },
  whatsapp: {
    bg: "bg-green-500 hover:bg-green-600",
    icon: <BsWhatsapp className="text-white w-4 h-4" />,
    text: "Hubungi Admin",
  },
};

// Define different sizes
const sizeStyles = {
  sm: "text-xs px-3 py-1",
  md: "text-sm px-6 py-3",
  lg: "text-base px-6 py-3",
};

const Button: React.FC<ButtonProps> = ({ href, variant = "primary", size = "md" }) => {
  const { bg, icon, text } = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-white font-semibold transition-all 
        ${bg} ${sizeClass} `}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Button;
