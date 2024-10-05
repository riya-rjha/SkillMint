import React from 'react';
import SkillMint from '../Resources/Skillmint.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-800 shadow-md">
      <div className="text-green-500 text-xl font-semibold"><img src={SkillMint} className='w-20 rounded-full' /></div>
      <div className="flex gap-14">
        {['Home', 'About', 'Courses', 'Services', 'Blogs'].map((item) => (
          <div key={item} className="text-green-950 text-lg  bg-blue-100 hover:bg-slate-100 transition-all delay-75 p-3 rounded-lg hover:text-green-500 cursor-pointer">
            {item}
          </div>
        ))}
        <div className="text-green-800 text-lg bg-green-100 hover:bg-slate-100 transition-all delay-75 p-3 rounded-lg">Login/Register</div>
      </div>
    </div>
  );
};

export default Navbar;
