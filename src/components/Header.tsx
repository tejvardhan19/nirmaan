import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

// Helper to render "AI" in orange inside any text string
const highlightAI = (text: string) => {
  const regex = /(AI)/gi;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, idx) =>
        part.toUpperCase() === 'AI' ? (
          <span key={idx} className="text-orange-500 font-semibold">{part}</span>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </>
  );
};

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [isGlassy, setIsGlassy] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsGlassy(window.location.pathname !== '/' && window.location.pathname !== '/home');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        'home',
        'about',
        'programs',
        'ai-promise',
        'our-promise',
        'components',
        'impact',
        'blog',
        'contact',
      ];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'AI ', href: '#ai-promise', id: 'ai-promise' },
    { name: 'Our Promise', href: '#our-promise', id: 'our-promise' },
    { name: 'Components', href: '#components', id: 'components' },
    { name: 'Impact', href: '#impact', id: 'impact' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const dropdownOptions = [
    {
      label: 'As School',
      action: () => {
        setDropdownOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'As Educator',
      href: '/hiring',
    },
    {
      label: 'As Channel Partner',
      href: '/hiring',
    },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: isGlassy
            ? 'rgba(255,255,255,0.15)'
            : isScrolled
            ? 'rgba(255,255,255,0.9)'
            : '#fff',
          borderBottom: isGlassy ? '1px solid rgba(255,165,0,0.3)' : '1px solid #f3f4f6',
          boxShadow: isGlassy ? '0 8px 32px 0 rgba(255,165,0,0.3)' : '0 2px 12px rgba(0,0,0,0.04)',
          backdropFilter: isGlassy ? 'blur(18px)' : isScrolled ? 'blur(6px)' : 'none',
          WebkitBackdropFilter: isGlassy ? 'blur(18px)' : isScrolled ? 'blur(6px)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo + Name - No space, bigger font */}
            <div className="flex items-center group cursor-pointer">
              <img
                src="/src/assets/nirmaan-logo.png"
                alt="Nirmaan Logo"
                className="h-10 w-10"
                style={{ verticalAlign: 'middle' }}
              />
              <span
                className="font-bold text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
                style={{ verticalAlign: 'middle', marginLeft: '-3px', fontSize: '1.5rem' }}
              >
                irmaan
              </span>
            </div>

            {/* Navigation (only one box at a time) */}
            <nav className="hidden lg:flex items-center space-x-1 relative">
              {navItems.map(item => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-lg font-medium transition-all duration-100 relative overflow-hidden group
                      ${isActive || isHovered
                        ? 'text-black'
                        : item.id === 'ai-promise'
                        ? 'text-orange-500'
                        : 'text-black'
                      }
                    `}
                    onMouseEnter={() => setHoveredSection(item.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <span className="relative z-10">{highlightAI(item.name)}</span>
                    {(isActive || isHovered) && (
                      <div
                        className="absolute inset-0 bg-orange-100/95 transition-opacity duration-100 rounded-lg z-0"
                        style={{ pointerEvents: 'none' }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Connect Dropdown with light background and better fitting "As School" box */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-orange-100 text-black border border-orange-300 px-6 py-2 rounded-full font-medium transition-all duration-100 hover:bg-orange-200 flex items-center gap-2 backdrop-blur-sm"
              >
                Connect
                <ChevronDown
                  className={`transition-transform duration-100 ${dropdownOpen ? 'rotate-180' : ''}`}
                  size={18}
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-2xl shadow-xl z-40 backdrop-blur-sm animate-dropdown-fade-in"
                  style={{
                    minHeight: '112px',
                    background: isGlassy ? 'rgba(255,255,255,0.15)' : isScrolled ? 'rgba(255,255,255,0.9)' : '#fff',
                    border: '1px solid #fb923c',
                  }}
                >
                  {dropdownOptions.map((opt, idx) =>
                    opt.action ? (
                      <button
                        key={opt.label}
                        onClick={opt.action}
                        onMouseEnter={() => setHoveredDropdown(idx)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                        className="block font-semibold text-base transition border-b border-orange-200 last:border-none relative"
                        style={{
                          width: 'calc(100% - 18px)',
                          margin: opt.label === 'As School' ? '4px auto 4px auto' : '8px auto',
                          padding: opt.label === 'As School' ? '8px 0' : '12px 0',
                          borderRadius: opt.label === 'As School' ? '18px' : '20px',
                          textAlign: 'center',
                          background: hoveredDropdown === idx ? 'rgba(255,184,90,0.93)' : 'rgba(24,24,27,.92)',
                          color: hoveredDropdown === idx ? '#111' : '#fff',
                        }}
                      >
                        <span className="relative z-10">{highlightAI(opt.label)}</span>
                        {hoveredDropdown === idx && (
                          <div
                            className="absolute inset-0 bg-orange-100/90 transition-opacity duration-100 rounded-2xl z-0"
                            style={{ pointerEvents: 'none' }}
                          />
                        )}
                      </button>
                    ) : (
                      <a
                        key={opt.label}
                        href={opt.href}
                        onMouseEnter={() => setHoveredDropdown(idx)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                        className="block font-semibold text-base transition border-b border-orange-200 last:border-none relative"
                        style={{
                          width: 'calc(100% - 18px)',
                          margin: '8px auto',
                          padding: '12px 0',
                          borderRadius: '20px',
                          textAlign: 'center',
                          background: hoveredDropdown === idx ? 'rgba(255,184,90,0.93)' : 'rgba(24,24,27,.92)',
                          color: hoveredDropdown === idx ? '#111' : '#fff',
                        }}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="relative z-10">{highlightAI(opt.label)}</span>
                        {hoveredDropdown === idx && (
                          <div
                            className="absolute inset-0 bg-orange-100/90 transition-opacity duration-100 rounded-2xl z-0"
                            style={{ pointerEvents: 'none' }}
                          />
                        )}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden hover:bg-orange-100 p-2 rounded-lg transition-colors duration-100">
              <Menu className="h-6 w-6 text-black hover:text-orange-500 transition-colors duration-100" />
            </button>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes dropdownFadeIn {
                0% { opacity: 0; transform: scale(0.85); }
                100% { opacity: 1; transform: scale(1); }
              }
              .animate-dropdown-fade-in {
                animation: dropdownFadeIn 0.12s cubic-bezier(0.57,0.21,0.69,1.25) forwards;
              }
            `,
          }}
        />
      </header>

      
    </>
  );
};

export default Header;
