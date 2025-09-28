import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have this component
import { Mail, Phone, Send, Linkedin, Youtube, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your actual form submission logic
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FFF8F1]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-orange-600 font-poppins">
            Join Us
          </h2>
          <p className="text-xl text-gray-600 mt-4 font-inter">
            Let's Create tomorrow's leaders today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Get in Touch Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                We're always excited to work on new projects and collaborate with talented schools and educators. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:hello@nirmaan.education" className="text-orange-600 hover:underline">hello@nirmaan.education</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <a href="tel:+918431234711" className="text-orange-600 hover:underline">+91 84312 34711</a>
                </div>
              </div>
            </div>
             <div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-4">
                Connect with us
              </h3>
              <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110"><Youtube/></a>
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110"><Linkedin/></a>
                  <a href="#" className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110"><MessageSquare/></a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
