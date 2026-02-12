import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SocialIconProps {
    href: string,
    children: ReactNode,
    label: string
}

export const SocialIcon = ({ href, children, label }: SocialIconProps) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2, color: "#2dd4bf" }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 transition-colors duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
            >
                {children}
            </svg>
        </motion.a>
    );
};