// src/pages/Jobs.js
import React from 'react';

const Jobs = () => {
  // Sample job categories
  const jobCategories = [
    'Tech', 
    'Marketing & Sales', 
    'Management', 
    'Accounts & Finance', 
    'Human Resource', 
    'Customer Service'
  ];

  // Sample job listings
  const jobListings = [
    { title: 'Business Developer' },
    { title: 'Finance Manager' },
    { title: 'Human Resource Manager' },
    { title: 'Software Engineer' },
    { title: 'Web Developer' },
    { title: 'Graphic Designer / UI / UX' },
    { title: 'SEO Expert' },
    { title: 'Android Developer' },
    { title: 'Floor Manager' },
    { title: 'Sales Representative' },
    { title: 'Data Entry Operator' },
    { title: 'Delivery Man' },
    { title: 'Urdu / English Call Center Agent' },
    { title: 'Morning Shift Jobs for Females' },
    { title: 'Accountant' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-100 text-center text-black py-24 overflow-hidden">
  {/* Heading and Text */}
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Jobs</h1>
  <p className="text-md md:text-lg italic max-w-2xl mx-auto">
    "Join our team and shape the future—explore exciting career opportunities today!"
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



      {/* Job Categories */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {jobCategories.map((category, index) => (
        <div
          key={index}
          className="bg-white border-2 border-gray-400 rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="font-medium text-lg">{category}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Job Seeker Community */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
        Join Growvy's 50M+ Job Seeker Community<br/> & Get Hired Faster!
      </h2>
      <p className="text-xl mb-10 max-w-3xl mx-auto">
        "Build your profile, get noticed by top employers, and access exclusive job opportunities 
        tailored to your skills. Your next career move starts here!"
      </p>
      <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition">
        Sign In
      </button>
    </div>
  </div>
</section>


      {/* Top Jobs */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">Top Jobs</h2>

    <div className="grid grid-cols-1 gap-6">
      {jobListings.map((job, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl border-2 border-black shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Job Seeker Card */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      
      {/* Left: Text and Button */}
      <div>
        <h3 className="text-4xl font-bold mb-4">I'm a Job Seeker!</h3>
        <p className="text-gray-800 mb-6">
          Looking for a job according to my skills and requirements.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition">
          Browse Jobs
        </button>
      </div>

      {/* Right: Smaller Image */}
      <div className="w-full flex justify-center">
  <img 
    src="/jobseeker.png" 
    alt="Job seeker illustration" 
    className="w-1/2 max-w-xs h-auto object-contain" 
  />
</div>


    </div>
  </div>
</section>


    </div>
  );
};

export default Jobs;