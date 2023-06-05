import { useRef, useState } from "react";
import Logo from "../../Logo/Logo";
import WebsiteStep from "./Steps/WebsiteStep";
import SocialStep from "./Steps/SocialStep";
import Image from "next/image";
import EmailStep from "./Steps/EmailStep";

interface FormData {
  website?: string;
  facebook: boolean;
  twitter: boolean;
  instagram: boolean;
  linkedin: boolean;
  tiktok: boolean;
  email: string;
}

const redirectToDashboard = (data: FormData) => {
  const params = new URLSearchParams(data as any);
  window.location.href = `https://social-app.samihanine.fr/dashboard?${params.toString()}`;
};

const JoinNowSection: React.FC = () => {
  const [steps, setSteps] = useState(0);
  const data = useRef<FormData>({
    website: "",
    facebook: false,
    twitter: false,
    instagram: false,
    linkedin: false,
    tiktok: false,
    email: "",
  });

  const nextStep = () => {
    setSteps(steps + 1);
  };

  const websiteSubmit = (value: string) => {
    console.log("website submit", value);
    data.current.website = value;
    nextStep();
  };

  const emailSubmit = (value: string) => {
    console.log("email submit", value);
    data.current.email = value;
    nextStep();
  };

  const socialSubmit = (socialData: FormData) => {
    socialData.website = data.current.website;
    socialData.email = data.current.email;
    data.current = socialData;
    nextStep();
    redirectToDashboard(data.current);
  };

  console.log(data);

  return (
    <div className="w-screen h-[100vh] box-border flex items-center justify-center flex-col p-10">
      <Logo />
      <div className=" w-full max-w-3xl min-h-[400px] bg-white flex flex-col items-center justify-evenly outline-none">
        {steps === 0 && <EmailStep submit={emailSubmit} />}
        {steps === 1 && <WebsiteStep submit={websiteSubmit} />}
        {steps === 2 && <SocialStep submit={socialSubmit} />}
        {steps === 3 && (
          <Image src="/svgs/bonjour.svg" width={150} height={100} alt={""} />
        )}
      </div>
    </div>
  );
};

export default JoinNowSection;
