import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'alert';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = "",
    ...props
}) => {
    const baseStyles = "px-6 py-2 font-mono uppercase tracking-widest transition-all relative group overflow-hidden border-2";
    const variants = {
        primary: "border-primary text-primary hover:bg-primary hover:text-black",
        alert: "border-alert text-alert hover:bg-alert hover:text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-white`} />
        </button>
    );
};

export default Button;
