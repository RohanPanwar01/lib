import React from "react";

function Faq() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10">
        Frequently Asked Questions About Our Library In Nasrullaganj
      </h1>

      {/* Left Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl font-bold text-red-600 mb-4">
            OUR TEAM IS READY TO ANSWER YOUR QUESTIONS!
          </h2>
          <p className="text-gray-700 text-md mb-6">
            If you have more questions about our <strong>library in Nasrullaganj</strong> or want to know more about our study room facilities, please feel free to fill out the form below or call/WhatsApp us. For more detailed questions, visit our FAQ page to get all your queries answered.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-all">
            MORE QUESTIONS ABOUT LIBRARY?
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Timing Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Timing</h3>

            <Accordion
              question="What are the library timings, and are they flexible?"
              answer="Our library operates from 8:00 AM to 10:00 PM daily. We also offer flexible slots for students who require early morning or late-night study options."
            />
            <Accordion
              question="What are the timings of the library?"
              answer="Standard timings are from 8:00 AM to 10:00 PM, including weekends and public holidays."
            />
            <Accordion
              question="What is the fee structure of the library?"
              answer="We offer different packages starting at ₹500/month. Charges vary depending on the duration and type of seating selected."
            />
          </div>

          {/* Facilities Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h3>

            <Accordion
              question="How safe is the library's environment for girls?"
              answer="The library maintains a highly secure and friendly environment with CCTV surveillance and a dedicated staff to ensure safety, especially for female students."
            />
            <Accordion
              question="Do you have Cabin system type seating?"
              answer="Yes, we offer both open and cabin-style seating to meet different study preferences. Cabins provide a more private and quiet atmosphere."
            />
          </div>


          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Space</h3>

            <Accordion
              question="How safe is the library's environment for girls?"
              answer="The library maintains a highly secure and friendly environment with CCTV surveillance and a dedicated staff to ensure safety, especially for female students."
            />
            <Accordion
              question="Do you have Cabin system type seating?"
              answer="Yes, we offer both open and cabin-style seating to meet different study preferences. Cabins provide a more private and quiet atmosphere."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({ question, answer }) {
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden border rounded-md">
      <summary className="flex items-center justify-between p-4 text-gray-800 cursor-pointer bg-gray-50 hover:bg-gray-100">
        <span className="font-medium">{question}</span>
        <svg
          className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="px-4 pb-4 pt-2 text-gray-600">
        {answer}
      </p>
    </details>
  );
}

export default Faq;
