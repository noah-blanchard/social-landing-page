import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import Button from '@/components/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around items-center p-7 absolute w-screen">
      <div className="space-x-16 flex items-center text-black">
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
      <div className="">
        <Button>Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
