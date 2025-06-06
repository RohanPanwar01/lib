import React from "react";
import palImage from '../../image/a1.jpg';
import B2 from '../../image/b2.jpg';
import B3 from '../../image/b3.jpg';

function Aboutus() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 md:h-80"
        style={{ backgroundImage: `url(${palImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* First Content Section */}
      <section className="overflow-hidden bg-gray-50 flex flex-col sm:grid sm:grid-cols-2 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Become A Member
            </h2>
            <p className="text-gray-500 md:mt-4 dark:text-gray-300">
              Welcome to Self Study Library and Study Zone, located in the vibrant city of Nasrullaganj
              , Madhya Pradesh. Our platform is designed to provide students, scholars, and professionals of different exams like UPSC, MPPSC, IAS, LAW CAT, MEDICAL NEET, IIT JEE, CHARTERED ACCOUNTANT etc. with access to a vast collection of academic resources, study materials, and virtual learning tools, all in one convenient location.
            </p>
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
        src={B2}
          alt="Library"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section><br /><br />

      {/* Second Content Section */}
      <section className="overflow-hidden bg-gray-50 flex flex-col sm:grid sm:grid-cols-2 dark:bg-gray-900">
        {/* For alternating layout on desktop, put the image first */}
        <img
        src={B3}
          alt="Library"
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Ready To Get Started?
            </h2>
            <p className="text-gray-500 md:mt-4 dark:text-gray-300">
            As a premier library and study center in Nasrullaganj
            , we strive to provide our users with the best possible experience. Our physical library is equipped with air conditioned comfortable seating, high-speed internet access, and a conducive environment for studying and research. Our team of experienced librarians is always on hand to assist you in finding the materials you need and to provide guidance on how to make the most of our resources.
            </p>
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Aboutus;
