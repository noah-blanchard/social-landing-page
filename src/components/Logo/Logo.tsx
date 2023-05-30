import Image from "next/image";

const Logo: React.FC = () => {
  // use the "./icon.ico" file
  return (
    <div className="inline-block">
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
    </div>
  );
};

export default Logo;
