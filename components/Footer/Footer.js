import Image from 'next/image'
import logo from '../../asset/Images/logo.png'
import twitter from '../../asset/Images/twitter.png'
import youtube from '../../asset/Images/youtube.png'
import tiktok from '../../asset/Images/tiktok.png'
import medium from '../../asset/Images/Medium.png'
import telegram from '../../asset/Images/telegram.png'
const Footer = () => {
  return (
    <div className='bg-black text-white items-center px-14 py-4 xl:px-10'>
      <header className='items-center mx-20 md:mx-0 xl:mx-4 2xl:mx-20 xl:mt-14 '>
        <Image src={logo} alt='footer' />
      </header>
      <div className="hidden xl:flex flex-row items-center justify-between xl:mt-12 xl:mx-10 2xl:mx-24 xl:gap-20">
        <div>
          <p className='font-normal text-2xl max-w-4xl'>
            Bankless Africa also operates as a development consultancy with the
            express purpose of identifying, supporting and executing various
            projects and tactics to accelerate African Development through web
            3.0 and subsequent derivative technologies.
          </p>
        </div>
        <div className='flex flex-col'>
        <div className='flex flex-row xl:gap-10 2xl:gap-20 flex-1'>
          <div className='flex flex-col'>
            <div><a>About Us</a></div>
            <div><a>Contact Us</a></div>
            <div><a>Learn Crypto</a></div>
          </div>
          <div className='flex flex-col'>
            <div><a>Social Impact</a></div>
            <div><a>Africa 3.0 | Blog</a></div>
          </div>
        </div>
        <div className='flex flex-row gap-10 mt-4'>
          <Image src={twitter} alt='twitter' />
          <Image src={youtube} alt='youtube' />
          <Image src={tiktok} alt='tiktok' />
          <Image src={medium} alt='medium' />
          <Image src={telegram} alt='telegram' />
        </div>
        </div>
      </div>

      <div className='xl:hidden'>
        <p className='text-center text-base md:text-lg lg:text-2xl font-normal'>
          Bankless Africa also operates as a development consultancy with the
          express purpose of identifying, supporting and executing various
          projects and tactics to accelerate African Development through web 3.0
          and subsequent derivative technologies.
        </p>
        <div className='grid grid-flow-row text-center space-y-5 mt-10 text-base font-bold md:text-lg lg:text-xl'>
          <a className='' href='#'>
            About Us
          </a>
          <a className='' href='#'>
            Contact Us
          </a>
          <a className='' href='#'>
            Social Impact
          </a>
          <a className='' href='#'>
            Learn Crypto
          </a>
          <a className='' href='#'>
            Africa 3.0 | Blog
          </a>
        </div>
        <div className='mt-10 items-center flex flex-row gap-9 sm:flex sm:flex-row sm:gap-20 sm:px-9 md:px-12 md:ml-10 lg:gap-28 lg:px-20 justify-center'>
          <Image src={twitter} alt='twitter' />
          <Image src={youtube} alt='youtube' />
          <Image src={tiktok} alt='tiktok' />
          <Image src={medium} alt='medium' />
          <Image src={telegram} alt='telegram' />
        </div>
      </div>
      <footer className='mt-12 text-center font-normal text-xs md:text-sm md:pb-8 lg:text-sm lg:pb-12'>
        Copyright © 2022 Bankless Africa | Powered by Bankless Africa
      </footer>
    </div>
  )
}

export default Footer
