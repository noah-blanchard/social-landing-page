export const smoothScrollTo = (elementId: string) => {
  const pricingSection = document.getElementById(elementId);
  pricingSection?.scrollIntoView({ behavior: "smooth" });
};
