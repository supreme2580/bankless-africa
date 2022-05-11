import Image from "next/image";
import newsletter from "../../asset/Images/newsletter.png";

const Newsletter = () => {
  return (
    <div className="bg-white px-10 py-8 sm:px-24 sm:py-20">
      <div className="bg-black px-10 py-8 rounded-3xl items-center sm:px-20 sm:py-16">
        <div className="xl:grid xl:grid-cols-2">
          <div className="xl:px-10">
            <h1 className="lg:w-96 text-3xl text-center text-white sm:text-5xl sm:font-bold lg:font-bold lg:text-6xl xl:font-bold xl:text-7xl xl:text-left xl:mr-28">
              Subscribe to Bankless Africa
            </h1>
            <p className="lg:w-96 text-center text-xs text-white mt-8 sm:font-normal sm:text-base sm:mt-3 lg:font-normal lg:text-base lg:mt-5 xl:text-xl xl:font-normal xl:mt-6 xl:text-left xl:mr-96">
              Get updates on our upcoming community events sent straight to your
              inbox.
            </p>
            <div className="mt-12 items-center md:ml-14 lg:ml-36 xl:hidden">
              <Image
                src={newsletter}
                alt="newsletter"
                className="w-48 h-40 items-center"
              />
            </div>
            <form
              className="mt-12 items-center xl:items-start xl:mt-4"
              action=""
              method="POST"
            >
              <input
                className="bg-black text-white text-xs border-2 border-red-500 w-56 h-9 rounded-md text-center sm:w-60 sm:h-10 sm:ml-4 md:w-72 md:h-14 md:ml-20 md:text-left md:text-base lg:w-72 xl:ml-0 xl:p-3 xl:w-80"
                id="email"
                type="text"
                autoComplete="email"
                placeholder="Email address"
                required
              />
              <button
                className="mt-5 rounded-sm bg-red-600 text-center text-white text-lg w-32 h-12 ml-14 sm:ml-16 md:ml-40 lg:ml-4 xl:w-40 xl:h-14"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="hidden xl:block ml-64">
            <Image src={newsletter} alt="newsletter" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;