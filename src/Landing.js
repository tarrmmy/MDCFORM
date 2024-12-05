import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div
      className="font relative w-screen max-w-screen overflow-x-hidden h-screen bg-cover bg-fixed bg-bottom"
      style={{ backgroundImage: `url('/mdc24bg.png')` }}
    >
      {/* <div className="w-full h-full absolute bg-black/20 z-10"></div> */}

      <div className="flex flex-col justify-start items-center gap-5 md:gap-10 z-20 relative ">
        <div className="w-[90%] sticky top-6 m-auto my-4 p-5 px-3 md:px-10 flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full border-2 border-gray-100">
          <img src="/mdclogo.png" alt="MDC-2024" width={150} />
          <img src="/logoacademy.png" alt="MDC-2024" width={40} />
        </div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 400, opacity: 1 }}
          transition={{ bounce: 0.8, duration: 1 }}
          className="p-4"
        >
          <img src="/MDC-theme.png" alt="MDC Theme" width={600} />
        </motion.div>
        <div className="w-[80%] lg:w-[50%] m-auto">
          <img src="/Pricelists.svg" alt="Priceliats" className="w-full" />
        </div>
        <div className="w-full flex justify-center items-center py-2 mt-4">
          <motion.div
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ bounce: 0.8, duration: 1, delay: 1 }}
            className="bg-white border-2 border-blue-300 rounded-lg shadow-lg p-4 py-5 w-[90%] md:w-[70%] relative"
          >
            <h3 className="text-red-600 font-bold text-xs md:text-md bg-white border-2 border-blue-300 rounded-md px-4 py-1 absolute -top-5 left-3">
              FEATURING:
            </h3>
            <p className="text-blue-600 font-medium text-[8px] md:text-sm leading-relaxed text-center">
              Soul inspiring lectures - Fiqh classes - Kiddies session - Quran &
              Quiz Competition - Spelling Bee - Inter Platoon Sporting
              Activities - Community Da’wah - Leadership training.
            </p>
          </motion.div>
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <motion.div
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ bounce: 0.8, duration: 1, delay: 2 }}
            className=" bg-white border-2 border-blue-300 rounded-lg shadow-lg p-4 py-5 w-[90%] md:w-[70%] relative"
          >
            <h3 className="text-red-600 font-bold text-xs md:text-md bg-white border-2 border-blue-300 rounded-md px-4 py-1 absolute -top-5 left-3">
              Date
            </h3>
            <p className="text-blue-600 font-medium text-[8px] md:text-xs leading-relaxed text-center">
              DECEMBER <span className="font-bold">23RD 2024</span> - JANUARY{" "}
              <span className="font-bold"> 1ST 2025</span>
            </p>
          </motion.div>
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <motion.div
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ bounce: 0.8, duration: 1, delay: 3 }}
            className=" bg-white border-2 border-blue-300 rounded-lg shadow-lg p-4 py-5 w-[90%] md:w-[70%] relative"
          >
            <h3 className="text-red-600 font-bold text-xs md:text-md bg-white border-2 border-blue-300 rounded-md px-4 py-1 absolute -top-5 left-3">
              Venue
            </h3>
            <p className="text-blue-600 font-medium text-[8px] md:text-xs leading-relaxed text-center">
              Federal science and technical college, Yaba <br /> (FSTC) Behind
              YABATECH
            </p>
          </motion.div>
        </div>
      </div>
      <div className="fixed bottom-0 py-5 w-full flex justify-center items-center gap-x-8 gap-y-4 flex-wrap z-20 bg-white/60 backdrop-blur-md">
        <Link
          to="/register"
          className="w-[200px] h-[40px] md:w-[250px] md:h-[50px]  rounded-lg flex items-center justify-center text-white text-[8px]  font-bold transition-all duration-300 hover:scale-105"
          style={{
            backgroundImage: "linear-gradient(to right, #014898, #00B1EF)",
          }}
        >
          Register Participant
        </Link>
        <Link
          to="/vendor"
          className="w-[200px] h-[40px] md:w-[250px] md:h-[50px] rounded-lg flex items-center justify-center text-white font-bold  text-[8px] transition-all duration-300 hover:scale-105"
          style={{
            backgroundImage: "linear-gradient(to right, #00B1EF,#014898)",
          }}
        >
          Register as Vendor
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
