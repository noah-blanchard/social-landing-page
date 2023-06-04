import { useState } from "react";
import { Minus, Plus } from "../SVGs/SVGs";

interface AccordionExpandHeight {
  mobile: number;
  computer: number;
}

const Accordion: React.FC<{
  title: string;
  expandHeight: AccordionExpandHeight;
  children: React.ReactNode;
}> = ({ title, expandHeight, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // check if window is mobile or computer

  const accordionStyle = {
    height: isOpen ? `${window.innerWidth < 768 ? expandHeight.mobile : expandHeight.computer}px` : "0px", // Ajustez la hauteur en fonction du nombre d'éléments enfants
    overflow: "hidden",
    transition: "height 0.3s ease",
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={`flex flex-col text-black w-full hover:bg-gray-100 ${isOpen && "bg-gray-100"} p-2 rounded-lg cursor-pointer`}>
      <div
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <h1 className="text-md md:text-xl">{title}</h1>
        <button className="focus:outline-none">
          {isOpen ? <Minus /> : <Plus />}
        </button>
      </div>
      <div style={accordionStyle} className="px-5">
        {isOpen && <div className="mt-5">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
