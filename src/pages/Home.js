import React from "react";
import Pajama from "../assets/images/pajama.jpg";

// <a href="https://www.freepik.com/free-vector/pajamas-party-cartoon-web-banner-invitation_23068299.htm#page=2&query=mobile%20app&position=16&from_view=search">Image by upklyak</a> on Freepik

const Home = () => {
  return (
    <>
      <div className='  bgImage'>
        <div className='sectionWidth flex justify-between items-center'>
          <img
            className='my-24 ml-44 rounded-xl'
            src={Pajama}
            width={440}
            height={776}
            alt='Event image'
          />
          <div className='lg:mr-24  text-right'>
            <h1 className='pl-44 text-6xl font-bold text-darkBlue'>
              Imagine if <span className='text-purple-600'>Snapchat</span> had
              events
            </h1>
            <p className='text-xl  pl-32'>
              Easily host and share events with your friends across any social
              media.
            </p>
            <button className='btn-primary float-right '>
              Create my event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
