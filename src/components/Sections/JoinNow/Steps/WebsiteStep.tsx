import InputWithButton from "@/components/Input";

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

function isValidUrl(string: string): boolean {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  // vérifie si l'URL a un schéma (https, http, etc) ou non
  // si ce n'est pas le cas, ajoutez 'http://' pour aider à la validation
  if (!url.protocol) {
    try {
      url = new URL("http://" + string);
    } catch (_) {
      return false;
    }
  }

  // vérifie que le domaine est composé de deux parties au minimum (exemple: samihanine.fr)
  if (url.hostname.split(".").length < 2) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const WebsiteStep: React.FC<{ submit: Function }> = ({ submit }) => {
  const submitValue = (value: string) => {
    // check if value is a valid url
    if (isValidUrl(value)) submit(value);
    else alert("Please enter a valid website !");
  };

  return (
    <InputWithButton
      placeholder="https://example.com"
      onBtnClick={submitValue}
      label={<Label />}
    />
  );
};

export default WebsiteStep;
