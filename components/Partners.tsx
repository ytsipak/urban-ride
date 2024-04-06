import { partnersData } from "@/constants";

const Partners = () => {
  return (
    <div id="partners" className="partners__container">
      <div className="scroller">
        <ul className="partners__container-list">
          {partnersData.map((partner) => (
            <li key={partner.id}>
              <svg className="w-36 fill-grey-500">
                <use xlinkHref={partner.src}></use>
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
