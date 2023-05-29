import InputWithButton from "@/components/Input"

const Label: React.FC = () => {
    return (
      <>
        <h2 className="text-lg md:text-2xl font-bold text-black">
          Enter your website now to
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold text-black">
          power up your content
        </h1>
      </>
    );
  };
  

const WebsiteStep: React.FC<{submit: Function}> = ({submit}) => {
    return(
        <InputWithButton onBtnClick={submit} label={<Label />} />
    )
}

export default WebsiteStep;