import { bestExperiencesData } from "@/constants";
import SquareWithInset from "./SquareWithInset";
import Image from "next/image";

const BestExperience = () => {
  return (
    <div id="best-experience" className="best-experience">
      <div className="best-experience__image-container">
        <div className="best-experience__image">
          <Image src="/range.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
      <div className="best-experience__text-container">
        <p className="section__subtitle">Best services</p>
        <h1 className="section__title">
          Have the best experience <br className="max-xl:hidden" /> with our
          rental cars
        </h1>
        <ul className="best-experience__list">
          {bestExperiencesData.map((experience) => (
            <SquareWithInset
              {...experience}
              key={experience.id}
              dimensions="w-16 h-16"
              direction="flex-row !justify-start"
              iconSize="w-8 fill-secondary-orange"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestExperience;
