import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import Button from '@/components/Button';
import NavbarMobile from './NavbarMobile';

const Navbar: React.FC = () => {
  return (
    <>
    <NavbarMobile />
    <nav className="hidden md:flex justify-around items-center p-7 absolute w-screen">
      <div className="flex space-x-16 items-center text-black">
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
        <Button className="">Sign in</Button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
