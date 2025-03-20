interface ButtonProps {
    primary?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }
  
  export const Button: React.FC<ButtonProps> = ({ 
    primary = false, 
    children, 
    onClick,
    type = "button",
    disabled = false
  }) => {
    const baseClasses = "px-6 py-2 rounded-lg transition-all duration-300 font-orbitron text-sm tracking-wider";
    const primaryClasses = "bg-gradient-to-r from-teal-400 to-blue-500 text-zinc-900 hover:opacity-90 shadow-md shadow-teal-500/20";
    const secondaryClasses = "border border-teal-400 text-teal-400 hover:bg-teal-400/10";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
   
    return (
      <button
        className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${disabledClasses}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };