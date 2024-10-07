import React from "react";
import { Link } from "react-router-dom";
import Wallet from './Wallet'

function Navigation() {
  return (
    <nav className="p-4 flex justify-between items-center sticky top-0 z-10  backdrop-blur-lg shadow-md w-full">
      <Link to="/" className="text-2xl font-bold text-[#ffffff]">
        Skill<span className="text-[#3FA37A]">Mint</span>
      </Link>
      <div className="space-x-4">
        <Link to="/courses" className="text-white hover:text-[#3FA37A]">
          Browse Courses
        </Link>
        <Link to="/dashboard" className="text-white hover:text-[#3FA37A]">
          Dashboard
        </Link>
        <button className="border border-[#3FA37A] text-[#3FA37A] hover:bg-[#3FA37A] hover:text-white px-4 py-2 rounded">
          {/* Connect Wallet */}  
          <Wallet />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
