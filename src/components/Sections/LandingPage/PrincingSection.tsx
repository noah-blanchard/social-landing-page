import { useRouter } from "next/router";
import PrincingCard from "../../Cards/PricingCard";
import {
  AiOutlineCodeSandbox,
  AiOutlineRocket,
  AiOutlineBell,
} from "react-icons/ai";

const PrincingSection: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center bg-center w-full box-border gap-y-10 gap-x-10 p-25 md:pt-24 md:p-10"
    >
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black text-center flex-col flex md:space-y-5 px-16">
        <span>Choose the pricing plan</span>
        <span className="text-lg md:text-2xl font-normal">
          that fits your needs
        </span>
      </h1>
      <div className="flex flex-col md:space-x-9 md:flex-row gap-y-10 gap-x-10 px-10">
        <PrincingCard
          onClick={() => router.push("join")}
          title={"Basic"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          price={"$9.99"}
          enhance={false}
        >
          <ul className="text-gray-600">
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineCodeSandbox color="black" />
              <span>Lorem ipsum</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineRocket color="black" />
              <span>Lorem ipsum</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineBell color="black" />
              <span>Lorem ipsum</span>
            </li>
          </ul>
        </PrincingCard>
        <PrincingCard
          onClick={() => router.push("join")}
          title={"Pro"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          price={"$19.99"}
          enhance={true}
        >
          {" "}
          <ul className="text-gray-600">
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineCodeSandbox color="black" />
              <span>Lorem ipsum</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineRocket color="black" />
              <span>Lorem ipsum</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineBell color="black" />
              <span>Lorem ipsum</span>
            </li>
          </ul>
        </PrincingCard>
      </div>
    </section>
  );
};

export default PrincingSection;
