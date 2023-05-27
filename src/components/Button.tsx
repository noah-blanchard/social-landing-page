import { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="bg-black text-white px-10 py-3 rounded-xl shadow-sm h-14">{children}</button>
  );
};

export default Button;