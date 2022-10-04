import React from "react";
// <a href="https://www.freepik.com/free-vector/pajamas-party-cartoon-web-banner-invitation_23068299.htm#page=2&query=mobile%20app&position=16&from_view=search">Image by upklyak</a> on Freepik

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='text-center mt-8 h-20 text-lg font-semibold text-gray-700'>
      <div>
        <a href='https://www.freepik.com/free-vector/pajamas-party-cartoon-web-banner-invitation_23068299.htm#page=2&query=mobile%20app&position=16&from_view=search'>
          Image by upklyak
        </a>
        on Freepik
      </div>
      <div className='mt-3'>
        © {date} <span className='text-gradient'>EvenTracker</span> All rights
        reserved
      </div>
    </div>
  );
};

export default Footer;
