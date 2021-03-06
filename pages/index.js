import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGoogle,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function Home() {
  //seo
  let myButton;
  if (process.browser) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      myButton = document.getElementById('navbar');
      if (myButton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          // myButton.style.display = 'block';
          myButton.style.borderBottom = '2.6px solid #FF7B3D';
        } else {
          // myButton.style.display = 'none';
          myButton.style.borderBottom = 'none';
        }
      }
    }
  }

  //

  const goToSection = (id) => {
    const yOffset = screen.width < 800 ? -120 : -95;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <meta name='google-site-verification' content='YDJtUvqI0Zj0h9Jm8FJet99_n57jJjM2ZzvB8dBq4WI' />
        <meta
          name='keywords'
          content='interior designer, interiors design company,  interiors designer bangalore, interiors desgin  bangalore, kodai interiors interior designers decorators in bangalore'
        />
      </Head>
      <NextSeo
        title='Interior Designers, Decorators in Bangalore | KODAI Interiors'
        // description='Kodai Interiors provides design to build interior services specializing in both residential and commercial designs'

        description='Kodai Interiors provides design to build services specializing in both residential and commercial designs. We apply the highest standards of design excellence and continuously create a memorable brand experience for our clients while enhancing the quality of life for all we serve.'
        canonical='https://www.kodaiinteriors.com/'
        openGraph={{
          url: 'https://www.kodaiinteriors.com/',
          title: 'Interior Designers, Decorators in Bangalore | KODAI Interiors',
          description: `
            Kodai Interiors provides design to build services specializing in both residential and commercial designs. We apply the highest standards of design excellence and continuously create a memorable brand experience for our clients while enhancing the quality of life for all we serve.`,
          images: [
            {
              url: 'https://www.kodaiinteriors.com/og-image.png',
              width: 1800,
              height: 700,
              alt: 'Kodai Interiors',
            },
          ],
          site_name: 'KODAI Interiors',
        }}
      />
      <div className='bg-mainbg overflow-x-hidden'>
        <nav
          id='navbar'
          className={`flex justify-around items-center h-24  pt-1 ms:overflow-hidden ms:justify-between ms:shadow-lg   fixed w-full bg-mainbg z-30 ms:flex-1 ms:flex-wrap ms:h-24 ms:items-center ms:pt-2`}
        >
          <a href='#'>
            <img
              src='/header-logo.svg'
              alt='logo'
              // width='180'
              // height='70'
              className='cursor-pointer w-44 ms:w-32 ms:ml-2'
            />
          </a>
          <ul className='text-white flex font-semibold text-xl ms:hidden '>
            <li
              className='mx-4 cursor-pointer tracking-wide menu-item'
              onClick={() => goToSection('about-us')}
            >
              About us
            </li>
            <li
              className='mx-4 cursor-pointer tracking-wide menu-item'
              onClick={() => goToSection('services')}
            >
              Services
            </li>
            <li
              className='mx-4 cursor-pointer tracking-wide menu-item'
              onClick={() => goToSection('projects')}
            >
              Projects
            </li>
          </ul>
          <button
            className='flex items-center justify-center bg-primary text-white px-7 py-2 rounded-sm text-lg font-semibold tracking-wide cursor-pointer hover:scale-105 transition-all duration-150 ms:mr-3 ms:px-4 ms:py-2 ms:font-medium ms:text-base'
            onClick={() => goToSection('contact-us')}
          >
            Contact Us
          </button>
          <ul className='text-white flex font-semibold text-xl md:hidden ms:justify-center  ms:w-full ms:border-t-2 ms:border-primary ms:font-medium ms:-mb-1 '>
            <li className='mx-4 cursor-pointer tracking-wide' onClick={() => goToSection('about-us')}>
              About us
            </li>
            <li className='mx-4 cursor-pointer tracking-wide' onClick={() => goToSection('services')}>
              Services
            </li>
            <li className='mx-4 cursor-pointer tracking-wide' onClick={() => goToSection('projects')}>
              Projects
            </li>
          </ul>
        </nav>
        <main>
          <div className='flex ms:flex-col-reverse  mt-52 mb-36 ms:mt-20'>
            <div className='w-9/12 pl-28 z-10 relative left-10 mt-4 ms:w-full ms:pl-2 ms:left-0'>
              {/* main text */}
              <div className='flex flex-col justify-end ms:-mt-2'>
                <p
                  className='text-white leading-none text-8xl font-bold tracking-wider
               m-0 font-poppins mb-10 ms:text-5xl ms:tracking-wide'
                >
                  We make your <br />
                  house look <br />
                  great
                </p>
                <span className='-mt-13 ml-5 ms:-mt-12 ms:ml-2'>
                  <img src='/highlight-lline.svg' className='w-60 ms:w-32' />
                </span>
              </div>
              {/* sub-text */}
              <p
                className='text-gray-400 text-3xl font-normal font-poppins py-6 pl-1 flex items-end
              ms:text-xl ms:pl-0 ms:py-4
            '
              >
                We design with people in mind
                <span className='h-2 w-2 bg-primary mb-2 ml-1'></span>
              </p>

              <div className='flex justify-start items-center w-full mt-4 ms:justify-center'>
                <button
                  className='text-gray-900 bg-yellow1 flex text-lg font-bold items-center mr-8 rounded-sm py-2 pl-4 pr-3'
                  onClick={() => goToSection('services')}
                >
                  Our Services <FiArrowUpRight className='ml-1' />
                </button>
                <button
                  className='text-white flex text-lg font-medium items-center justify-center'
                  onClick={() => goToSection('projects')}
                >
                  View Projects
                  <IoIosArrowForward className='ml-2 text-primary text-2xl -mb-1' />
                </button>
              </div>
            </div>
            <div className='w-7/12 mt-7 ms:w-full'>
              <div className='heroImage flex justify-end'>
                <Image src='/hero-image-1.jpg' width='800' height='550' className='' />
              </div>
            </div>
          </div>
          {/* about company section */}
          <div className='w-full m-w-full mb-16 ms:mb-10'>
            <img src='/about-us-divider.svg' className='ms:scale-200 ms:-ml-4' id='about-us' />
          </div>
          <div className='w-full flex px-12 tracking-wide ms:flex-col-reverse ms:px-2'>
            {/* left container */}
            <div className='w-5/6 text-white ms:w-full ms:ml-1 ms:mb-16'>
              <p className='font-light font-poppins text-3xl ms:hidden'>
                KODAI Interiors provides <span className='text-yellow1'>design to build</span> services <br />
                specializing in both <span className='text-yellow1'>residential and commercial</span> designs.
              </p>
              <p className='font-light font-poppins text-3xl  ms:leading-6 md:hidden ms:text-lg'>
                KODAI Interiors provides <span className='text-yellow1'>design to build</span> services
                specializing in both <span className='text-yellow1'>residential and commercial</span> designs.
              </p>
              <p className='custom-underline mt-6 font-normal font-poppins text-2xl ms:mt-3 ms:text-xl '>
                Our Mission
              </p>
              <p className='mt-1 ms:mt-0 text-lg ms:text-sm leading-snug ms:leading-snug font-light font-poppins'>
                We are intent on establishing Kodai as the premier design firm in South India while
                maintaining our unyielding ideals. Our guiding principles ensure that we convey a passion for
                the client and consistently deliver the greatest possible service experience. Apply the
                highest standards of design excellence and continually strive to enhance our contributions to
                the community.
              </p>
              <p className='custom-underline mt-6 font-normal font-poppins text-2xl ms:mt-2 ms:text-xl'>
                Our Vision
              </p>

              <p className='mt-1 text-lg leading-snug ms:text-base ms:leading-tight font-light font-poppins'>
                Our vision to create a memorable brand experience for our clients
                <br /> while enhancing the quality of life for all we serve.
              </p>
            </div>
            {/* right container */}
            <div className='w-2/4 ml-12 ms:w-full ms:ml-0'>
              <img src='/company-image-2.jpg' className='z-0 w-5/6 h-4/6 ms:ml-3 ' />
              <img
                src='/company-image-1.jpg'
                className='z-10 w-5/6 h-4/6 translate-x-1/5 -translate-y-5/6 ms:h-52 ms:-mt-2 ms:-mb-40'
              />
            </div>
          </div>
          {/* services section */}
          <div className='w-full m-w-full mb-16 -mt-12 ms:-mt-6 ms:mb-9' id='services'>
            <img src='/our-services-divider.svg' className='ms:scale-200 ms:-ml-4' />
          </div>
          <div className='flex flex-wrap flex-row px-28 justify-center items-center mb-20 ms:flex-col ms:px-0'>
            <div className='mx-8 my-5 ms:my-2 ms:mx-5 cursor-pointer'>
              <Image src='/residentail.png' height='270' width='320' alt='residential design' />
              <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
                Residential Design
              </div>
            </div>
            <div className='mx-8 my-5 ms:my-2 ms:mx-5 cursor-pointer'>
              <Image src='/commercial.png' height='270' width='320' alt='commercial design' />
              <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
                Commercial Design
              </div>
            </div>
            <div className='mx-8 my-5 ms:my-2 ms:mx-5 cursor-pointer'>
              <Image src='/corporate.png' height='270' width='320' alt='corporate design' />
              <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
                Corporate Design
              </div>
            </div>
            <div className='mx-8 my-5 ms:my-2 ms:mx-5 cursor-pointer'>
              <Image src='/hospitality.png' height='270' width='320' alt='hospitality design' />
              <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
                Hospitality Design
              </div>
            </div>
            <div className='mx-8 my-5 ms:my-2 ms:mx-5 cursor-pointer'>
              <Image src='/restaurant.png' height='270' width='320' alt='restaurant design' />
              <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
                Restaurant Design
              </div>
            </div>
            <div className='mx-8 my-5 ms:my-2 ms:mx-5 cursor-pointer'>
              <Image src='/industrial.png' height='270' width='320' alt='industrial design' />
              <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
                Industrial Design
              </div>
            </div>
          </div>
          {/* projects section */}
          <div className='w-full m-w-full mb-12 ms:mb-12 -mt-6' id='projects'>
            <img src='/our-projects-divider.svg' className='ms:scale-200 ms:-ml-4' />
          </div>
          <div className='w-full flex justify-center items-center flex-col'>
            <div className=' flex justify-around items-center mb-12 ms:mb-6 ms:flex-wrap  ms:justify-center'>
              <button
                className='bg-yellow1 text-gray-900 focus:text-white font-medium text-xl rounded-sm focus:bg-transparent hover:scale-105 transition-all duration-150 focus:scale-100  border-2 py-2 px-4 border-yellow1 mx-4  ms:w-7/12 ms:mb-2 ms:px-3 ms:py-1
            '
              >
                All Projects
              </button>
              <button
                className='bg-yellow1 text-gray-900 focus:text-white font-medium text-xl rounded-sm focus:bg-transparent hover:scale-105 transition-all duration-150 focus:scale-100  border-2 py-2 px-4 border-yellow1 mx-4 ms:px-3 ms:py-1
            '
              >
                Residential
              </button>
              <button
                className='bg-yellow1 text-gray-900 focus:text-white font-medium text-xl rounded-sm focus:bg-transparent hover:scale-105 transition-all duration-150 focus:scale-100  border-2 py-2 px-4 border-yellow1 mx-4 ms:px-3 ms:py-1
            '
              >
                Commercial
              </button>
            </div>
            <div className=' flex flex-wrap flex-row  justify-center items-center mb-20 ms:mb-16'>
              <div className='m-6 ms:m-4 ms:my-2 cursor-pointer'>
                <Image src='/project-1.png' height='280' width='390' alt='project 1' />
              </div>
              <div className='m-6 ms:m-4 ms:my-2 cursor-pointer'>
                <Image src='/project-2.png' height='280' width='390' alt='project  ' />
              </div>
              <div className='m-6 ms:m-4 ms:my-2 cursor-pointer'>
                <Image src='/project-3.png' height='280' width='390' alt='project 3' />
              </div>
              <div className='m-6 ms:m-4 ms:my-2 cursor-pointer'>
                <Image src='/project-1.png' height='280' width='390' alt='project 1' />
              </div>
              <div className='m-6 ms:m-4 ms:my-2 cursor-pointer'>
                <Image src='/project-2.png' height='280' width='390' alt='project 2' />
              </div>
              <div className='m-6 ms:m-4 ms:my-2 cursor-pointer'>
                <Image src='/project-3.png' height='280' width='390' alt='project 3' />
              </div>
            </div>
          </div>
          {/* team section */}
          {/* <div className='w-full m-w-full -mt-6 '>
            <img src='/our-team-divider.svg' className='ms:scale-200 ms:-ml-4' />
          </div>
          <div className='flex flex-wrap flex-row px-26 justify-center items-center my-14 ms:my-12 '>
            <div className='mx-8 my-5 ms:mx-5 ms:my-2'>
              <Image
                src='/abhishek-maddheshiya.jpg '
                height='270'
                width='320'
                alt='residential design'
                className='rounded-md rounded-b-none'
              />
              <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl  rounded-sm rounded-t-none -mt-2 bg-red-500'>
                Abhishek Maddheshiya
                <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
              </div>
            </div>
          </div> */}
          {/* contact section */}
          <div className='w-full m-w-full mt-1' id='contact-us'>
            <img src='/contact-us-divider.svg' className='ms:scale-200 ms:-ml-4' />
          </div>
          <div className='flex justify-evenly items-center my-12 ms:flex-col-reverse'>
            {/* left container */}
            <div className='relative flex flex-col justify-between items-start border-2  border-yellow-500 rounded-sm pl-4 pr-7 py-4   height22 width22 ms:mt-4 ms:pl-4 ms:py-4 ms:w-full ms:border-l-0 ms:border-r-0'>
              <p className='text-white font-medium text-2xl ms:text-2xl mt-1 ms:mt-0 '>Contact Information</p>
              <div className='-mt-3'>
                <div className='flex items-center text-base text-white mb-3'>
                  <FaMapMarkerAlt className=' mr-3 scale-x-110  ' />
                  <p className=' text-base ms:text-base '>
                    {/* #51, Dasarahalli main road, */}
                    {/* <br /> , Kempapura, */}
                    Hebbal, Bangalore - 560024
                  </p>
                </div>

                <div className='flex items-center text-base text-white  mb-3'>
                  <FaEnvelope className=' mr-3 scale-110 ms:mr-2' />
                  <a href='mailto:kodaiinteriors.com' className=' text-base ms:text-base'>
                    kodaiinteriors@gmail.com
                  </a>
                </div>
                <div className='flex items-center text-base text-white  mb-3'>
                  <FaGlobe className=' mr-3 scale-110 ms:mr-2' />
                  <a href='/' className=' text-base ms:text-base'>
                    kodaiinteriors.com
                  </a>
                </div>
                <div className='flex items-center   text-base text-white '>
                  <FaPhoneAlt className=' mr-2 scale-100 ms:mr-2' />
                  <a href='tel:7068719535' className=' text-base ms:text-base ms:leading-6'>
                    +91 7068719535 | +91 9513882717
                  </a>
                </div>
              </div>

              <div className='flex justify-center items-star flex-col  text-white  w-full '>
                <div className='flex  '>
                  <a
                    href='https://g.page/r/CZbtO2B-Sv-9EA0'
                    rel='noreferrer'
                    target='_blank'
                    className='hover:bg-white hover:scale-105 duration-150 bg-gradient-to-r from-primary via-yellow-400 to-primary p-3 rounded-full'
                  >
                    <FaGoogle className='scale-125 ' />
                  </a>

                  <a
                    href='https://wa.me/917068719535'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:bg-white ml-4 hover:scale-105 duration-150 bg-gradient-to-r from-primary via-yellow-400 to-primary   p-3 rounded-full'
                  >
                    <FaWhatsapp className='scale-150' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/kodai-interiors-08016b21b/'
                    rel='noreferrer'
                    target='_blank'
                    className='hover:bg-white ml-4 hover:scale-105 duration-150 bg-gradient-to-r from-primary via-yellow-400 to-primary  p-3 rounded-full'
                  >
                    <FaLinkedinIn className='scale-150   ' />
                  </a>
                </div>
                <div className='flex mt-3'>
                  <a
                    href='https://www.instagram.com/kodaiinteriors/'
                    rel='noreferrer'
                    target='_blank'
                    className='hover:bg-white hover:scale-105 duration-150 bg-gradient-to-r from-primary via-yellow-400 to-primary   p-3 rounded-full'
                  >
                    <FaInstagram className='scale-150' />
                  </a>

                  <a
                    href='https://www.facebook.com/Kodai-interiors-105107095296521'
                    rel='noreferrer'
                    target='_blank'
                    className='hover:bg-white ml-4 hover:scale-105 duration-150 bg-gradient-to-r from-primary via-yellow-400 to-primary  p-3 rounded-full'
                  >
                    <FaFacebookF className='scale2x ' />
                  </a>
                  <a
                    href='https://www.youtube.com/channel/UCZFYoaiO-NK3ipp369Unqjg'
                    rel='noreferrer'
                    target='_blank'
                    className='hover:bg-white ml-4 hover:scale-105 duration-150 bg-gradient-to-r from-primary via-yellow-400 to-primary   p-3 rounded-full'
                  >
                    <FaYoutube className='scale-150' />
                  </a>
                </div>
              </div>
              <img src='./contact-qr.svg' className='w-24 absolute bottom-3 right-3' />
            </div>
            {/* right container */}
            <a className='cursor-pointer' href='' rel='noreferrer '>
              <iframe
                src='https://www.google.com/maps/embed?z=80&pb=!1m14!1m8!1m3!1d15546.736951719087!2d77.610415!3d13.05576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdff4a7e603bed96!2sKODAI%20Interiors!5e0!3m2!1sen!2sin!4v1639302781118!5m2!1sen!2sin'
                width='400'
                height='350'
                allowfullscreen=''
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
              ></iframe>
            </a>
          </div>
        </main>
        <hr className='bg-primary h-3 mt-14 w-full border-0 ms:mt-6 ms:h-3' />
      </div>
    </>
  );
}
