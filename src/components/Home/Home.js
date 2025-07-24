import React, { useState } from 'react';
import palImage from '../../image/lib.jpeg';
import AmenitiesLayout from '../Faci/Faci';
import LibraryGallery from '../Gallery/Gallery';
import Faq from '../FAQ/Faq';

const HeroSectionWithForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://management-api-yeuz.onrender.com/VisitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', date: '', time: '' });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }
  };

  return (
    <>
      <div
        className="relative w-full bg-cover bg-center flex items-center justify-center py-20 px-4 md:py-28"
        style={{ backgroundImage: `url(${palImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 px-2 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Experience the Ultimate Self Study Environment at Top Library in Nasrullaganj
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Looking for the best library in Nasrullaganj? Self Study Library and Study Rooms is the ultimate destination for students and scholars.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              We cater to UPSC, MPPSC, IAS, LAW CAT, MEDICAL NEET, IIT JEE, CA, and other aspirants. Join us today and take the first step towards success!
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Schedule a visit to our library in Nasrullaganj
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {status && <p className="text-sm text-green-600">{status}</p>}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Space after Hero Section */}
      <div className="py-10">
        <AmenitiesLayout />
        <LibraryGallery />
        <Faq />
      </div>
    </>
  );
};

export default HeroSectionWithForm;
