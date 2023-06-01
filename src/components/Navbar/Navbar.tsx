import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import Button from '@/components/Buttons/Button';
import NavbarMobile from './NavbarMobile';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <NavbarMobile />
    <nav className={`hidden md:flex justify-around items-center fixed w-full transition-all ${scroll ? 'bg-white p-4 bg-opacity-30' : 'p-4'}`}>
      <div className="flex space-x-16 items-center text-black font-semibold">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/">
          Home
        </Link>
        <Link href="/features">
          Features
        </Link>
        <Link href="/pricing">
          Pricing
        </Link>
        <Link href="/faq">
          FAQ
        </Link>
      </div>
      <div className="hidden md:inline-block">
        <Button className="" onClick={() => console.log("nothing")}>Sign in</Button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
