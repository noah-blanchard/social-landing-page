import Link from "next/link";
import Logo from "@/components/Logo/LogoWhite";
import Button from "@/components/Buttons/Button";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { smoothScrollTo } from "../Sections/LandingPage/helpers";

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <NavbarMobile />
      <nav
        className={`hidden md:flex justify-around absolute items-center w-full transition-all ${
          scroll ? "bg-white p-4 bg-opacity-30" : "p-4"
        }`}
      >
        <div className="flex space-x-16 items-center text-black font-semibold">
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("landing");
            }}
          >
            <Logo />
          </Link>
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("landing");
            }}
          >
            Home
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("pricing");
            }}
          >
            Pricing
          </Link>
          <Link
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("features");
            }}
          >
            Features
          </Link>
          <Link
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("faq");
            }}
          >
            FAQ
          </Link>
        </div>
        <div className="hidden md:inline-block">
          <Button className="" onClick={() => console.log("nothing")}>
            Sign in
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
