import React from 'react';
import { Link } from 'react-router-dom';

function Price() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-900">

<h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-10">
Affordable Packages and Membership Plans for Library
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Monthly / 1 Month</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">500Rs</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {[" Free Wifi", " Fully Air Conditioned (AC)", "Secured Campus ( CCTV )", "Charging Sockets","Comfy Chairs","Purified Drinking Water","2 / 4 Wheeler Parking","Spacious Cabin","Open Space / Open Area"].map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
                      to="tel:+919993938894"
                       target="_blank"
                       rel="noopener noreferrer"
            className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:ring-3 focus:outline-none"
          >
            Get Started
          </Link>
        </div>

        {/* Pro Plan - Highlighted */}
        <div className="bg-white rounded-2xl border border-indigo-600 p-6 shadow-sm sm:px-8 lg:p-12 ring-2 ring-indigo-600">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">3 Month</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">1200Rs</strong>
              <span className="text-sm font-medium text-gray-700"></span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {[" Free Wifi", " Fully Air Conditioned (AC)", "Secured Campus ( CCTV )", "Charging Sockets","Comfy Chairs","Purified Drinking Water","2 / 4 Wheeler Parking","Spacious Cabin","Open Space / Open Area"].map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

           <Link
                       to="tel:+919993938894"
                        target="_blank"
                        rel="noopener noreferrer"
            className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-none"
          >
            Get Started
          </Link>
        </div>

        {/* Starter Plan */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 ff">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">6 Month</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">2800Rs</strong>
              <span className="text-sm font-medium text-gray-700"></span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {[" Free Wifi", " Fully Air Conditioned (AC)", "Secured Campus ( CCTV )", "Charging Sockets","Comfy Chairs","Purified Drinking Water","2 / 4 Wheeler Parking","Spacious Cabin","Open Space / Open Area"].map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
                      to="tel:+919993938894"
                       target="_blank"
                       rel="noopener noreferrer"
            className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:ring-3 focus:outline-none"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Price;
