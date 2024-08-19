import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="pl-20 h-22 w-22">
        <button 
          onClick={() => setIsOpen(true)} 
          className="p-4 bg-purple-500 rounded-full shadow-lg flex items-center justify-center"
        >
          {/* Menu icon */}
          <GiHamburgerMenu className="text-white w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-purple-600 z-50 flex flex-col justify-center items-center"
          >
            <div className="absolute top-5 right-5">
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-4 bg-transparent text-white flex items-center justify-center"
              >
                {/* Close icon */}
                <IoCloseCircleSharp className="text-white w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col items-center text-white text-center space-y-8">
              <h1 className="text-5xl">home.</h1>
              <h1 className="text-5xl">features.</h1>
              <h1 className="text-5xl">blog.</h1>
              <h1 className="text-5xl">careers.</h1>
            </div>

            <div className="absolute bottom-10">
              <button className="bg-purple-700 text-white px-6 py-2 rounded-full">
                CONTACT US &rarr;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
