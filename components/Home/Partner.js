import Image from "next/image";
// Images
import underline from "../../asset/Images/underline.png";
import bitcoin from "../../asset/Images/bitcoin.png";
import dao from "../../asset/Images/dao.png";
import carbon from "../../asset/Images/carbon.png";
import flex from "../../asset/Images/flex.png";

const Partner = () => {
  return (
    <div className="bg-black px-20 py-14 xl:py-20 flex flex-col items-center">
      <div className="text-white text-center font-bold text-3xl mb-3">
        <p>Partners</p>
      </div>
      <div className="mb-14">
        <Image src={underline} alt="" className="" />
      </div>

      {/* Partners logo */}
      <div className="flex flex-col gap-16 xl:gap-32 items-center md:flex-row md:px-24 lg:gap-8">
        <Image src={bitcoin} alt="bitcoin" className="" />
        <Image src={dao} alt="dao" className="" />
        <Image src={carbon} alt="carbon-collectible-nfts" className="" />
        <Image src={flex} alt="bitflex" />
      </div>
    </div>
  );
};

export default Partner;
