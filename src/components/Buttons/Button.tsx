import { MouseEventHandler, ReactNode } from "react";

const Button: React.FC<{ children: ReactNode, className: string, onClick: MouseEventHandler, outlined?: boolean }> = ({ children, className, onClick, outlined }) => {
  return (
    <button onClick={onClick} className={`${outlined ? "bg-white text-black border border-gray-400 hover:bg-gray-200" : "bg-black text-white hover:bg-gray-700"}  px-10 py-3 rounded-xl shadow-md h-14 font-semibold ${className}`}>{children}</button>
  );
};

export default Button;