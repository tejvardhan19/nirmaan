import React from 'react';
import {
  FileText,
  TrendingUp,
  UserCheck,
  GraduationCap,
} from 'lucide-react';

// Import video files directly to ensure correct pathing
import video1 from '@/assets/v1.mp4';
import video2 from '@/assets/v2.mp4';
import video3 from '@/assets/v3.mp4';
// IMPORTANT: Add the path to your wavy background image
import wavyBg from '@/assets/wavy-background.jpg';

// --- Reusable Call to Action Component ---
const CallToAction = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      style={{
        position: 'relative',
        padding: '80px 40px',
        marginTop: '80px',
        borderRadius: '24px',
        overflow: 'hidden',
        textAlign: 'center',
        background: `url(${wavyBg}) center center / cover no-repeat`,
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(23, 23, 23, 0.7)', // Dark overlay for text readability
        zIndex: 1,
      }} />
      
      <div style={{ position: 'relative', zIndex: 2, fontFamily: 'Urbanist, sans-serif' }}>
        <div style={{
          display: 'inline-block',
          background: '#FC6B2D',
          color: '#FFFFFF',
          padding: '12px 28px',
          borderRadius: '999px',
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '24px',
        }}>
          Best Part
        </div>

        <h3 style={{
          color: '#FF8A43',
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '32px',
        }}>
          All the learning you need — for less than a cost of pizza.
        </h3>
        
        <button
          onClick={handleScrollToContact}
          style={{
            background: '#FCD7C8',
            border: '1px solid #FF4D01',
            borderRadius: '999px',
            color: '#434242',
            padding: '16px 32px',
            fontSize: '1.5rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
        >
          Connect with us to Know more
        </button>
      </div>
    </div>
  );
};


const AIPromise: React.FC = () => {

  const features = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'We measure what matters',
      videoSrc: video2,
      details: [
        { subtitle: 'Behavior-based Student Report Cards', point: 'AI builds a dynamic profile of each learner based on multiple data points.' },
        { subtitle: 'We measure beyond academic scores', point: 'like IE, EQ, Curiosity, cognitive levels, Communication and more to reflect true potential of student.' }
      ]
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'We teach what lasts',
      videoSrc: video3,
      details: [
        { subtitle: 'Measurable Student Progress', point: 'We can regularly check the progress of student and effectiveness of the program using AI.' },
        { subtitle: 'Long-term Skill Mastery', point: 'Our approach ensures that learning is impactful, enduring, and prepares students for the future.' }
      ]
    },
    {
      icon: <UserCheck className="w-7 h-7" />,
      title: 'Personalize learning journey',
      videoSrc: video1,
      details: [
        { subtitle: 'Customized Learning Paths', point: 'We can measure and customize the learning path for each student based on their individual needs and learning style.' },
        { subtitle: 'Adaptive AI Technology', point: 'Our personalized AI adapts and evolves with your child’s learning curve for optimal growth.' }
      ]
    },
  ];

  return (
    <section id="ai-promise" className="py-20 lg:py-32 bg-[#FFF8F1]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-poppins bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Nirmaan's AI Promise
            </h2>
          </div>

          {/* Alternating Video Timeline */}
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full" />
            
            <div className="space-y-16">
              {features.map((feature, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  
                  {/* The dot on the line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-[#FFF8F1] rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-orange-200" />
                  </div>

                  {/* Even items (0, 2): Text on Left, Video on Right */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:text-right md:pr-14">
                        <div className="inline-flex items-center gap-3 bg-white border border-gray-200 text-orange-600 font-semibold font-poppins px-4 py-2 rounded-lg mb-4 shadow-sm">
                          {feature.icon}
                          <span>{feature.title}</span>
                        </div>
                        <div className="space-y-4">
                        {feature.details.map((detail, i) => (
                          <div key={i}>
                            <h3 className="font-bold font-poppins text-xl text-gray-800 mb-1">{detail.subtitle}</h3>
                            <p className="text-gray-600 font-inter">{detail.point}</p>
                          </div>
                        ))}
                        </div>
                      </div>
                      <div className="w-full">
                        <video src={feature.videoSrc} autoPlay loop muted playsInline className="w-full rounded-2xl shadow-xl border-4 border-white" />
                      </div>
                    </>
                  ) : (
                  /* Odd items (1): Video on Left, Text on Right */
                    <>
                      <div className="w-full md:order-first order-last">
                        <video src={feature.videoSrc} autoPlay loop muted playsInline className="w-full rounded-2xl shadow-xl border-4 border-white" />
                      </div>
                      <div className="md:pl-14">
                        <div className="inline-flex items-center gap-3 bg-white border border-gray-200 text-orange-600 font-semibold font-poppins px-4 py-2 rounded-lg mb-4 shadow-sm">
                          {feature.icon}
                          <span>{feature.title}</span>
                        </div>
                        <div className="space-y-4">
                        {feature.details.map((detail, i) => (
                          <div key={i}>
                            <h3 className="font-bold font-poppins text-xl text-gray-800 mb-1">{detail.subtitle}</h3>
                            <p className="text-gray-600 font-inter">{detail.point}</p>
                          </div>
                        ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Concluding Headline */}
          <div className="text-center mt-24">
             <h2 className="text-4xl lg:text-5xl font-bold text-[#FF4D01] font-urbanist max-w-5xl mx-auto">
              Personalized AI that adapts and evolves with your child’s learning curve.
            </h2>
          </div>
          
          {/* --- NEW CALL TO ACTION SECTION --- */}
          <CallToAction />

        </div>
      </div>
    </section>
  );
};

export default AIPromise;

