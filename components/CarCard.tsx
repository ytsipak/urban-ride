"use client";

import Image from "next/image";
import { useState } from "react";

import { CarProps } from "@/types";
import { CarDetails, CustomButton } from "./";
import { calculateCarRent, generateCarImageUrl } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="relative w-full h-60 object-contain">
        <div className="w-full h-56 shadow-inner shadow-gray-200 rounded-2xl bg-[#f2f2f2]">
          <Image
            fill
            priority
            alt="Car model"
            className="object-contain py-4"
            src={generateCarImageUrl(car, "")}
          />
        </div>
      </div>

      <span className="text-[12px] font-medium py-[2px] px-3 border-2 border-gray-500 rounded-lg mb-2">
        {year}
      </span>

      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex my-2 text-[26px]">
        <span className="font-bold">${Number(carRent) * 30}</span>
        <span> | ${carRent}</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative flex w-full mt-2 border-t-2 border-[#f2f2f2] pt-4">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              alt="steering wheel"
              src="/steering-wheel.svg"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            containerStyles="w-full py-[16px] rounded-md bg-primary-blue"
          />
        </div>
      </div>

      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
