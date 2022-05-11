import Image from "next/image";
import bankless from "../../asset/Images/bankless.png";

const Bankless = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-center py-16">
      <div className="flex flex-col space-x-8">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl mb-4 lg:text-5xl">Why Go <span className="text-red-600">Bankless?</span></h1>
        </div>
        <div className="md:max-w-5xl">
          <p className="font-normal text-xs uppercase leading-8 mb-11 xl:text-xl text-white max-w-xl lg:max-w-md xl:max-w-4xl">
              Going Bankless is about freedom. Freedom to build wealth. It’s about
              taking back control. Something that is missing in a world of Central
              Banks and government controlled fiat currencies. It’s about
              accessing the new monetary system that is open to everyone
              regardless of your colour, location, gender etc. Going Bankless is
              embarking on a journey towards self-sovereignty, finanical and
              economic freedom. Going Bankless is about changing the world for the
              better.
            </p>
          <div>
        </div>
        </div>
      </div>
      <div className="mx-14"><Image src={bankless} alt="" className="" /></div>
    </div>
    
  );
};

export default Bankless;

/** <div className="bg-black text-center text-white px-10 py-8 xl:px-20 xl:py-16 ">
      <div className="xl:flex xl:text-left xl:gap-40 xl:px-14">
        <div className="xl:w-1/2">
          <h1 className="font-bold text-3xl mb-7 xl:text-5xl">
            Why Go <span className="text-red-700">Bankless?</span>
          </h1>
          <p className="font-normal text-xs uppercase leading-8 mb-11 xl:text-xl ">
            Going Bankless is about freedom. Freedom to build wealth. It’s about
            taking back control. Something that is missing in a world of Central
            Banks and government controlled fiat currencies. It’s about
            accessing the new monetary system that is open to everyone
            regardless of your colour, location, gender etc. Going Bankless is
            embarking on a journey towards self-sovereignty, finanical and
            economic freedom. Going Bankless is about changing the world for the
            better.
          </p>
        </div>
        <div className="mb-7 xl:w-1/2 xl:px-32">
          <Image src={bankless} alt="" className="" />
        </div>
      </div>
    </div> **/ 