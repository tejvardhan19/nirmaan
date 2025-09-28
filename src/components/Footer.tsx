import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Dribbble } from 'lucide-react';
import logo from '@/assets/logo.jpg'; // Assuming you have the logo asset

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Programs', id: 'programs' },
    { name: 'AI Promise', id: 'ai-promise' },
    { name: 'Impact', id: 'impact' },
  ];

  const programs = [
    { name: 'Communication Skills', id: 'programs' },
    { name: 'Life Skills', id: 'programs' },
    { name: '21st Century Skills', id: 'programs' },
  ];

  return (
    <footer className="bg-[#1C1C1C] text-gray-300 font-inter">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-1">
             <div className="flex items-center gap-2">
                <img src={logo} alt="Nirmaan Logo" className="h-10 w-auto" />
                <span className="font-bold text-2xl text-orange-500"></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our Vision is to ensure that every child in India receives an education that empowers them to build a successful career, lead fulfilling lives, and grow into responsible citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => handleScrollTo(link.id)} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <button onClick={() => handleScrollTo(program.id)} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:hello@nirmaan.education" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                <Mail size={18} />
                <span>hello@nirmaan.education</span>
              </a>
              <a href="tel:+918431234711" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                <Phone size={18} />
                <span>+91 84312 34711</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} Nirmaan. All Rights Reserved.
            </p>
            <div className="text-gray-500 text-sm text-center sm:text-right">
              <p>
                Designed by <a href="https://tejavardhan.online/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-400 hover:text-orange-400 transition-colors">MOGILI TEJ VARDHAN</a>
              </p>
               <div className="flex items-center justify-center sm:justify-end gap-4 mt-2">
                 <a href="mailto:tejmogili2004@gmail.com" aria-label="Email the designer" className="text-gray-500 hover:text-orange-400 transition-colors"><Mail size={18}/></a>
                 <a href="https://www.linkedin.com/in/tej-vardhan-mogili-52b9b5251/" target="_blank" rel="noopener noreferrer" aria-label="Designer's LinkedIn" className="text-gray-500 hover:text-orange-400 transition-colors"><Linkedin size={18}/></a>
                 <a href="https://github.com/Tejvardhan0" target="_blank" rel="noopener noreferrer" aria-label="Designer's GitHub" className="text-gray-500 hover:text-orange-400 transition-colors"><Github size={18}/></a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
