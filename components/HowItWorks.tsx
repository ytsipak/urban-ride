import { rentSteps } from "@/constants";
import SquareWithInset from "./SquareWithInset";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="container">
      <div className="how-it-works__text-container">
        <p className="section__subtitle">How it works</p>
        <h1 className="section__title mb-8">Find a car in 3 steps</h1>

        <ul className="inset-list how-it-works__list">
          {rentSteps.map((step) => (
            <SquareWithInset
              {...step}
              key={step.id}
              additionalStyles="how-it-works__item"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
