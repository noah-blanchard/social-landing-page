import InputWithButton from "@/components/Input";

const Label: React.FC = () => {
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold text-black">
        Enter your email to
      </h2>
      <h1 className="text-2xl md:text-4xl font-bold text-black">
        create your account
      </h1>
    </>
  );
};

function isValidEmail(email: string): boolean {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

const EmailStep: React.FC<{ submit: Function }> = ({ submit }) => {
  const submitValue = (value: string) => {
    // check if value is a valid url
    if (isValidEmail(value)) submit(value);
    else alert("Please enter a valid email !");
  };
  return (
    <InputWithButton
      onBtnClick={submitValue}
      label={<Label />}
      placeholder="contact@example.com"
    />
  );
};

export default EmailStep;
