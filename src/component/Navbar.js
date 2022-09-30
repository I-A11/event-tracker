import React from "react";

const Navbar = () => {
  return (
    <div className=' w-full bg-white shadow-md'>
      <nav className=' sectionWidth h-16 flex justify-between items-center px-4 sm:px-10'>
        <p className='text-gradient text-xl font-bold '>EvenTracker</p>
        <div className='flex space-x-2'>
          <button className='btn-primary'>Login</button>
          <button className='btn-primary'>Signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
