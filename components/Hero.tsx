"use client";

import Image from "next/image";

import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="bg-[#eeeff1]">
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__title title-with-line">
            Looking to save more on your rental car?
          </h1>

          <p className="hero__subtitle">
            Discover <span className="font-bold">Urban Ride</span> car rental
            options in Poland. <br /> Select from a range of car options and
            local specials.
          </p>

          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-md mt-6"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          {/* <div className="hero__image-overlay" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
