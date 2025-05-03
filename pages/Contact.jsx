import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-10 md:px-20 lg:px-40 bg-white text-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-10">
        CONTACT <span className="text-black font-bold">US</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Image */}
        <div>
          <img
            src={assets.contact_img} // Replace with your own image if needed
            alt="Contact"
            className="rounded shadow-lg w-full"
          />
        </div>

        {/* Right Side - Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Our Store</h3>
            <p>5409 Williams Station<br />Suite 250, Washington, USA</p>
            <p className="mt-2">Tel: (465) 855-0123<br />Email: admin@Trendify.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Careers at Forever</h3>
            <p>Learn more about our teams and job openings.</p>
            <button className="mt-3 px-4 py-2 border border-black hover:bg-black hover:text-white transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
