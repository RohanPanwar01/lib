import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Removed Pagination
import 'swiper/css';
import b1 from './b1.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'
import b5 from './b5.jpg'
import b6 from './b6.jpg'
import q1 from '../../image/q1.jpg'
import q2 from '../../image/q2.jpg'
import { Helmet } from 'react-helmet-async';




const LibraryGallery = () => {
  const slides = [
    // {
    //   image: b1,
    //   caption: 'Private cabin for students with study lamp',
    // },
    {
      image: b5,
      caption: 'Spacious Open Area',
    },
    // {
    //   image: b3,
    //   caption: 'Study rooms with comfortable Chairs',
    // },
    {
      image: b4,
      caption: 'Mandir',
    },
    // {
    //   image: b5,
    //   caption: 'Study rooms with comfortable Chairs',
    // },
    // {
    //   image: b6,
    //   caption: 'Study rooms with comfortable Chairs',
    // },
     {
      image: q1,
      caption: 'Study rooms with comfortable Chairs',
    },
     {
      image: q2,
      caption: 'Study rooms with comfortable Chairs',
    },
  ];

  return (
    <>
    <Helmet>
      {/* <title>Library Gallery – Self Study Library | Virtual Tour & Facilities Photos</title> */}

<meta name="description" content="Explore the Self Study Library through a virtual photo gallery. View AC study rooms, spacious open areas, comfortable chairs, peaceful mandir area, and premium study environment in Nasrullaganj." />

<meta name="keywords" content="Self Study Library gallery, Self Study Library photos, study library images, AC study room gallery, Nasrullaganj library photos, student study space images, virtual library tour" />

<meta property="og:title" content="Library Gallery – Self Study Library" />
<meta property="og:description" content="Take a virtual tour of Self Study Library. Check out our study rooms, open spaces, AC halls and silent reading environment." />
<meta property="og:image" content="https://self-study-library.onrender.com/" />
<meta property="og:type" content="website" />

<meta name="twitter:title" content="Library Gallery – Self Study Library" />
<meta name="twitter:description" content="Explore study room photos, open halls and silent reading zones at Self Study Library." />
<meta name="twitter:image" content="https://self-study-library.onrender.com/" />

<link rel="canonical" href="https://self-study-library.onrender.com/" />

      </Helmet>
    <section className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">View Our Library Virtually</h2>
        <p className="text-red-500 font-semibold mt-2">
          EXPLORE OUR FACILITIES THROUGH STUNNING PHOTOS
        </p>
      </div>

      <div className="w-full px-4 md:px-20">
        <Swiper
          modules={[Autoplay]} // Removed Pagination module
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={slide.image}
                alt={slide.caption}
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-72"
              />
              <p className="mt-4 text-center text-red-500 font-semibold">{slide.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-8">
        <a
          href="#gallery"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-bold rounded-md"
        >
          EXPLORE OUR GALLERY
        </a>
      </div>
    </section>
    </>
  );
};

export default LibraryGallery;
