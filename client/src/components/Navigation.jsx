import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';



function Navigation() {
  return (

    
    <nav className="p-4 flex justify-between items-center sticky top-0 z-10  backdrop-blur-lg shadow-md w-full">
      <Link to="/" className="text-2xl font-bold text-[#ffffff]">
        Skill<span className="text-[#3FA37A]">Mint</span>
      </Link>
     
      <div className="flex space-x-4 items-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to="/"
          className="text-white hover:text-[#3FA37A] bg-transparent px-4 py-2 rounded-full transition-colors duration-300"
        >
          Home
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to="/courses"
          className="text-white hover:text-[#3FA37A] bg-transparent px-4 py-2 rounded-full transition-colors duration-300"
        >
          Browse Courses
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to="/dashboard"
          className="text-white hover:text-[#3FA37A] bg-transparent px-4 py-2 rounded-full transition-colors duration-300"
        >
          Dashboard
        </Link>
      </motion.div>
        
        <motion.button
            className="bg-[#3FA37A] px-4 py-2 rounded-full hover:bg-opacity-80 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgb(63, 163, 122)" }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Wallet
          </motion.button>
      </div>
    </nav>
  );
}



export default Navigation;
