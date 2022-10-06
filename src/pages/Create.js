import React from "react";
import { GiPartyPopper } from "react-icons/gi";
import { FcOvertime } from "react-icons/fc";
import { GiSandsOfTime } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { FiLink } from "react-icons/fi";
import Birthday from "../assets/images/birthday-2.png";

const Create = () => {
  return (
    <div className='sm:px-28 md:px-24 w-full'>
      <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold my-10 text-purple-800'>
        Create your event
      </h1>
      <div className='lg:flex lg:flex-row-reverse justify-center items-start '>
        <img
          className='mx-auto px-16 md:px-0 lg:mt-8 mt-6 mb-4 md:pr-5 '
          src={Birthday}
          alt='Birthday'
          width={500}
        />

        <form className='flex flex-col justify-center mx-10 font-semibold text-purple-800'>
          <p>
            <span className='mr-2 text-yellow-500'>
              <GiPartyPopper />
            </span>
            Event Name
          </p>
          <input type='text' name='event' />
          <p>
            <span className='mr-2 text-yellow-700'>
              <FcOvertime />
            </span>
            Starts at
          </p>
          <input type='text' name='start' />
          <p>
            <span className='mr-2 text-red-600'>
              <GiSandsOfTime />
            </span>
            Ends at
          </p>
          <input type='text' name='ends' />
          <p>
            <span className='mr-2 text-green-600'>
              <ImLocation />
            </span>
            Location
          </p>
          <input type='text' name='location' />
          <p>
            <span className='mr-2 blue-green-600'>
              <FiLink />
            </span>
            URL Link
          </p>
          <input type='text' name='url' />
          <button type='submit' className='btn-primary mt-6 mb-20'>
            Check your event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
