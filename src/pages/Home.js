import React from "react";
import Pajama from "../assets/images/pajama.jpg";

// <a href="https://www.freepik.com/free-vector/pajamas-party-cartoon-web-banner-invitation_23068299.htm#page=2&query=mobile%20app&position=16&from_view=search">Image by upklyak</a> on Freepik

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <img className='px-10' src={Pajama} width={500} height={800} alt='' />
    </>
  );
};

export default Home;
