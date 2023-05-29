import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from "react";
import RoundedGradientButton from "./Buttons/RoundGradientButton";
import GradientDivider from "./GradientDivider";
import { ArrowRight } from "./SVGs/SVGs";

const InputWithButton: React.FC<{label: React.ReactNode, onBtnClick: Function}> = ({ label, onBtnClick }) => {
  
    const [value, setValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onClickPropagation = () => {
        onBtnClick(value);
    }


  return <>
    <label className="">{label}</label>
    <div className="w-full flex flex-col justify-start items-start">
        <div className="flex items-center justify-between w-full">
            <input value={value} onChange={onChange} type="text" placeholder="https://example.com" className="w-full outline-none h-20 text-lg md:text-2xl font-bold text-gray-700" />
            <RoundedGradientButton onClick={onClickPropagation}><ArrowRight white /></RoundedGradientButton>
        </div>
        <GradientDivider />
    </div>
  </>;
};

export default InputWithButton;
