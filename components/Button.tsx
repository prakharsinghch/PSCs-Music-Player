import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement , ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
},ref ) =>{
    return (
        <button 
            type={type}
            className = {twMerge(`
                w-full
                rounded-full
                bg-white
                border
                border-transparent
                px-6
                py-3
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-black
                hover:opacity-95
                hover:font-bold
                hover:scale-105
                transition
                `,
                className
            )}
            disabled={disabled}
            ref = {ref}
            {...props}
            >
            {children}
        </button>
    )
})

Button.displayName = "Button";

 
export default Button;