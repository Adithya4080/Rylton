// import Link from 'next/link';
// import { ReactNode } from 'react';

// interface ButtonProps {
//   children: ReactNode;
//   variant?: 'primary' | 'outline' | 'ghost';
//   size?: 'sm' | 'md' | 'lg';
//   href?: string;
//   onClick?: () => void;
//   className?: string;
//   type?: 'button' | 'submit' | 'reset';
// }

// export default function Button({
//   children,
//   variant = 'primary',
//   size = 'md',
//   href,
//   onClick,
//   className = '',
//   type = 'button',
// }: ButtonProps) {
//   const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
//   const variants = {
//     primary: 'bg-primary-500 hover:bg-primary-600 text-dark-900 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105',
//     outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-900 hover:shadow-lg hover:shadow-primary-500/30',
//     ghost: 'text-primary-500 hover:bg-primary-500/10',
//   };
  
//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-8 py-4 text-base',
//     lg: 'px-10 py-5 text-lg',
//   };
  
//   const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
//   if (href) {
//     return (
//       <Link href={href} className={classes}>
//         {children}
//       </Link>
//     );
//   }
  
//   return (
//     <button type={type} onClick={onClick} className={classes}>
//       {children}
//     </button>
//   );
// }

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {

  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-dark-900 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105",
    outline:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-900 hover:shadow-lg hover:shadow-primary-500/30",
    ghost: "text-primary-500 hover:bg-primary-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
