import React, { useState } from 'react';
import palImage from '../../image/lib.jpeg';
import AmenitiesLayout from '../Faci/Faci';
import LibraryGallery from '../Gallery/Gallery';
import Faq from '../FAQ/Faq';
import { Helmet } from "react-helmet-async";

const HeroSectionWithForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

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
        setStatusType('success');
        setFormData({ name: '', email: '', phone: '', date: '', time: '' });
      } else {
        setStatus(data.message || 'Something went wrong.');
        setStatusType('error');
      }

      setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 3000);

    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
      setStatusType('error');
      setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 3000);
    }
  };

  return (
    <>

{/* ⭐⭐⭐ SEO TAGS — Self Study Library Nasrullaganj ⭐⭐⭐ */}
<Helmet>
  <title>Self Study Library Nasrullaganj | Best AC Study Rooms for Students</title>

  <meta
    name="description"
    content="Self Study Library offers AC study rooms, peaceful environment, high-speed WiFi, personal cabins & dedicated UPSC/MPPSC study spaces in Nasrullaganj. Book your visit today."
  />

  <meta
    name="keywords"
    content="Self Study Library Nasrullaganj, study rooms Nasrullaganj, library near me, AC study room, UPSC study library, MPPSC study library, best library in Nasrullaganj"
  />

  <meta name="author" content="Self Study Library" />
  <meta property="og:title" content="Self Study Library Nasrullaganj | Premium Study Rooms" />
  <meta
    property="og:description"
    content="Best study environment in Nasrullaganj with AC rooms, silence zone, WiFi, personal desks & exam-focused study atmosphere."
  />
  <meta property="og:image" content={palImage} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://self-study-library.onrender.com/" />

  <link rel="canonical" href="https://self-study-library.onrender.com/" />

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Self Study Library",
      "image": "${palImage}",
      "description": "Premium Self Study Library in Nasrullaganj with AC study rooms, WiFi, silent zone, personal cabins and comfortable seating.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nasrullaganj",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "466331",
        "addressCountry": "IN"
      },
      "telephone": "+91-9993938894",
      "url": "https://self-study-library.onrender.com/"
    }
    `}
  </script>
</Helmet>



      {/* HERO SECTION */}
      <div
        className="relative w-full bg-cover bg-center flex items-center justify-center py-20 px-4 md:py-28"
        style={{ backgroundImage: `url(${palImage})` }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 px-2 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Self Study Library – Best AC Study Rooms in Nasrullaganj
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Looking for the best library in Nasrullaganj? Self Study Library offers 
              a peaceful, disciplined, noise-free environment for competitive exam students.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Ideal for UPSC, MPPSC, IAS, NEET, IIT JEE, CA, SSC, Banking and college students.
              Boost productivity in our premium study space.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Book a Visit to Self Study Library
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {status && (
                <div
                  className={`p-3 rounded-md text-white text-sm font-medium shadow-md ${
                    statusType === 'error' ? 'bg-red-600' : 'bg-green-600'
                  }`}
                >
                  {status}
                </div>
              )}

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

      {/* BELOW HERO SECTION */}
      <div className="py-10">
        <AmenitiesLayout />
        <LibraryGallery />
        <Faq />
      </div>

    </>
  );
};

export default HeroSectionWithForm;
