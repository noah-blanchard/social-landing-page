import RoundGradientButton from "@/components/Buttons/RoundGradientButton";
import SocialButton from "@/components/Buttons/SocialButton";
import { useRef, useState } from "react";
import { ArrowRight } from "@/components/SVGs/SVGs";

const Label: React.FC = () => {
  return (
    <div className="w-full md:mb-9">
      <h1 className="text-2xl md:text-4xl font-bold text-black">
        Target your platforms,
      </h1>
      <h2 className="text-lg md:text-2xl font-bold text-black">
        content flows next.
      </h2>
    </div>
  );
};

const SocialStep: React.FC<{ submit: Function }> = ({ submit }) => {
  const [facebook, setFacebook] = useState<Boolean>(false);
  const [instagram, setInstagram] = useState<Boolean>(false);
  const [twitter, setTwitter] = useState<Boolean>(false);
  const [linkedin, setLinkedin] = useState<Boolean>(false);
  const [tiktok, setTiktok] = useState<Boolean>(false);

  const btnPropagation = () => {
    if (!facebook && !instagram && !twitter && !linkedin && !tiktok) {
      alert("Please select at least one platform !");
    } else {
      const formData = {
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        linkedin: linkedin,
        tiktok: tiktok,
      };

      submit(formData);
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-end">
      <Label />
      <div className="grid grid-cols-2 sm:flex sm:flex-row md:flex-row justify-evenly md:justify-center items-center w-full space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4">
        <div className="flex justify-center items-center">
          <SocialButton
            onClick={() => setFacebook(!facebook)}
            icon="svgs/socials/instagram.svg"
          ></SocialButton>
        </div>
        <div className="flex justify-center items-center">
          <SocialButton
            onClick={() => setTwitter(!twitter)}
            icon="svgs/socials/twitter.svg"
          ></SocialButton>
        </div>
        <div className="flex justify-center items-center">
          <SocialButton
            onClick={() => setInstagram(!instagram)}
            icon="svgs/socials/facebook.svg"
          ></SocialButton>
        </div>
        <div className="flex justify-center items-center">
          <SocialButton
            onClick={() => setLinkedin(!linkedin)}
            icon="svgs/socials/linkedin.svg"
          ></SocialButton>
        </div>
        <div className="flex justify-center items-center">
          <SocialButton
            onClick={() => setTiktok(!tiktok)}
            icon="svgs/socials/tiktok.svg"
          ></SocialButton>
        </div>
      </div>
      <RoundGradientButton onClick={btnPropagation}>
        <ArrowRight white />
      </RoundGradientButton>
    </div>
  );
};

export default SocialStep;
