import React from "react";
import { Link } from "react-router-dom";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineAddLocation } from "react-icons/md";
import { useEventContext } from "../component/context/EventContext";
import Celebrate from "../assets/images/celebrate.webp";

const Event = () => {
  const { dayEvent } = useEventContext();

  return (
    <div className='bg-pink-100 py-20'>
      <div className='sectionWidth lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:py-40'>
        <div className='lg:w-1/2'>
          <img className='mb-6 md:p-20 ' src={Celebrate} alt='celebrate' />
        </div>
        {dayEvent.map((item, index) => {
          const { event, start, end, location, url } = item;
          return (
            <div key={index} className='md:px-20'>
              <div>
                <h1 className='text-purple-800 text-3xl ml-4 capitalize font-bold mb-6'>
                  {event}
                </h1>
              </div>
              <div className='pb-20'>
                <div className='flex items-center ml-4 mb-8'>
                  <div className='bg-white p-4 rounded-md'>
                    <BsCalendarEvent color='#8456EC' size={28} />
                  </div>

                  <div className='ml-4 text-lg font-bold'>
                    <p className='text-purple-800'>{start}</p>
                    <div>
                      <p className='text-gray-800 font-semibold'> to {end}</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center ml-4 mb-8 pb-2'>
                  <div className='bg-white p-4 rounded-md'>
                    <MdOutlineAddLocation color='#8456EC' size={28} />
                  </div>

                  <div className='ml-4 text-lg font-bold'>
                    <p className='text-purple-800'>{location}</p>
                    <div>
                      <p className='text-gray-800 font-semibold'> {url}</p>
                    </div>
                  </div>
                </div>
                <Link to='/'>
                  <button className='btn-primary flex items-center ml-4 mb-8 '>
                    Home
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
