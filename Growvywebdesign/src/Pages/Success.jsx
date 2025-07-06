// src/pages/Success.js
import React from 'react';

const Success = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-100 text-center text-black py-24 overflow-hidden">
  {/* Heading and Text */}
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Success</h1>
  <p className="text-md md:text-lg italic max-w-2xl mx-auto">
    "Discover inspiring Success Stories—see how our solutions empower businesses to thrive!"
  </p>

  {/* Bottom curve SVG */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 100"
    >
      <path
        d="M0,0 C300,100 900,100 1200,0 L1200,100 L0,100 Z"
        fill="#d1f5d3"
      />
    </svg>
  </div>
</section>

      {/* Client Logos */}
     <section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    {/* Title */}
    <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
      Join over 10k Clients Worldwide
    </h2>

    {/* Button */}
    <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition mb-12">
      View Pricing
    </button>

    {/* Brand Icons */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
  {['/Client1.png', '/Client2.png', '/Client3.png', '/Client4.png'].map((src, index) => (
    <div key={index} className="flex justify-center items-center">
      <img 
        src={src} 
        alt={`Brand ${index + 1}`} 
        className="h-20 md:h-24 object-contain" 
      />
    </div>
  ))}
</div>

  </div>
</section>


      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    
    {/* Title */}
    <h2 
      className="text-5xl font-bold text-center mb-4" 
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      Join Growvy’s 50M+ Job Seeker<br/> Community & Get Hired Faster!
    </h2>
    
    {/* Paragraph */}
    <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-8 italic">
      “Build your profile, get noticed by top employers, and access exclusive job
      opportunities tailored to your skills. Your next career move starts here!”
    </p>

    {/* Button */}
    <div className="text-center mb-12">
      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition">
        Sign In
      </button>
    </div>

    {/* Testimonial Cards */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">

      {/* Card 1 */}
      <div className="relative border-4 border-green-600 bg-gradient-to-br from-green-100 to-yellow-50 p-6 pt-12 rounded-3xl shadow-lg max-w-md w-full">
        {/* Image positioned outside top-left */}
        <div className="absolute -top-8 -left-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src="/user1.png" 
              alt="Client 1" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <p className="text-lg text-gray-800 mb-4 italic">
          “Growvy helped me land my dream job faster than I expected. Highly recommended!”
        </p>
        <p className="text-xl font-bold">Ali Khan</p>
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-2xl">★</span>
          ))}
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative border-4 border-yellow-500 bg-gradient-to-br from-yellow-100 to-green-50 p-6 pt-12 rounded-3xl shadow-lg max-w-md w-full">
        {/* Image positioned outside top-left */}
        <div className="absolute -top-8 -left-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src="/user2.png" 
              alt="Client 2" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <p className="text-lg text-gray-800 mb-4 italic">
          “The hiring process was smooth and transparent thanks to Growvy.”
        </p>
        <p className="text-xl font-bold">Sarah Ahmed</p>
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-2xl">★</span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
};


export default Success;