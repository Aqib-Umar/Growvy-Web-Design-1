// src/pages/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('recruitment');

  const recruitmentPlans = [
    {
      name: 'Basic CV Service',
      description: ' a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals',
      Servicecost: 'Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly',
      benefits: [
        'Companies Can access the database with monthly 200 Searches',
        'Manage Filters Like Skills, Cities, Experience etc.',
        'Live chat experts help'
      ]
    },
    {
      name: 'Lead Generating',
      description: 'Companies will directly get available resources at their own level and customers at their own price and customer charges will apply on the candidate’s approach.',
      Servicecost: 'Price 50$ (6998 PKR) (50$ will apply per 20 Candidates)',
      
      benefits: [
        'Companies can create a job post on Growvy',
        'Manage Filters Like Skills, Cities, Experience etc.',
        'Dedicated Team to shortlist best candidates',
        'Live chat experts help'
      ]
    },
    {
      name: 'Recruitment Service',
      description: 'Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.',
      Servicecost: [' Price 40% of first Salary (For Experienced)',
        '(Can avail this package after one subscription)'
      ],
      benefits: [
        'Client can create a job post',
        'Filters like Skills, Cities, Exp etc.',
        'Minor screening interview',
        'Whatsapp group with Team',
        'Complete A-Z hiring solution'
      ]
    }
  ];

  const ecommercePlans = [
    {
      name: 'Basic CV Service',
      description: ' a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals',
      Servicecost: 'Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly',
      benefits: [
        'Companies Can access the database with monthly 200 Searches',
        'Manage Filters Like Skills, Cities, Experience etc.',
        'Live chat experts help'
      ]
    },
    {
      name: 'Lead Generating',
      description: 'Companies will directly get available resources at their own level and customers at their own price and customer charges will apply on the candidate’s approach.',
      Servicecost: 'Price 50$ (6998 PKR) (50$ will apply per 20 Candidates)',
      
      benefits: [
        'Companies can create a job post on Growvy',
        'Manage Filters Like Skills, Cities, Experience etc.',
        'Dedicated Team to shortlist best candidates',
        'Live chat experts help'
      ]
    },
    {
      name: 'Recruitment Service',
      description: 'Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.',
      Servicecost: [' Price 40% of first Salary (For Experienced)',
        '(Can avail this package after one subscription)'
      ],
      benefits: [
        'Client can create a job post',
        'Filters like Skills, Cities, Exp etc.',
        'Minor screening interview',
        'Whatsapp group with Team',
        'Complete A-Z hiring solution'
      ]
    }
  ];

  const businessPlans = [
    {
      name: 'Basic CV Service',
      description: ' a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals',
      Servicecost: 'Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly',
      benefits: [
        'Companies Can access the database with monthly 200 Searches',
        'Manage Filters Like Skills, Cities, Experience etc.',
        'Live chat experts help'
      ]
    },
    {
      name: 'Lead Generating',
      description: 'Companies will directly get available resources at their own level and customers at their own price and customer charges will apply on the candidate’s approach.',
      Servicecost: 'Price 50$ (6998 PKR) (50$ will apply per 20 Candidates)',
      
      benefits: [
        'Companies can create a job post on Growvy',
        'Manage Filters Like Skills, Cities, Experience etc.',
        'Dedicated Team to shortlist best candidates',
        'Live chat experts help'
      ]
    },
    {
      name: 'Recruitment Service',
      description: 'Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.',
      Servicecost: [' Price 40% of first Salary (For Experienced)',
        '(Can avail this package after one subscription)'
      ],
      benefits: [
        'Client can create a job post',
        'Filters like Skills, Cities, Exp etc.',
        'Minor screening interview',
        'Whatsapp group with Team',
        'Complete A-Z hiring solution'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-100 text-center text-black py-24 overflow-hidden">
  {/* Heading and Text */}
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
  <p className="text-md md:text-lg italic max-w-2xl mx-auto">
    "Discover flexible pricing plans tailored to your needs—start growing with us today!"
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


      {/* Solution Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
  <div className="flex bg-gray-100 p-1 rounded-lg border border-black">
    <button 
      className={`px-6 py-3 rounded-full font-bold transition duration-200 ${
        activeTab === 'recruitment' 
          ? 'bg-green-600 text-white shadow-md' 
          : 'text-black'
      }`}
      onClick={() => setActiveTab('recruitment')}
    >
      Recruitment Solution
    </button>
    <button 
      className={`px-6 py-3 rounded-full font-bold transition duration-200 ${
        activeTab === 'ecommerce' 
          ? 'bg-green-600 text-white shadow-md' 
          : 'text-black'
      }`}
      onClick={() => setActiveTab('ecommerce')}
    >
      E-commerce Solutions
    </button>
    <button 
      className={`px-6 py-3 rounded-full font-bold transition duration-200 ${
        activeTab === 'business' 
          ? 'bg-green-600 text-white shadow-md' 
          : 'text-black'
      }`}
      onClick={() => setActiveTab('business')}
    >
      Business Solutions
    </button>
  </div>
</div>



          {/* Recruitment Solution */}
          {activeTab === 'recruitment' && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Recruitment Solution</h2>
                <p className="text-xl text-gray-600">
                  Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {recruitmentPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>
            </div>
          )}

          {/* E-commerce Solutions */}
          {activeTab === 'ecommerce' && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">E-commerce Solutions</h2>
                <p className="text-xl text-gray-600">
                  "Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly."
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ecommercePlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>
            </div>
          )}

          {/* Business Solutions */}
          {activeTab === 'business' && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Business Solutions</h2>
                <p className="text-xl text-gray-600">
                  "Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly."
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {businessPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>
            </div>
          )}

          
        </div>
      </section>

      {/* Schedule Call */}
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

const PricingCard = ({ plan }) => (
  <div
    className="p-[2px] rounded-2xl"
    style={{
      background: 'linear-gradient(to right, #22c55e, #facc15)',
    }}
  >
    <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
        <p className="text-gray-900 mb-6">{plan.description}</p>

        {/* Service Cost Section */}
        <div className="mb-6">
          <p className="text-2xl font-semibold text-black mb-1">Service Cost</p>
          <span className="  font-[Arial] ">{plan.Servicecost}</span>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <p className="text-2xl font-semibold text-black mb-3">Benefits</p>
          <ul className="space-y-3">
            {plan.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition">
        Get Started
      </button>
    </div>
  </div>
);

export default Pricing;