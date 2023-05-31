import Image from "next/image";
import Button from "../../Buttons/Button";
import { useRouter } from "next/router";
import { ArrowDown } from "../../SVGs/SVGs";
import { smoothScrollTo } from "./helpers";

const LandingSection: React.FC = () => {
  const router = useRouter();

  // get the y coord of the #pricing section
  return (
    <section
      id="landing"
      className="flex flex-col items-center justify-center h-screen  bg-center w-full box-border space-y-10 p-25 md:p-10"
    >
      <div className="hidden md:inline">
        <Image
          src="/insta-twitt-faceb.png"
          alt="socials-1"
          width={300}
          height={275}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="inline md:hidden">
        <Image
          src="/insta-twitt-faceb.png"
          alt="socials-1"
          width={150}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

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
          <Image
            src="/linkd-ytb.png"
            alt="socials-2"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="mx-auto">
          <Button className="" onClick={() => router.push("join")}>
            Join now
          </Button>
        </div>
        <div className="hidden md:inline-block">
          <Image
            src="/tikt-snap.png"
            alt="socials-3"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="md:hidden flex space-x-3">
          <div className="inline md:hidden">
            <Image
              src="/linkd-ytb.png"
              alt="socials-2"
              width={100}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="inline md:hidden">
            <Image
              src="/tikt-snap.png"
              alt="socials-3"
              width={100}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-transform" onClick={() => smoothScrollTo("pricing")}>
      <p className="text-black font-semibold text-center">See pricing options</p>
      <ArrowDown size={12}/>
      </div>
    </section>
  );
};

export default LandingSection;
