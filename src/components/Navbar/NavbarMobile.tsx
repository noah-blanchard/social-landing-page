import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Buttons/Button";
import { ArrowRight, Hamburger } from "@/components/SVGs/SVGs";



const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="flex md:hidden justify-start items-center p-0 absolute w-screen">
      <Hamburger onClick={toggle} isOpen={isOpen} />
      {isOpen && (
        <div className="flex flex-col space-y-5 justify-start items-start text-black bg-white h-screen w-4/6 py-28 px-7 shadow-lg">
          <Link href="/" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">Home</span><ArrowRight /></div></Link>
          <Link href="#features" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">Features</span><ArrowRight /></div></Link>
          <Link href="#pricing" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">Pricing</span><ArrowRight /></div></Link>
          <Link href="#faq" onClick={toggle} style={{width: "100%"}}><div className="flex flex-row justify-between w-full"><span className="text-xl">FAQ</span><ArrowRight /></div></Link>
          <Button onClick={() => console.log("ok")} className="self-center w-full text-md">Sign in</Button>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
