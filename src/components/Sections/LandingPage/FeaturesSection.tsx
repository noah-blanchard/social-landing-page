import FeatureCard from "@/components/Cards/FeatureCard";
import { HighQuality, PaperPlane } from "@/components/SVGs/SVGs";
import {
  AiOutlineCheck,
  AiOutlineSetting,
  AiOutlineSchedule,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

const bg1 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(at 98% 98%, hsla(308,100%,70%,0.05) 0px, transparent 50%),
    radial-gradient(at 3% 10%, hsla(343,100%,76%,0.05) 0px, transparent 50%)   `,
};

const bg2 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
  radial-gradient(at 16% 100%, hsla(308,100%,70%,0.05) 0px, transparent 50%),
radial-gradient(at 88% 15%, hsla(27,100%,50%,0.05) 0px, transparent 50%)`,
};

const bg3 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(at 97% 3%, hsla(285,100%,50%,0.05) 0px, transparent 50%),
radial-gradient(at 13% 90%, hsla(343,100%,76%,0.05) 0px, transparent 50%)
    `,
};

const bg4 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
        radial-gradient(at 7% 8%, hsla(287,83%,47%,0.05) 0px, transparent 50%),
radial-gradient(at 86% 84%, hsla(239,94%,50%,0.05) 0px, transparent 50%)
`,
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quidem, quasi pariatur adipisci eos obcaecati esse autem laudantium inventore dolorum a cupiditate voluptatem provident ut placeat laboriosam tenetur doloremque tempora.";

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center bg-center w-full box-border gap-y-10 gap-x-10 p-25 md:pt-24 md:p-10"
    >
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black text-center flex-col flex md:space-y-5 px-16">
        <span>Why choose us ?</span>
        <span className="text-lg md:text-2xl font-normal">
          What do we provide ?
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full px-10 md:w-[700px]">
        <FeatureCard
          title="High quality service"
          description={lorem}
          icon={<AiOutlineCheck />}
          bg={bg1}
        />
        <FeatureCard
          title="Fine tuned and customizable content"
          description={lorem}
          icon={<AiOutlineSetting />}
          bg={bg2}
        />
        <FeatureCard
          title="Scheduled content sharing"
          description={lorem}
          icon={<AiOutlineSchedule />}
          bg={bg3}
        />
        <FeatureCard
          title="Support for multiple platforms"
          description={lorem}
          icon={<AiOutlineAppstoreAdd />}
          bg={bg4}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
