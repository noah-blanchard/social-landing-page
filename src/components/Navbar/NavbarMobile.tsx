import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Buttons/Button";
import { ArrowRight, Hamburger } from "@/components/SVGs/SVGs";
import { smoothScrollTo } from "../Sections/LandingPage/helpers";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onClickEvent = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    toggle();
    smoothScrollTo(id);
  };

  return (
    <nav className="flex md:hidden justify-start items-center p-0 fixed w-screen">
      <Hamburger onClick={toggle} isOpen={isOpen} />
      {isOpen && (
        <div className="flex flex-col space-y-5 justify-start items-start text-black bg-white h-screen w-4/6 py-28 px-7 shadow-lg">
          <Link
            href=""
            onClick={(e) => {
              onClickEvent(e, "landing");
            }}
            style={{ width: "100%" }}
          >
            <div className="flex flex-row justify-between w-full">
              <span className="text-xl">Home</span>
              <ArrowRight />
            </div>
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => {
              onClickEvent(e, "pricing");
            }}
            style={{ width: "100%" }}
          >
            <div className="flex flex-row justify-between w-full">
              <span className="text-xl">Pricing</span>
              <ArrowRight />
            </div>
          </Link>
          <Link
            href="#features"
            onClick={(e) => {
              onClickEvent(e, "features");
            }}
            style={{ width: "100%" }}
          >
            <div className="flex flex-row justify-between w-full">
              <span className="text-xl">Features</span>
              <ArrowRight />
            </div>
          </Link>
          <Link
            href="#faq"
            onClick={(e) => {
              onClickEvent(e, "faq");
            }}
            style={{ width: "100%" }}
          >
            <div className="flex flex-row justify-between w-full">
              <span className="text-xl">FAQ</span>
              <ArrowRight />
            </div>
          </Link>
          <a
            href="https://app.inkdrop.app/signin"
            style={{ width: "100%" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              onClick={() => console.log("login")}
              className="self-center w-full text-md mt-10"
            >
              Sign in
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
