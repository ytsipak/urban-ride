import Image from "next/image";
import { advantagesInfo } from "@/constants";
import SquareWithInset from "./SquareWithInset";

const Advantages = () => {
  const commonProps = {
    dimensions: "w-20 h-20",
    componentName: "advantages",
    iconSize: "w-10 fill-secondary-orange",
  };

  return (
    <div id="advantages" className="container">
      <div className="advantages__text-container">
        <p className="section__subtitle">Best services</p>
        <h1 className="section__title mb-2">
          Urban Ride is the best solution for you
        </h1>
      </div>
      <div className="advantages__list-container padding-x">
        <ul className="advantages__list">
          {advantagesInfo.slice(0, 3).map((advantage) => (
            <SquareWithInset
              {...advantage}
              {...commonProps}
              key={advantage.id}
              additionalStyles="!items-start"
            />
          ))}
        </ul>
        <Image
          width={600}
          height={600}
          src="/top-view.png"
          alt="renault captur top view"
          className="object-contain rotate-[-90deg] hidden lg:block"
        />
        <ul className="advantages__list text-end">
          {advantagesInfo.slice(3).map((advantage) => (
            <SquareWithInset
              {...advantage}
              {...commonProps}
              key={advantage.id}
              additionalStyles="!items-end"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
