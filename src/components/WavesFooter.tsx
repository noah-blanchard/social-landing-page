import Image from "next/image";
import { Wave1, Wave2, Wave3 } from "./SVGs/SVGs";

const WavesFooter: React.FC = () => {
  return (
    <footer className="w-screen z-10 absolute pointer-events-none">
      <Wave1 />
      <Wave2 />
      <Wave3 />
    </footer>
  );
};

export default WavesFooter;
