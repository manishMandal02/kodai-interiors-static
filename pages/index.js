import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

export default function Home() {
  return (
    <div className='bg-mainbg'>
      <nav className='flex justify-around items-center h-20 pt-4'>
        <Image src='/header-logo.svg' alt='logo' width='180' height='70' className='cursor-pointer' />
        <ul className='text-white flex font-semibold text-xl '>
          <li className='mx-4 cursor-pointer tracking-wide'>About us</li>
          <li className='mx-4 cursor-pointer tracking-wide'>Services</li>
          <li className='mx-4 cursor-pointer tracking-wide'>Projects</li>
        </ul>
        <button className='flex items-center justify-center bg-primary text-white px-7 py-2 rounded-sm text-lg font-semibold tracking-wide cursor-pointer'>
          Contact Us
        </button>
      </nav>
      <main>
        <div className='flex my-12'>
          <div className='w-9/12 pl-28 z-10 relative left-10 mt-4'>
            {/* main text */}
            <div>
              <p
                className='text-white leading-none text-8xl font-bold tracking-wider
               m-0 font-poppins mb-10'
              >
                We make your <br />
                house look <br />
                great
                <span className='absolute left-29 bottom-37'>
                  <Image src='/highlight-lline.svg' width='260' height='44' />
                </span>
              </p>
            </div>
            {/* sub-text */}
            <p className='text-gray-400 text-3xl font-normal font-poppins py-6 pl-1 flex items-end'>
              We design with people in mind
              <span className='h-2 w-2 bg-primary mb-2 ml-1'></span>
            </p>

            <div className='flex justify-start items-center w-full mt-4'>
              <button className='text-gray-900 bg-yellow1 flex text-xl font-bold items-center mr-8 rounded-sm py-2 pl-4 pr-3'>
                Our Services <FiArrowUpRight className='ml-1' />
              </button>
              <button className='text-white flex text-xl font-medium items-center justify-center'>
                View Projects
                <IoIosArrowForward className='ml-2 text-primary text-2xl -mb-1' />
              </button>
            </div>
          </div>
          <div className='w-7/12'>
            <div className='mt-7 mr-0  heroImage relative left-0  right-20'>
              <Image src='/hero-image-1.jpg' width='800' height='550' />
            </div>
          </div>
        </div>
        {/* about company section */}
        <div className='w-full m-w-full mb-16'>
          <img src='/about-us-divider.svg' />
        </div>
        <div className='w-full flex px-12 tracking-wide'>
          {/* left container */}
          <div className='w-5/6 text-white'>
            <p className='font-light font-poppins text-3xl'>
              KODAI Interiors provides <span className='text-yellow1'>design to build</span> services <br />
              specializing in both <span className='text-yellow1'>residential and commercial</span> designs.
            </p>
            <p className='custom-underline mt-6 font-normal font-poppins text-2xl'>Our Mission</p>
            <p className='mt-1 text-lg leading-snug font-light font-poppins'>
              We are intent on establishing Brown as the premier design firm in South India while maintaining
              our unyielding ideals. Our guiding principles ensure that we convey a passion for the client and
              consistently deliver the greatest possible service experience. Apply the highest standards of
              design excellence and continually strive to enhance our contributions to the community.
            </p>
            <p className='custom-underline mt-6 font-normal font-poppins text-2xl'>Our Vision</p>

            <p className='mt-1 text-lg leading-snug font-light font-poppins'>
              Our vision to create a memorable brand experience for our clients
              <br /> while enhancing the quality of life for all we serve.
            </p>
          </div>
          {/* right container */}
          <div className='w-2/4 ml-12 relative'>
            <img src='/company-image-2.jpg' className='z-10 w-5/6 h-4/6' />
            <img src='/company-image-1.jpg' className='z-10 w-5/6 h-4/6 translate-x-9 -translate-y-80' />
          </div>
        </div>
        {/* services section */}
        <div className='w-full m-w-full mb-16 -mt-12'>
          <img src='/our-services-divider.svg' />
        </div>
        <div className='flex flex-wrap flex-row px-28 justify-center items-center mb-20'>
          <div className='mx-8 my-5'>
            <Image src='/residentail.png' height='270' width='320' alt='residential design' />
            <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
              Residential Design
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/commercial.png' height='270' width='320' alt='commercial design' />
            <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
              Commercial Design
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/corporate.png' height='270' width='320' alt='corporate design' />
            <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
              Corporate Design
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/hospitality.png' height='270' width='320' alt='hospitality design' />
            <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
              Hospitality Design
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/restaurant.png' height='270' width='320' alt='restaurant design' />
            <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
              Restaurant Design
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/industrial.png' height='270' width='320' alt='industrial design' />
            <div className=' text-white flex justify-center items-center font-normal py-2 font-poppins text-2xl border-2 border-primary -mt-2'>
              Industrial Design
            </div>
          </div>
        </div>
        {/* projects section */}
        <div className='w-full m-w-full mb-12 -mt-6'>
          <img src='/our-projects-divider.svg' />
        </div>
        <div className='w-full flex justify-center items-center flex-col'>
          <div className=' flex justify-around items-center mb-12'>
            <button
              className='bg-yellow1 text-gray-900 hover:text-white focus:text-white font-medium text-xl rounded-sm focus:bg-transparent hover:bg-transparent border-2 py-2 px-4 border-yellow1 mx-4
            '
            >
              All Projects
            </button>
            <button
              className='bg-yellow1 text-gray-900 hover:text-white focus:text-white font-medium text-xl rounded-sm focus:bg-transparent hover:bg-transparent border-2 py-2 px-4 border-yellow1 mx-4
            '
            >
              Residential
            </button>
            <button
              className='bg-yellow1 text-gray-900 hover:text-white focus:text-white font-medium text-xl rounded-sm focus:bg-transparent hover:bg-transparent border-2 py-2 px-4 border-yellow1 mx-4
            '
            >
              Commercial
            </button>
          </div>
          <div className=' flex flex-wrap flex-row  justify-center items-center mb-20'>
            <div className='m-6 '>
              <Image src='/project-1.png' height='280' width='390' alt='project 1' />
            </div>
            <div className='m-6'>
              <Image src='/project-2.png' height='280' width='390' alt='project 2' />
            </div>
            <div className='m-6'>
              <Image src='/project-3.png' height='280' width='390' alt='project 3' />
            </div>
            <div className='m-6'>
              <Image src='/project-1.png' height='280' width='390' alt='project 1' />
            </div>
            <div className='m-6'>
              <Image src='/project-2.png' height='280' width='390' alt='project 2' />
            </div>
            <div className='m-6'>
              <Image src='/project-3.png' height='280' width='390' alt='project 3' />
            </div>
          </div>
        </div>
        {/* team section */}
        <div className='w-full m-w-full -mt-6'>
          <img src='/our-team-divider.svg' />
        </div>
        <div className='flex flex-wrap flex-row px-26 justify-center items-center my-14 '>
          <div className='mx-8 my-5'>
            <Image src='/avatar-1.jpg' height='270' width='320' alt='residential design' />
            <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl border-2 border-primary -mt-2 bg-red-500'>
              Abhishek Maddheshiya
              <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/avatar-1.jpg' height='270' width='320' alt='commercial design' />
            <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl border-2 border-primary -mt-2 bg-red-500'>
              Abhishek Maddheshiya
              <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/avatar-1.jpg' height='270' width='320' alt='corporate design' />
            <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl border-2 border-primary -mt-2 bg-red-500'>
              Abhishek Maddheshiya
              <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/avatar-1.jpg' height='270' width='320' alt='hospitality design' />
            <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl border-2 border-primary -mt-2 bg-red-500'>
              Abhishek Maddheshiya
              <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/avatar-1.jpg' height='270' width='320' alt='restaurant design' />
            <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl border-2 border-primary -mt-2 bg-red-500'>
              Abhishek Maddheshiya
              <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
            </div>
          </div>
          <div className='mx-8 my-5'>
            <Image src='/avatar-1.jpg' height='270' width='320' alt='industrial design' />
            <div className=' text-white flex justify-center pl-2 flex-col items-start font-normal py-2 font-poppins text-xl border-2 border-primary -mt-2 bg-red-500'>
              Abhishek Maddheshiya
              <p className='font-light text-base text-gray-100 -mt-1'>Founder, Creative Director</p>
            </div>
          </div>
        </div>
        {/* contact section */}
        <div className='w-full m-w-full -mt-4'>
          <img src='/contact-us-divider.svg' />
        </div>
        <div className='flex justify-around items-center my-12'>
          {/* left container */}
          <div className='border-2 border-primary pl-6 pr-10 py-4  h-96 '>
            <p className='text-white font-medium font-poppins text-3xl mb-5'>CONTACT INFORMATION</p>
            <div className='flex items-center text-base text-white mb-5'>
              <FaMapMarkerAlt className='text-primary mr-5 scale2x  -mt-6' />
              <p className='leading-6 text-xl'>
                #51, Dasarahalli main road,
                <br /> Hebbal, Kempapura,
                <br /> Bangalore - 560024
              </p>
            </div>
            <div className='flex items-center text-base text-white  mb-5'>
              <FaPhoneAlt className='text-primary mr-4 scale-150 ' />
              <p className='leading-tight text-xl'>
                +91 7068719535
                <br />
                +91 9513882717
              </p>
            </div>
            <div className='flex items-center text-base text-white  mb-5'>
              <FaEnvelope className='text-primary mr-5 scale-150 ' />
              <p className='leading-tight text-xl'>kodaiinteriors@gmail.com</p>
            </div>
            <div className='flex items-center text-base text-white  mb-4'>
              <FaGlobe className='text-primary mr-5 scale-150 ' />
              <p className='leading-tight text-xl'>kodaiinteriors.com</p>
            </div>
            <div className='border-t-2 border-primary -ml-6 -mr-10 '>
              <div className='flex justify-around items-center pt-7 pb-1 text-white w-full '>
                <FaInstagramSquare className='scale3x -mt-2' />
                <FaFacebookSquare className='scale3x -mt-2' />
                <FaLinkedin className='scale3x -mt-2' />
                <FaYoutube className='scale3x -mt-2' />
              </div>
            </div>
          </div>
          {/* right container */}
          <a className='cursor-pointer' href='' rel='noreferrer'>
            <Image src='/location.jpg' height='385' width='400' />
          </a>
        </div>
      </main>
      <hr className='bg-primary h-5 mt-14 w-full border-0' />
    </div>
  );
}
