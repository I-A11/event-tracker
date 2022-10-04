import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=' w-full bg-white shadow-md'>
      <nav className=' sectionWidth h-16 flex justify-between items-center px-4 sm:px-10'>
        <Link to='/'>
          <p className='text-gradient text-xl font-bold '>EvenTracker</p>
        </Link>
        <div className='flex space-x-2'>
          <button className='btn-primary'>Login</button>
          <button className='btn-primary'>Signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
