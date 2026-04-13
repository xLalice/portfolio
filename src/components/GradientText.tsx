import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Distilled from gradient to solid high-contrast text.
 * Part of the "Precise & Professional" aesthetic shift.
 */
export const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
  return (
    <span className={`text-teal-400 font-bold tracking-tight ${className}`}>
      {children}
    </span>
  );
};
