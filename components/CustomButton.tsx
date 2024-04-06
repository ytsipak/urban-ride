"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  subtitle,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  iconUrl,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${
        iconUrl
          ? `${containerStyles} gap-4 !items-center text-start`
          : containerStyles
      }`}
      onClick={handleClick}
    >
      {iconUrl && (
        <svg className="w-8 h-8 object-contain">
          <use xlinkHref={iconUrl}></use>
        </svg>
      )}
      <p className="flex flex-col">
        {subtitle && <span className="text-xs text-grey">{subtitle}</span>}
        <span className={`flex-1 ${textStyles}`}>{title}</span>
      </p>
      {rightIcon && (
        <div className="relative w-6 h-6 ml-4">
          <Image
            fill
            src={rightIcon}
            alt="right icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
