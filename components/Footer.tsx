import Link from "next/link";
import Image from "next/image";

import { credits, footerLinks, footerSocials, starIcons } from "@/constants";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__links-container">
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="newsletter">
          <div className="footer__link">
            <h3 className="newsletter__title">Newsletter</h3>
            <div className="newsletter__input-container">
              <input
                type="text"
                placeholder="Email address"
                className="newsletter__input"
              />
              <button className="newsletter__input-btn">
                <svg className="w-6 fill-white">
                  <use xlinkHref="/symbol-defs.svg#icon-circle-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <Link
            href="https://booking.com"
            className="newsletter__rating"
            target="_blank"
          >
            <svg className="w-14 h-14">
              <use xlinkHref="/symbol-defs.svg#icon-booking"></use>
            </svg>
            <p className="font-bold underline">4.7 Rating on Booking.com</p>
          </Link>
          <div className="flex gap-2">
            {starIcons.map((star) => (
              <svg className="w-4 h-4 fill-secondary-orange" key={star.id}>
                <use xlinkHref={star.link}></use>
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="copyrights__container">
        <div className="footer__logo">
          <Link
            href="/#footer"
            className="flex justify-center items-center gap-2"
          >
            <Image
              height={18}
              width={118}
              src="/logo.png"
              alt="Urban Ride Logo"
              className="w-12 object-contain"
            ></Image>
            <span className="text-2xl font-libreFranklin font-extrabold">
              UrbanRide
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <p>&copy; {credits.copyright}</p>
          <div className="flex gap-2">
            {credits.info.map((detail) => (
              <p key={detail.id}>
                {detail.title}
                <a target="_blank" href={detail.link}>
                  {" "}
                  <span className={detail.styles}>{detail.name}</span>
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {footerSocials.map((social) => (
            <Link target="_blank" href={social.url} className="footer__socials">
              <svg className="w-10">
                <use xlinkHref={social.iconUrl}></use>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
