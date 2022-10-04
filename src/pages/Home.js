import React from "react";
import { Link } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";
import Pajama from "../assets/images/pajama.jpg";

const Home = () => {
  return (
    <>
      <div className='bgImage md:py-28'>
        <div className='sectionWidth flex flex-col-reverse justify-center mx-auto md:flex-row md:justify-between items-center'>
          <Link to='/create'>
            <button className='btn-primary w-52 mb-8 mx-auto md:hidden font-bold'>
              <span className='mr-2 text-yellow-300'>
                <GiPartyPopper />
              </span>
              Create my event
            </button>
          </Link>

          <img
            className='my-8 md:ml-44 rounded-xl imageWideScreen'
            src={Pajama}
            width={180}
            height={292}
            alt='Event'
          />
          <div className=' text-center md:text-right md:mr-32'>
            <h1 className='text-4xl px-14 lg:text-6xl md:p-0 leading-10 sm:leading-none mx-auto max-w-[320px] mt-20 font-bold text-darkBlue'>
              Imagine if <span className='text-purple-600'>Snapchat</span> had
              events
            </h1>
            <p className='my-3 text-gray-700 mx-auto px-5 max-w-[380px]'>
              Easily host and share events with your friends across any social
              media.
            </p>
            <Link to='/create'>
              <button className='btn-primary btnWideScreen mr-5 font-bold'>
                <span className='mr-2 text-yellow-300'>
                  <GiPartyPopper />
                </span>
                Create my event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
