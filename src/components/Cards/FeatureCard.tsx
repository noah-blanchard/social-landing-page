const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  bg?: object;
  children?: React.ReactNode;
}> = ({ title, description, icon, children, bg }) => {
  return (
    <div
      className="flex flex-col items-center justify-start w-full h-full border rounded-lg border-gray-300 bg-white shadow-lg p-5 text-black"
      style={bg}
    >
      <div className="flex flex-col items-center justify-between w-full h-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="border rounded-full border-gray-400 p-2 bg-white shadow-md">{icon}</div>

          <h1 className="text-lg md:text-xl font-bold mt-5 w-full">{title}</h1>
        </div>
        <p className="w-full mt-5 text-gray-600">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;
