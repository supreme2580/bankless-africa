import Image from "next/image";
import card1 from "../../asset/Images/crypto.png";
import card2 from "../../asset/Images/socialimpact.png";
import card3 from "../../asset/Images/news.png";

const Card = () => {
  return (
  <div className="mt-32 flex text-white gap-8 xl:gap-20 flex-col lg:flex-row">
    <div className="bg-zinc-800 rounded-xl w-64 xl:w-96">
      <div className=""><Image src={card1} layout="responsive" width={200} height={150} /></div>
      <div className="px-4 pb-2">
        <h2 className="text-white font-normal text-lg">Learn Crypto</h2>
        <p className="text-white font-light text-base">Start your crypto journey with our easy to understand educated resources.</p>
      </div>
    </div>
    <div className="bg-zinc-800 rounded-xl w-64 xl:w-96">
      <div className=""><Image src={card2} layout="responsive" width={200} height={150} /></div>
      <div className="px-4 pb-2">
        <h2 className="text-white font-normal text-lg">Learn Crypto</h2>
        <p className="text-white font-light text-base">Start your crypto journey with our easy to understand educated resources.</p>
      </div>
    </div>
    <div className="bg-zinc-800 rounded-xl w-64 xl:w-96">
      <div className=""><Image src={card3} layout="responsive" width={200} height={150} /></div>
      <div className="px-4 pb-2">
        <h2 className="text-white font-normal text-lg">Learn Crypto</h2>
        <p className="text-white font-light text-base">Start your crypto journey with our easy to understand educated resources.</p>
      </div>
    </div>
  </div>
  );
}

export default Card
