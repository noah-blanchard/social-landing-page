import { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode, className: string }> = ({ children, className }) => {
  return (
    <button className={`bg-black text-white px-10 py-3 rounded-xl shadow-md hover:bg-gray-700 h-14 ${className}`}>{children}</button>
  );
};

export default Button;