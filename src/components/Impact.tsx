import React, { useState, useEffect, useRef } from 'react';
import { Users, BarChart, BookOpen, Clock, Award, TrendingUp } from 'lucide-react';

// A custom hook to animate numbers counting up
const useCountUp = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    if (!isVisible) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic function for a smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easedProgress));

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end); // Ensure it ends on the exact number
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, isVisible, totalFrames, frameRate]);

  return count;
};

// Animated number component
const AnimatedNumber = ({ value, isVisible }: { value: string; isVisible: boolean }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const count = useCountUp(numericValue, 2000, isVisible);

  // Format the number to include commas and handle decimals
  const formattedCount = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: numericValue % 1 !== 0 ? 2 : 0,
  }).format(count);

  return <>{formattedCount}{suffix}</>;
};

const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const impactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
  }, []);

  const impactStats = [
    { number: "560", label: "Students" },
    { number: "26.52Cr", label: "More to go" },
  ];

  // Updated to use your images.
  // IMPORTANT: Make sure SDG1.jpg, SDG2.JPG, and SDG3.jpg are in your 'public' folder.
  const sdgGoals = [
    { title: "Quality Education", imgSrc: '/SDG1.jpg' },
    { title: "Good Health and Well-being", imgSrc: '/SDG2.JPG' },
    { title: "Decent Work and Economic Growth", imgSrc: '/SDG3.jpg' },
  ];

  return (
    <section id="impact" className="py-20 lg:py-32 bg-[#FEF3E9]" ref={impactRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-poppins text-orange-600">
            Our Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side: Transforming stats */}
          <div className="text-center lg:text-left">
            <p className="text-2xl font-poppins text-gray-600 mb-8">Transforming....</p>
            <div className="flex justify-center lg:justify-start gap-12">
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-6xl lg:text-7xl font-bold text-orange-500 font-poppins">
                    <AnimatedNumber value={stat.number} isVisible={isVisible} />
                  </div>
                  <p className="text-xl text-gray-700 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: SDG goals with images */}
          <div className="bg-orange-400 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">Impact on SDGs</h3>
            <div className="flex justify-center gap-6">
              {sdgGoals.map((goal) => (
                <div key={goal.title} className="text-center group">
                  <img 
                    src={goal.imgSrc} 
                    alt={goal.title}
                    className="w-28 h-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;