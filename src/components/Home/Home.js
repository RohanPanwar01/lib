import React from 'react';
import palImage from '../../image/lib.jpeg'

const HeroSectionWithForm = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${palImage})`,}}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Section */}
        <div className="text-white space-y-6 lg:pl-10">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
            Experience the Ultimate Self Study Environment at Top Library in Nasrullaganj
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Looking for the best library in Nasrullaganj? Self Study Library and Study Rooms is the ultimate destination for students and scholars in Nasrullaganj. Our modern facilities, peaceful ambiance, and fully-equipped study rooms provide the perfect environment for focused and uninterrupted self-study.
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            We cater to students preparing for UPSC, MPPSC, IAS, LAW CAT, MEDICAL NEET, IIT JEE, CA, or any other exam. Join us today and take the first step towards academic success!
          </p><br /><br />
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule a visit to our library in Nasrullaganj</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            <input type="date" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            <input type="time" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            {/* <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
              <option>Location</option>
            </select>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
              <option>I am interested in</option>
            </select> */}
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithForm;
