import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button";

const ArrowRight: React.FC = () => {
    return (
        <svg
            className="w-6 h-6 inline"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path

                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );
};

const Hamburger: React.FC<{ onClick: Function; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => {
  return (
    <svg
      onClick={() => onClick()}
      className="w-6 h-6 cursor-pointer md:hidden absolute top-7 left-7"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
};

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="flex md:hidden justify-start items-center p-0 absolute w-screen">
      <Hamburger onClick={toggle} isOpen={isOpen} />
      {isOpen && (
        <div className="flex flex-col space-y-5 justify-start items-start text-black bg-white h-screen w-4/6 py-16 px-7 shadow-lg">
          <Link href="/" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">Home</span><ArrowRight /></div></Link>
          <Link href="#features" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">Features</span><ArrowRight /></div></Link>
          <Link href="#pricing" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">Pricing</span><ArrowRight /></div></Link>
          <Link href="#faq" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">FAQ</span><ArrowRight /></div></Link>
          <Button className="self-center w-full text-md">Sign in</Button>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
