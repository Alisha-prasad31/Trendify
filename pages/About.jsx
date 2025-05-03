import NewsLetterBox from '../components/NewsLetterBox';
import { assets } from '../assets/assets';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-20 lg:px-40 text-gray-800">
      <h2 className="text-3xl font-semibold mb-10 border-b-2 inline-block border-black">
        ABOUT <span className="font-normal">US</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Image */}
        <div>
          <img
            src={assets.about_img} // Replace with your own image
            alt="About Us"
            className="rounded shadow-lg w-full"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            Trendify was born out of a passion for innovation and a desire to revolutionize the way people shop online.
            Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we’ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.
            From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <div>
            <h3 className="font-semibold text-base mb-2">Our Mission</h3>
            <p>
              Our mission at Trendify is to empower customers with choice, convenience, and confidence.
              We’re dedicated to providing a seamless shopping experience that exceeds expectations — from browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Choose Us Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Quality Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-lg font-semibold mb-4">Quality</h4>
            <p className="text-sm">
              We prioritize quality in everything we do. Our products go through strict quality checks to ensure only the best for our customers.
            </p>
          </div>

          {/* Insurance Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-lg font-semibold mb-4">Insurance</h4>
            <p className="text-sm">
              Enjoy peace of mind with our insurance policies. We offer product insurance options to protect your purchases.
            </p>
          </div>

          {/* Premium Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-lg font-semibold mb-4">Premium</h4>
            <p className="text-sm">
              Our premium membership provides exclusive benefits, such as early access to sales, discounts, and special offers.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default About;
