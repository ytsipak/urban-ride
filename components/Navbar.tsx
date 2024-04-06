import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center gap-4">
          <Image
            src="/logo.png"
            alt="Urban Ride Logo"
            width={118}
            height={18}
            className=" w-20 object-contain"
          ></Image>
          <span className="text-2xl font-libreFranklin font-extrabold hidden sm:block">
            UrbanRide
          </span>
        </Link>

        <div className="flex gap-4">
          <CustomButton
            title="Sign up"
            btnType="button"
            containerStyles="text-primary-blue rounded-md font-bold min-w-[130px]"
          />

          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-white rounded-md font-bold bg-primary-blue min-w-[130px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
