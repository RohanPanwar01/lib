import React from 'react';
import Co from '../../image/co.jpeg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
  return (
    <>

    <Helmet>
            <title>Contact Self Study Library | Best Library in Nasrullaganj</title>
            <meta
              name="description"
              content="Get in touch with Self Study Library. Open 8AM–8PM daily. Located near HDFC Bank, Bherunda, Nasrullaganj. Call us or visit today."
            />
            <link rel="canonical" href="https://self-study-library.onrender.com/contactus" />
          </Helmet>


    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: `url(${Co})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 py-10 bg-white gap-10">
        
        {/* Left: Contact Info */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-red-500 text-xl">📞</span>
             <Link
                         to="tel:+919993938894"
                          target="_blank"
                          rel="noopener noreferrer">
            <p className="text-gray-800">+91 9993938894</p>
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-red-500 text-xl">📧</span>
            <p className="text-gray-800">abc@gmail.com</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Address</h2>

          {/* <div className="flex items-start gap-3 mb-3">
            <span className="text-red-500 text-xl">📍</span>
            <p className="text-gray-700">
              57A Sheetal Nagar, Behind BCM Heights,<br />
              Near Mangal City, Vijay Nagar Indore – 452010
            </p>
          </div> */}

          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">📍</span>
            <a href='https://maps.app.goo.gl/EfPMWAPqj4JzoZUH7'>
            <p className="text-gray-700">
            Near HDFC BANK, Tehsil BHERUNDA, Nasrullaganj, Madhya Pradesh 466331
            </p>
            </a>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Send Inquiry Here</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-3 border rounded-md col-span-1" />
            <input type="text" placeholder="Last Name" className="p-3 border rounded-md col-span-1" />
            <input type="text" placeholder="Enter Your Number" className="p-3 border rounded-md col-span-2" />
            <input type="email" placeholder="Enter Your Mail" className="p-3 border rounded-md col-span-2" />
            <textarea placeholder="Message" rows={4} className="p-3 border rounded-md col-span-2"></textarea>
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded col-span-2">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="px-6 md:px-16 pb-12">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="w-full h-[480px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3681.120209916976!2d77.27499367349462!3d22.686568528787078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397da9d71c64570b%3A0x691664a1961bc63c!2sNear%20HDFC%20BANK%2C%20Tehsil%20BHERUNDA%2C%20Nasrullaganj%2C%20Madhya%20Pradesh%20466331!3m2!1d22.6865636!2d77.2775686!5e0!3m2!1sen!2sin!4v1747398015777!5m2!1sen!2sin" // Replace with your own map URL
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border rounded-lg shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};


export default ContactUs;
