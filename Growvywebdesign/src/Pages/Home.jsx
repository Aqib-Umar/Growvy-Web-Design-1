// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
       <section className="bg-white py-12 md:py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Text Content */}
      <div className="order-2 lg:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-sans">
          <span className="block">Maximize</span>
          <span className="block">business efficiency</span>
        </h1>

        <div className="h-6 flex items-center justify-center lg:justify-start">
          <span className="text-xl md:text-2xl  font-medium text-gray-600">with</span>
        </div>

        <div className="mb-4">
          <span className="text-4xl md:text-5xl font-bold text-green-600 font-sans">Growvy</span>
        </div>

        <p className="text-lg md:text-xl text-black mb-6 max-w-lg">
          Scale your company with <br />
          tailored strategies, market<br />
          insights, and expert consulting
        </p>

        <Link 
          to="/pricing" 
          className="bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg inline-block hover:bg-green-700 transition"
        >
          Start Today
        </Link>
      </div>

      {/* Image (clean - not in a card) */}
      <div className="order-1 lg:order-2 flex justify-center">
        <img 
          src="/Group 2.png" 
          alt="Growth Illustration" 
          className="w-full max-w-md h-auto"
        />
      </div>

    </div>
  </div>
</section>


      {/* Mission Statement */}
      <section className="py-16 bg-gray-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xl italic">
            "Growvy is built to streamline hiring, optimize assets, and drive business growth. 
            Our mission is to create a tech-driven ecosystem where companies hire smarter, 
            manage resources efficiently, and scale effortlessly. Whether you're seeking top talent, 
            asset solutions, or business expansion, Growvy is your trusted partner in success."
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col gap-16">
      {/* Card 1 - Job Seeker: Text left, Image right */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
  {/* Text Content */}
  <div className="w-full md:w-1/2">
    <h3 className="text-3xl font-bold text-black mb-4">I'm a Job Seeker!</h3>
    <p className="text-lg text-gray-700 mb-6">
      Looking for a job according to my skills and requirements.
    </p>
    <a 
      href="/jobs" 
      className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition"
    >
      Find Jobs
    </a>
  </div>

  {/* Smaller Integrated Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img 
      src="/jobseeker.png" 
      alt="Job Seeker" 
      className="max-w-[300px] h-auto object-contain rounded-xl"
    />
  </div>
</div>

      
      {/* Card 2 - Employer: Text right, Image left */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
  {/* Text Content */}
  <div className="w-full md:w-1/2 md:pl-8">
    <h3 className="text-3xl font-bold text-black mb-4">I'm an Employer!</h3>
    <p className="text-lg text-gray-700 mb-6">
      Looking for talented candidates for my company.
    </p>
    <a 
      href="/services" 
      className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition"
    >
      Post a Job
    </a>
  </div>

  {/* Image Container */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img 
      src="/emplyr.png" 
      alt="Employer" 
      className="max-w-[300px] h-auto object-contain rounded-xl"
    />
  </div>
</div>

      
      {/* Card 3 - E-commerce: Text left, Image right */}
      <div className="flex flex-col md:flex-row items-center gap-8">
  {/* Text Content */}
  <div className="w-full md:w-1/2">
    <h3 className="text-3xl font-bold text-black mb-4">I'm an E-commerce Store!</h3>
    <p className="text-lg text-gray-700 mb-6">
      Looking for potential sales data for sales campaign.
    </p>
    <a 
      href="/services" 
      className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition"
    >
      Sales Data
    </a>
  </div>

  {/* Image Container */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img 
      src="/Estores.png" 
      alt="E-commerce" 
      className="max-w-[300px] h-auto object-contain rounded-xl"
    />
  </div>
</div>

      
      {/* Card 4 - Business: Text right, Image left */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
  {/* Text Content */}
  <div className="w-full md:w-1/2 md:pr-8">
    <h3 className="text-3xl font-bold text-black mb-4">I'm a Business!</h3>
    <p className="text-lg text-gray-700 mb-6">
      Looking for CRM or Data resources to boost my business.
    </p>
    <a 
      href="/pricing" 
      className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition"
    >
      Business Plans
    </a>
  </div>

  {/* Image Container */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img 
      src="/Bussiness.png" 
      alt="Business" 
      className="max-w-[300px] h-auto object-contain rounded-xl"
    />
  </div>
</div>

    </div>
  </div>
</section>

      {/* Job Seeker Community */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
        Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!
      </h2>
      <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-700">
        "Build your profile, get noticed by top employers, and access exclusive job opportunities 
        tailored to your skills. Your next career move starts here!"
      </p>
      <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
        Sign In
      </button>
    </div>
  </div>
</section>

      {/* E-commerce Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      {/* Text Content - Left Side */}
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          E-commerce Owner?
        </h2>
        <p className="text-xl mb-8 text-gray-700 max-w-lg">
          Optimize your business with smart asset management, growth strategies, 
          and cutting-edge solutions to boost sales and efficiency with Growvy!
        </p>
        <Link 
          to="/pricing" 
          className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold inline-block hover:bg-green-700 transition shadow-md hover:shadow-lg"
        >
          Plans
        </Link>
      </div>
      
      {/* Image Container - Right Side */}
      <div className="flex justify-center">
        <img 
          src="/Eowner.png" 
          alt="E-commerce Owner" 
          className="w-full max-w-md h-auto rounded-xl object-contain" 
        />
      </div>
    </div>
  </div>
</section>



      {/* Schedule Call */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      
      {/* Image Container - Left Side */}
      <div className="flex justify-center lg:justify-start">
        <img 
          src="/jseeker.png" 
          alt="Schedule a call" 
          className="rounded-2xl w-full max-w-md h-auto object-contain" 
        />
      </div>
      
      {/* Content Container - Right Side */}
      <div className="flex flex-col items-start text-left">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full text-lg transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl mb-6">
          Schedule a Call
        </button>
        <p className="text-xl text-gray-700 max-w-lg">
          Join over 10k users worldwide. <br />
          Start scheduling in less than 1 minute.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

const SolutionCard = ({ title, description, buttonText, link }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <Link 
      to={link} 
      className="bg-indigo-100 text-indigo-700 font-medium px-6 py-2 rounded-lg text-center hover:bg-indigo-200 transition"
    >
      {buttonText}
    </Link>
  </div>
);


export default Home;