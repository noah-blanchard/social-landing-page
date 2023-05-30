import { useRef, useState } from "react";
import InputWithButton from "../../Input";
import Logo from "../../Logo/Logo";
import WebsiteStep from "./Steps/WebsiteStep";
import SocialStep from "./Steps/SocialStep";
interface FormData{
    website?: string,
    facebook: boolean,
    twitter: boolean,
    instagram: boolean,
    linkedin: boolean,
    tiktok: boolean,
}

const JoinNowSection: React.FC = () => {

    const [steps, setSteps] = useState(0)
    const data = useRef<FormData>({
        website: "",
        facebook: false,
        twitter: false,
        instagram: false,
        linkedin: false,
        tiktok: false,
    })

    const nextStep = () => {
        setSteps(steps + 1);
    }


    const websiteSubmit = (value: string) => {
        console.log("website submit", value);
        data.current.website = value;
        nextStep();
    }

    const socialSubmit = (socialData: FormData) => {
        socialData.website = data.current.website;
        data.current = socialData;
        nextStep();
    }

    console.log(data)

  return (
    <div className="w-screen h-screen box-border flex items-center justify-center flex-col">
      <Logo />
      <div className=" w-[300px] md:w-2/6 bg-white flex flex-col items-center justify-evenly outline-none">
        {steps === 0 && <WebsiteStep submit={websiteSubmit} />}
        {steps === 1 && <SocialStep submit={socialSubmit} />}
      </div>
    </div>
  );
};

export default JoinNowSection;
