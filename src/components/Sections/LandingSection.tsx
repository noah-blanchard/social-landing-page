import Image from "next/image";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";

const LandingSection: React.FC = () => {

  const router = useRouter();

  return (
    <section id="landing" className="flex flex-col items-center justify-center h-screen bg-white bg-[url('/landing-bg.png')] bg-center w-screen space-y-10 p-10">
      <Image
        src="/insta-twitt-faceb.png"
        alt="socials-1"
        width={300}
        height={275}
        style={{objectFit: "contain"}}
      />
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-black text-center flex-col flex md:space-y-5">
        <span>Easy way to automate content</span>
        <span>creation for your business</span>
      </h1>
      <p className="md:text-3xl sm:text-2xl text-lg text-black text-center">
        Streamline your social media strategy with our powerful automation
        tools.
      </p>
      <div className="flex flex-col md:space-x-9 space-y-5 md:flex-row">
      <div className="hidden md:inline-block">
          <Image src="/linkd-ytb.png" alt="socials-2" width={200} height={200} style={{objectFit: "contain"}} />
        </div>
        <div className="mx-auto">
          <Button className="" onClick={() => router.push("join")} >Join Now</Button>
        </div>
        <div className="hidden md:inline-block">
        <Image src="/tikt-snap.png" alt="socials-3" width={200} height={200} style={{objectFit: "contain"}} />
        </div>
        <div className="inline-block md:hidden">
          <Image src="/linkd-ytb.png" alt="socials-2" width={200} height={200} style={{objectFit: "contain"}} />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
