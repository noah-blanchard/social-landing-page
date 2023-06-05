import { MouseEventHandler } from "react";
import BarDivider from "../BarDivider";
import Button from "../Buttons/Button";
import { OutlinedFavorite, OutlinedLightning } from "../SVGs/SVGs";

const enhancedBackground = {
  backgroundImage:
    "radial-gradient(150% 110% at top, rgba(255,107,137,0.5) 0%, rgba(255,225,146,0.5) 70%, rgba(255,255,255,0.7) 100%)",
  backgroundPosition: "top",
};
const PrincingCard: React.FC<{
  onClick: MouseEventHandler;
  title: string;
  description: string;
  price: string;
  enhance: boolean;
  children?: React.ReactNode;
}> = ({ onClick, title, description, price, enhance, children }) => {
  return (
    <div
      style={enhance ? enhancedBackground : {}}
      className={`p-6 rounded-2xl flex flex-col h-[450px] w-[100%] text-black gap-y-4 border border-gray-300 bg-white shadow-lg`}
    >
      <div className="flex justify-between items-start">
        <div className="border border-gray-400 rounded-full p-1 bg-white shadow-md">
          {enhance ? <OutlinedFavorite /> : <OutlinedLightning />}
        </div>
        {enhance && (
          <div className="text-xs text-black rounded-full bg-white font-semibold px-2 py-[2px] shadow-sm">
            Most popular
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <span className="flex items-end">
        <h2 className="text-3xl font-bold">{price}</h2>
        <p className="text-sm text-gray-600">/month</p>
      </span>

      <BarDivider />
      {children}
      <BarDivider />

      <div className="w-full flex justify-end items-end h-full">
        <Button onClick={onClick} outlined={!enhance} className="w-full">
          Join now
        </Button>
      </div>
    </div>
  );
};

export default PrincingCard;
