import Image from "next/image";
import Button from "../Button";

const LandingSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white bg-[url('/landing-bg.png')] bg-center space-y-10">
      <Image
        src="/insta-twitt-faceb.png"
        alt="socials-1"
        width={500}
        height={275}
        style={{objectFit: "contain"}}
      />
      <h1 className="text-5xl font-bold text-black text-center flex-col flex space-y-5">
        <span>Easy way to automate content</span>
        <span>creation for your business</span>
      </h1>
      <p className="text-2xl text-black">
        Streamline your social media strategy with our powerful automation
        tools.
      </p>
      <div className="flex flex-row space-x-9">
        <Image src="/linkd-ytb.png" alt="socials-2" width={300} height={200} style={{objectFit: "contain"}} />
        <div className="mx-auto">
          <Button>Join Now</Button>
        </div>
        <Image src="/tikt-snap.png" alt="socials-3" width={300} height={200} style={{objectFit: "contain"}} />
      </div>
    </section>
  );
};

export default LandingSection;
