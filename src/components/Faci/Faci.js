import React from 'react';
import { Wifi, ParkingCircle, Clock, Snowflake, Wine, Shield } from 'lucide-react';

const amenities = [
  {
    icon: <Wifi className="text-red-500" size={48} />,
    title: 'High-speed Wi-Fi',
    description: 'High-speed Wi-Fi at all K3 library branches, ensuring seamless access to online resources for academic research and study.'
  },
  {
    icon: <ParkingCircle className="text-red-500" size={48} />,
    title: '2 & 4 Wheeler Parking',
    description: 'We provide ample parking space which is safe and secure for both 2-wheelers and 4-wheelers so you can focus on your studies without worrying about your vehicle.'
  },
  {
    icon: <Clock className="text-red-500" size={48} />,
    title: 'Flexible Study Hours',
    description: 'Our library is open from 8 am to 10 pm, allowing members access at any time and as often as they need, providing the flexibility to create their own study schedule.'
  },
  {
    icon: <Snowflake className="text-red-500" size={48} />,
    title: 'Fully Air-Conditioned',
    description: 'Enjoy a comfortable study environment with fully air-conditioned spaces across all our library branches.'
  },
  {
    icon: <Wine className="text-red-500" size={48} />,
    title: 'Drinking Water',
    description: 'Clean and safe drinking water is available for all members to stay refreshed during long study hours.'
  },
  {
    icon: <Shield className="text-red-500" size={48} />,
    title: 'Quiet & Secure',
    description: 'Our library maintains a quiet and secure environment to ensure you can focus on your studies without distractions.'
  }
];

const AmenitiesLayout = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Amenities at Self Study Library in Nasrullaganj</h2>
        <p className="text-red-500 font-semibold mt-3 text-lg">TOP FACILITIES THAT SET US APART AS THE BEST LIBRARY IN NASRULLAGANJ</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="mb-5">{item.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesLayout;
