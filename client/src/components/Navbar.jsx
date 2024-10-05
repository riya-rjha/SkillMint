import React from "react";
import SkillMint from "../Resources/Skillmint.png";

const Navbar = () => {
  return (
    <div className="flex justify-between sticky top-0 z-50  items-center p-3 bg-white shadow-md backdrop-blur-lg ">
      <div className="text-green-500 text-xl font-semibold">
        <img
          src={SkillMint}
          className="w-20 rounded-full"
          alt="SkillMint Logo"
        />
      </div>
      <div className="flex gap-8">
        {["Home", "About", "Courses", "Services"].map((item) => (
          <div
            key={item}
            className="text-black text-base hover:text-green-500 cursor-pointer transition-colors duration-200"
          >
            {item}
          </div>
        ))}
        <div className="text-black text-base hover:text-green-500 cursor-pointer transition-colors duration-200">
          Connect Wallet
        </div>
      </div>
    </div>
  );
};

export default Navbar;
