import { SquareWithInsetProps } from "@/types";

const SquareWithInset = ({
  id,
  title,
  subtitle,
  iconUrl,
  direction,
  dimensions,
  iconSize,
  additionalStyles,
  componentName,
}: SquareWithInsetProps) => {
  const iconClass = id !== "model" ? "fill-black" : "fill-white";
  const backgroundClass = id !== "model" ? "bg-grey-100" : "bg-transparent";
  const iconBackgroundClass = id !== "model" ? "bg-white" : "orange-gradient";

  // Styles for the "Advantages" section
  const advantagesComponent__ItemPosition =
    componentName === "advantages" // Check if componentName is "advantage"
      ? id !== "rent" && id !== "assistance" // Check if id is neither "rent" nor "assistance"
        ? "self-center" // If true, set to "self-center"
        : "" // If false, set to empty string
      : ""; // If componentName is not "advantage", set to empty string

  return (
    <li
      className={`inset-list__item ${advantagesComponent__ItemPosition} ${additionalStyles} ${
        direction || "flex-col"
      }`}
    >
      <div
        className={`inset-list__item-icon ${
          dimensions || "w-24 h-24"
        } ${iconBackgroundClass}`}
      >
        <div className={`inset-list__item-icon-background ${backgroundClass}`}>
          <svg className={`${iconSize || "w-14"} ${iconClass}`}>
            <use xlinkHref={iconUrl}></use>
          </svg>
        </div>
      </div>
      <div>
        <h2
          className={`inset-list__item-title ${
            componentName === "advantages" ? "max-w-[160px]" : ""
          }`}
        >
          {title}
        </h2>
        <p className="inset-list__item-subtitle">{subtitle}</p>
      </div>
    </li>
  );
};

export default SquareWithInset;
