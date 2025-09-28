import React, { useState } from 'react';
import { Download } from 'lucide-react';
// IMPORTANT: Make sure this path is correct for your project
import prospectusImage from '@/assets/Prospectus.jpg';

const Prospectus: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual form submission logic
    console.log('Prospectus download request for email:', email);
    alert('Thank you! The prospectus will be sent to your email shortly.');
    setEmail('');
  };

  return (
    <section id="prospectus" className="bg-[#E87A4D] py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Prospectus Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={prospectusImage}
              alt="Nirmaan Prospectus Cover"
              className="rounded-2xl shadow-2xl w-full max-w-md"
            />
          </div>

          {/* Right Column: Content and Form */}
          <div className="text-white text-center lg:text-left">
            <p className="font-semibold tracking-widest text-sm mb-4 text-white/90">
              — DOWNLOAD THE PROSPECTUS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-8 leading-tight">
              Download our prospectus to know more about our program and curriculum
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-2 rounded-full flex items-center max-w-lg mx-auto lg:mx-0 shadow-lg"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow bg-transparent px-4 py-2 text-gray-700 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 flex-shrink-0"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prospectus;
