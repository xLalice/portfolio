import React from "react"

interface SectionTitleProps {
    title: string;
}

/**
 * Polished SectionTitle with mechanical accent line.
 * Part of the "Precise & Professional" aesthetic.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
    return (
        <div className="mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-orbitron font-black uppercase tracking-tighter text-(--color-text-primary)">
            {title}
          </h2>
          <div className="mt-2 h-1 w-12 bg-(--color-accent)" />
          <div className="mt-1 h-[1px] w-24 bg-(--color-border)" />
        </div>
    )
}
