import Image from "next/image";
import mobileHeader from "../../asset/Images/mobileheader.png";
import heroheader from "../../asset/Images/heroheader.png";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="bg-black px-9 py-10 relative sm:px-14 sm:py-3 lg:px-20 lg:pb-20 xl:px-2 xl:pb-40 xl:pt-72 flex flex-col items-center
    bg-hero bg-right-top bg-contain bg-no-repeat">
      <div className="mt-16 w-60 h-7 sm:mt-20 sm:w-72 sm:h-14 md:mt-28  xl:w-4/5 xl:hidden">
        <Image src={mobileHeader} alt="header" className="" />
      </div>
      <div className="hidden xl:block">
        <Image src={heroheader} alt="header" className="" />
      </div>

        <p className="text-white text-center text-xs font-normal leading-8 uppercase mt-9 relative sm:text-base sm:leading-10 sm:mt-4 lg:px-14 xl:text-xl xl:px-80">
          Going Bankless is about freedom. Freedom to build wealth. It’s about
          accessing the new monetary system that is open to everyone regardless
          of your colour, location, gender etc.
        </p>

        <div className="mt-10 flex flex-col md:flex-row md:space-x-4">
          <button className="bg-red-600 w-auto text-white whitespace-nowrap px-10 py-4 rounded-lg hover:border-2
           hover:border-red-600 hover:bg-black">Contact us</button>
          <button className="border-2 border-red-600 w-auto text-white whitespace-nowrap px-10 py-4 rounded-lg mt-4 md:mt-0">Learn more</button>
        </div>
        <Card />
    </div>
  );
};

export default Hero;
