interface ButtonProps {
    primary?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
  }
  
  export const Button: React.FC<ButtonProps> = ({ 
    primary = false, 
    children, 
    onClick,
    type = "button",
    disabled = false,
    className
  }) => {
    const baseClasses = "px-6 py-2 rounded-lg transition-all duration-300 font-orbitron text-sm tracking-wider";
    const primaryClasses = "bg-(--color-text-primary) text-(--color-bg-primary) hover:bg-(--color-accent) hover:text-(--color-text-primary) shadow-lg shadow-(--color-accent)/10 active:scale-95";
    const secondaryClasses = "border border-(--color-accent) text-(--color-accent) hover:bg-(--color-accent)/10";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
   
    return (
      <button
        className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${disabledClasses} ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };