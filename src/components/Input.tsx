import {
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import RoundedGradientButton from "./Buttons/RoundGradientButton";
import GradientDivider from "./GradientDivider";
import { ArrowRight } from "./SVGs/SVGs";

type InputWithButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
  onBtnClick: Function;
};

const InputWithButton: React.FC<InputWithButtonProps> = ({
  label,
  onBtnClick,
  ...props
}) => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickPropagation = () => {
    if (value.length > 0) onBtnClick(value);
    else alert("Please enter a valid website !");
  };

  return (
    <form className="w-full" onSubmit={onClickPropagation}>
      <label className="w-full">{label}</label>
      <div className="w-full flex flex-col justify-start items-start mt-5">
        <div className="flex items-center justify-between w-full">
          <input
            {...props}
            value={value}
            onChange={onChange}
            type="text"
            className={
              "w-full outline-none h-20 text-lg md:text-2xl font-bold text-gray-700 " +
                props.className || ""
            }
          />
          <RoundedGradientButton type="submit">
            <ArrowRight white />
          </RoundedGradientButton>
        </div>
        <GradientDivider />
      </div>
    </form>
  );
};

export default InputWithButton;
