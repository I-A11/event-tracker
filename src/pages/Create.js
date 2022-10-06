import React from "react";
import { useEventContext } from "../component/context/EventContext";
import { GiPartyPopper } from "react-icons/gi";
import { FcOvertime } from "react-icons/fc";
import { GiSandsOfTime } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { FiLink } from "react-icons/fi";
import Birthday from "../assets/images/birthday-2.png";

const Create = () => {
  const {
    event,
    setEvent,
    start,
    setStart,
    end,
    setEnd,
    location,
    setLocation,
    url,
    setUrl,
    error,
    submitHandler,
  } = useEventContext();

  return (
    <div className='sectionWidth sm:px-28 md:px-24 w-full'>
      <div>{error ? <div>Please Fill all fields</div> : null}</div>
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
          <input
            type='text'
            name='event'
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
          <p>
            <span className='mr-2 text-yellow-700'>
              <FcOvertime />
            </span>
            Starts at
          </p>
          <input
            type='text'
            name='start'
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
          <p>
            <span className='mr-2 text-red-600'>
              <GiSandsOfTime />
            </span>
            Ends at
          </p>
          <input
            type='text'
            name='ends'
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
          <p>
            <span className='mr-2 text-green-600'>
              <ImLocation />
            </span>
            Location
          </p>
          <input
            type='text'
            name='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <p>
            <span className='mr-2 blue-green-600'>
              <FiLink />
            </span>
            URL Link
          </p>
          <input
            type='text'
            name='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type='submit'
            className='btn-primary mt-10 mb-20'
            onClick={submitHandler}
          >
            Check your event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
