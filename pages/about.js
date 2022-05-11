import Head from "next/head";
import AboutNavbar from "../components/About/AboutNavs";
import Image from "next/image";
import bankless from "../asset/Images/bankless.png";
import underline from "../components/About/Images/underline.png";
import Partner from "../components/Home/Partner";
import Footer from "../components/Footer/Footer";

export default function about() {
  return (
    <div className="bg-black">
        <Head>
            <title>About</title>
            <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="flex flex-col">
          <AboutNavbar />
          <div className="bg-aboutBg min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
            <h1 className="text-white text-center font-bold text-xl sm:text-4xl md:text-6xl">About Bankless Africa</h1>
            <p className="text-white text-center font-light text-sm sm:text-base md:text-lg mt-1">We are on a quest to help onboard 1 billion Africans to crypto.</p>
          </div>
          <div className="bg-aboutBg1 min-w-screen h-auto bg-100% bg-no-repeat bg-center -mt-2 md:mt-6 pt-20 pb-32 sm:pt-40 sm:pb-52 md:pt-36 md:pb-64
          xl:pb-72 2xl:pb-80 px-8">
            <h1 className="text-white text-center font-bold text-xl sm:text-4xl md:text-6xl">We are on a quest to help 
            onboard <span className="text-red-600">1 billion</span> Africans to crypto.</h1>
          </div>
          <div className="bg-black flex flex-col md:flex-row items-center justify-center py-16">
          <div className="mx-14"><Image src={bankless} alt="" className="" /></div>
          <div className="flex flex-col space-x-8">
            <div className="flex flex-col justify-center ml-9">
              <h1 className="text-white font-bold text-3xl mb-4 lg:text-5xl">Who We Are</h1>
              <div className="max-w-8"><Image src={underline} /></div>
            </div>
            <div className="md:max-w-5xl">
              <p className="font-normal text-xs leading-8 mb-11 xl:text-xl text-white max-w-xl lg:max-w-md xl:max-w-4xl">
              Bankless Africa taps into the vision and mission of  the BanklessDAO to help onboard everyday Africans to bitcoin, defi and web3.
              Bitcoin, Ethereum, Defi and other related crypto innovations have ushered the world into a new dawn. A frontier for achieving true
               economic freedom, self-sovereignty and financial independence.  Bankless Africa is here to help steer, guide and educate Africa
                to take part in this frontie
                </p>
              <div>
            </div>
            </div>
          </div> 
        </div>
        <div className="flex justify-center mb-10 mx-16 md:mx-0">
          <div className="flex flex-col sm:flex-row md:max-w-5xl justify-between">
          <div className="bg-darkBlack text-white text-center px-5 py-10 mx-4 flex flex-col flex-1 rounded-xl">
              <h1 className="text-white text-3xl lg:text-5xl">Mission</h1>
              <div className="max-w-8"><Image src={underline} /></div>
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Our mission is to promote, educate and propagate truly bankless media,
               culture and education towards the adoption of trustless, decentralized money systems and blockchain technology. </div>
          </div>
          <div className="bg-darkBlack text-white text-center px-5 py-10 mx-4 flex flex-col flex-1 rounded-xl mt-5 sm:mt-0">
              <h1 className="text-white text-3xl lg:text-5xl">Vision</h1>
              <div className="max-w-8"><Image src={underline} /></div>
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Our vision is to be a driving force for capacity building, economic
               empowerment and financial sovereignty in Africa. </div>
          </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 sm:flex-row justify-center items-center mb-10 text-center sm:mx-20 space-x-5 space-y-5">
            <h2 className="text-white text-3xl lg:text-5xl sm:mt-5">GO BANKLESS</h2>
            <div>
              <form className="flex">
                <input type="email" className="p-2 border border-white outline-none bg-black text-white placeholder-white" placeholder="Email" />
                <button className="bg-red-600 p-5 rounded-tr-lg rounded-br-lg text-white">Subscribe</button>
              </form>
            </div>
        </div>
        <div className="bg-red-600 flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-10 px-6 sm:px-20 py-10">
            <div>
              <h2 className="text-white text-3xl lg:text-5xl sm:mt-5">Join Us</h2>
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-5">Our community is always open to new members</div>
            </div>
            <div>
                <button className="bg-white text-red-600 py-2 px-8 rounded-md mt-5 sm:mt-0">Join</button>
            </div>
        </div>
        <Partner />
        <Footer />
      </div>
    </div>
  )
}