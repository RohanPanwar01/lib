import React from "react";
import palImage from '../../image/a1.jpg';

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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="text-gray-500 md:mt-4 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
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
          alt="Library"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section><br /><br />

      {/* Second Content Section */}
      <section className="overflow-hidden bg-gray-50 flex flex-col sm:grid sm:grid-cols-2 dark:bg-gray-900">
        {/* For alternating layout on desktop, put the image first */}
        <img
          alt="Library"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="text-gray-500 md:mt-4 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
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
