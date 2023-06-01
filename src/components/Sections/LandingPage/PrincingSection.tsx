import { useRouter } from "next/router";
import PrincingCard from "../../PricingCard";
import { Box3D, PaperPlane, Bell } from "@/components/SVGs/SVGs";

const PrincingSection: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="pricing"
      className="flex flex-col md:flex-row items-center justify-center h-screen bg-center w-full box-border gap-y-10 gap-x-10 p-25 md:p-10"
    >
      <PrincingCard
        onClick={() => router.push("join")}
        title={"Basic"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        price={"$9.99"}
        enhance={false}
      >
        <ul className="text-gray-600">
          <li className="flex flex-row items-center space-x-2">
            <Box3D />
            <span>Lorem ipsum</span>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <PaperPlane />
            <span>Lorem ipsum</span>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Bell />
            <span>Lorem ipsum</span>
          </li>
        </ul>
      </PrincingCard>
      <PrincingCard
        onClick={() => router.push("join")}
        title={"Pro"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        price={"$19.99"}
        enhance={true}
      >
        {" "}
        <ul className="text-gray-600">
          <li className="flex flex-row items-center space-x-2">
            <Box3D />
            <span>Lorem ipsum</span>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <PaperPlane />
            <span>Lorem ipsum</span>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Bell />
            <span>Lorem ipsum</span>
          </li>
        </ul>
      </PrincingCard>
    </section>
  );
};

export default PrincingSection;
