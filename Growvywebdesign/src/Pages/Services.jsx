// src/pages/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Hiring',
      description: 'Access a vast talent pool to hire the right candidates quickly and affordably.',
      icon: '👥'
    },
    {
      title: 'E-commerce',
      description: 'Drive expansion with targeted strategies and market-driven solutions.',
      icon: '🛒'
    },
    {
      title: 'Business',
      description: 'Optimize and manage business resources with data-backed insights.',
      icon: '📊'
    }
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-100 text-center text-black py-24 overflow-hidden">
  {/* Heading and Text */}
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
  <p className="text-md md:text-lg italic max-w-2xl mx-auto">
     At Growvy, we provide innovative, cost-effective solutions to help businesses and professionals thrive.
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

      {/* Services Grid */}
    <section className="pt-36 pb-16">
  <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
    {services.map((service, index) => {
      const imagePaths = ['/service1.png', '/service2.png', '/Eowner.png'];
      return (
        <div 
          key={index} 
          className="relative bg-white border-4 border-black rounded-3xl shadow-lg pt-24 pb-8 px-6 text-center max-w-sm w-full"
        >
          {/* Image positioned above the card */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-white p-1">
              <img 
                src={imagePaths[index] || '/default.png'} 
                alt={`Service ${index + 1}`} 
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-2xl font-bold mb-4 mt-1">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      );
    })}
  </div>

  {/* View Plans button */}
  <div className="mt-12 text-center">
    <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-700 transition">
      View Plans
    </button>
  </div>


  {/* Final CTA section */}
  <div className="mt-16 text-center">
    <h2
      className="text-4xl font-bold mb-6 tracking-normal"
      style={{ fontFamily: 'Arial' }}
    >
      Join over 10k users worldwide
    </h2>
    <button className="bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-green-700 transition">
      View Pricing
    </button>
  </div>
</section>


      {/* Problem/Solution Sections */}
      <section className="py-16 bg-white font-[Arial] text-black">
  <div className="container mx-auto px-4 space-y-20">

    {/* Row 1: Text Left - Image Right */}
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h3 className="text-3xl font-bold mb-4">Problems in Hiring</h3>
        <p className="text-xl text-justify">
          Companies spend high $$$ budgets on job portals like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/problem1.png" alt="Hiring Problem" className="w-[60%] h-auto" />
      </div>
    </div>

    {/* Row 2: Image Left - Text Right */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h3 className="text-3xl font-bold mb-4">With Growvy Solution</h3>
        <p className="text-xl text-justify mb-6">
          With Growvy, businesses can access a database of active job seekers who have recently joined for job search. Use advanced filters to find the right candidates quickly and at a fraction of the cost—no wasted budget, just quality hires!
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Start Now
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/problem2.png" alt="Growvy Hiring Solution" className="w-[60%] h-auto" />
      </div>
    </div>

    {/* Row 3: Text Left - Image Right */}
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h3 className="text-3xl font-bold mb-4">E-commerce Business</h3>
        <p className="text-xl text-justify">
          E-commerce businesses struggle with high marketing costs, inefficient operations, and slow growth, making it difficult to scale and maximize profits.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/problem3.png" alt="E-commerce Problem" className="w-[60%] h-auto" />
      </div>
    </div>

    {/* Row 4: Image Left - Text Right */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h3 className="text-3xl font-bold mb-4">With Growvy Solution</h3>
        <p className="text-xl text-justify mb-6">
          Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Start Now
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/problem4.png" alt="Growvy E-commerce Solution" className="w-[60%] h-auto" />
      </div>
    </div>

  </div>
</section>

<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      
      {/* Left Side: Image */}
      <div className="flex justify-center">
        <img 
          src="/jseeker.png" // Updated image path
          alt="Job Seeker Illustration"
          className="w-[80%] h-auto" // Removed card-like appearance
        />
      </div>

      {/* Right Side: Button and Text */}
      <div className="text-left">
        <button className="bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg mb-6 hover:bg-green-700 transition">
          Schedule a Call
        </button>

        <p className="text-xl text-gray-700 max-w-md">
          Join over 10k users worldwide. Start scheduling in less than 1 minute.
        </p>
      </div>

    </div>
  </div>
</section>      
    </div>
  );
};


export default Services;