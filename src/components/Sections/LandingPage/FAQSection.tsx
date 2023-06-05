import Accordion from "@/components/Accordion/Accordion";

const bgStyle = {
  backgroundColor: "hsla(0,0%,100%,1)",
  backgroundImage: `radial-gradient(at 89% 93%, hsla(308,100%,70%,0.2) 0px, transparent 50%),
    radial-gradient(at 10% 100%, hsla(343,100%,76%,0.2) 0px, transparent 50%)`,
  backgroundSize: "",
};

const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      style={bgStyle}
      className="flex flex-col items-center justify-center bg-center w-full min-h-full box-border gap-y-10 gap-x-10 p-25 px-10 !pb-[120px] md:pt-24 md:p-10"
    >
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black text-center flex-col flex md:space-y-5 px-16">
        <span>Frequently asked questions</span>
      </h1>
      <div className="flex flex-col items-start justify-start w-full md:w-[700px] space-y-10 rounded-lg border shadow-lg p-10 bg-white mb-5">
        <Accordion
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          expandHeight={{ mobile: 250, computer: 150 }}
        >
          <p className="text-sm md:text-lg font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ut. Officiis quasi expedita itaque. Rem atque distinctio repudiandae
            nulla facere incidunt nisi illum pariatur temporibus voluptates.
            Molestias tenetur modi consectetur.
          </p>
        </Accordion>
        <Accordion
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          expandHeight={{ mobile: 250, computer: 150 }}
        >
          <p className="text-sm md:text-lg font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ut. Officiis quasi expedita itaque. Rem atque distinctio repudiandae
            nulla facere incidunt nisi illum pariatur temporibus voluptates.
            Molestias tenetur modi consectetur.
          </p>
        </Accordion>
        <Accordion
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          expandHeight={{ mobile: 250, computer: 150 }}
        >
          <p className="text-sm md:text-lg font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ut. Officiis quasi expedita itaque. Rem atque distinctio repudiandae
            nulla facere incidunt nisi illum pariatur temporibus voluptates.
            Molestias tenetur modi consectetur.
          </p>
        </Accordion>
        <Accordion
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit ?"
          expandHeight={{ mobile: 250, computer: 150 }}
        >
          <p className="text-sm md:text-lg font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ut. Officiis quasi expedita itaque. Rem atque distinctio repudiandae
            nulla facere incidunt nisi illum pariatur temporibus voluptates.
            Molestias tenetur modi consectetur.
          </p>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
