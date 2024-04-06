"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Download = () => {
  const handleTab = (id: string) => {
    id === "apple"
      ? window.open("https://apps.apple.com", "_blank")
      : window.open("https://play.google.com", "_blank");
  };

  return (
    <div className="download">
      <div className="download__container">
        <div className="download__text-container">
          <h1 className="section__title">
            Urban Ride is the best <br className="max-xl:hidden" /> solution for
            you
          </h1>
          <p className="section__subtitle mb-6">
            For faster, easier booking and exclusive deals
          </p>
          <div className="download__buttons-container">
            <CustomButton
              title="Apple Store"
              subtitle="Download on the"
              textStyles="font-bold text-xl"
              handleClick={() => handleTab("apple")}
              iconUrl="/symbol-defs.svg#icon-appleinc"
              containerStyles="bg-white text-black rounded-md"
            />
            <CustomButton
              title="Google Play"
              subtitle="Get it from"
              textStyles="font-bold text-xl"
              handleClick={() => handleTab("google")}
              iconUrl="/symbol-defs.svg#icon-google-play"
              containerStyles="bg-white text-black rounded-md"
            />
          </div>
        </div>
        <Image
          width={260}
          height={590}
          alt="mobile app"
          src="/mobile-app.png"
          className="object-contain hidden xl:block"
        />
      </div>
    </div>
  );
};

export default Download;
