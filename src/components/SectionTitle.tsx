import React from "react"
import { GradientText } from "../sections/About"

interface SectionTitleProps {
    title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
    return (
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-orbitron font-extrabold uppercase">
            <GradientText>{title}</GradientText>
          </h1>
        </div>
    )
}