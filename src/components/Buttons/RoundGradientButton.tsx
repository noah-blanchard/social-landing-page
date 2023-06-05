import { ButtonHTMLAttributes, MouseEventHandler } from "react";

type RoundGradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const RoundGradientButton: React.FC<RoundGradientButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        "rounded-full bg-gradient-to-r from-[#FF307B] to-[#FF9A2A] text-white h-10 w-12 md:h-14 md:w-16 " +
        props.className
      }
    >
      {children}
    </button>
  );
};

export default RoundGradientButton;
