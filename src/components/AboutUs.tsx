import React from 'react';
// IMPORTANT: Please ensure these image assets exist in your project's '/src/assets/' directory.
import arrowSvg from '@/assets/Arrow.png';
import quoteUp from '@/assets/quote-up.png';
import displeasedLady from '@/assets/image.jpg'; // This is for the "Problem" section
import happyGirl from '@/assets/happy-girl.jpg';         // This is for the "Future Ready" section
import logo from '@/assets/Logo.jpg'; 

const handleScrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};
const AboutUs = () => (
  <section
    id="about"
    style={{
      background: '#FFF8F1',
      width: '100%',
      overflowX: 'hidden',
      padding: '80px 0',
      fontFamily: 'Poppins, Arial, sans-serif',
    }}
  >
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      
      {/* --- THE PROBLEM SECTION --- */}
      <div style={{ marginBottom: 80 }}>
        <div style={{ textAlign: 'center', width: '100%', marginBottom: 16 }}>
          <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: '#FF4D01' }}>
            - The Problem -
          </span>
        </div>
        <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: 44, color: '#000', lineHeight: 1.2, marginBottom: 24 }}>
          The ultimate goal of education isn’t good marks<br />
          — it’s a good life and a great career 
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontStyle: 'italic', fontSize: 21, color: '#222', marginRight: 16 }}>
            But Unfortunately, Our Education System 
          </span>
          <img src={arrowSvg} alt="Arrow pointing towards issues" style={{ width: 70 }} />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '64px' }}>
          {/* Increased the size of the woman's image */}
          <div style={{ flexShrink: 0 }}>
            <img
              src={displeasedLady}
              alt="Displeased student"
              style={{
                width: 550, // Increased width
                height: 530, // Increased height
                objectFit: 'cover',
                filter: 'grayscale(1)',
                borderRadius: '20px',
                position: 'relative',
                left: '-100px', // Negative value moves it left
                top: '-200px',
              }}
              draggable={false}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', position: 'relative', width: '600px', height :'auto', left: '-150px',right: '550px', top: '-100px' }}>
            <TagBtn>Over Reliance on Rote Learning </TagBtn>
            <TagBtn>Limited focus on holistic development </TagBtn>
            <TagBtn>Theory-based learning </TagBtn>
            <TagBtn>Foundation blocks are weak </TagBtn>
            <TagBtn>Outdated Curriculum </TagBtn>
            <TagBtn>"One size fits all" approach </TagBtn>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', marginTop: 40, maxWidth: 1000, margin: '40px auto 0', fontSize: 21, color: '#4A4A4A', lineHeight: 1.5 ,top: '-230px', position: 'relative' }}>
          Leading to Low Confidence & Self Esteem, Poor Problem-Solving Abilities, poor communication, unhealthy, stressed, stripped of curiosity & Unemployable Graduates 
        </p>
      </div>

     {/* --- DESIGNED SOLUTION BOX (SOLID ORANGE THEME) --- */}
<div style={{
  position: 'absolute', 
  top: '1780px', // You can still adjust this
  left: '50%', 
  transform: 'translateX(-50%)',
  width: '600px', 
  height: '350px',
  // Removed glass effect and added a solid gradient background
  background: 'linear-gradient(180deg, #FFF0E6 0%, #FFF8F1 100%)', 
  borderRadius: '24px', 
  border: '1px solid #FFDDCB',
  boxShadow: '0 8px 32px 0 rgba(230, 209, 196, 0.4)', // Slightly stronger shadow
  padding: '40px', 
  textAlign: 'center'
}}>
  {/* The rest of the content inside the box remains the same */}
  <div style={{ marginBottom: 80 }}>
        <div style={{ textAlign: 'center', width: '100%', marginBottom: 16 }}>
          <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: '#FF4D01' ,position: 'relative', top: '-20px'}}>
            - The Solution -
          </span>
        </div>
        </div>

        <div style={{ position: 'relative', height: '80px', marginBottom: '16px' }}>
  <img
    src={logo}
    alt="Nirmaan Logo"
    style={{
      position: 'absolute',
      left: '150px', // How far from the left
      top: '-90px',  
      height: '60px',
      width: 'auto'
    }}
  />
</div>



<p style={{
  fontSize: '20px', color: '#334155',
  maxWidth: '600px', margin: '0 auto 32px', position: 'relative', left: '20px',top:'-100px'
}}>
  Nirmaan partners with schools to deliver a transformative education beyond traditional academics.
</p>

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '-110px' }}>
  <button
    onClick={handleScrollToContact}
    style={{
      background: 'linear-gradient(90deg, #FF8C00 0%, #FF6B00 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '14px 40px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(255, 107, 0, 0.4)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 107, 0, 0.6)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 0, 0.4)';
    }}
  >
    Contact Us
  </button>
</div>


</div>
      {/* --- FUTURE READY SECTION --- */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '64px' ,height:'auto',width:'auto', position: 'relative',}}>
        <div style={{ maxWidth: 520 }}>
          <img src={quoteUp} alt="Quote icon" style={{ width: 62, height: 54, marginBottom: 14 }} draggable={false}/>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 27, lineHeight: '38px', color: '#000',width:'900px' }}>
            We shape your students into <span style={{ color: '#FA7E2A', fontWeight: 700 }}>well rounded, future-ready leaders</span> with full of confidence, curiosity, emotional intelligence, strong social skills, an analytical mindset, and essential 21st-century competencies. 
          </p>
        </div>
        <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              position: 'absolute', right: -30, bottom: -85, width: 400, height: 400,
              borderRadius: '50%', background: 'radial-gradient(circle, #FFC8B0 0%, #FFF8F1 75%)', zIndex: 1,
            }} />
            {/* Increased the size of the happy girl image */}
            <img
              src={happyGirl}
              alt="Confident and happy student"
              style={{
                width: 700, // Increased width
                height: 'auto', borderRadius: 12, position: 'relative', zIndex: 2,right: '-120px',top:'-',
                
              }}
              draggable={false}
            />
        </div>
      </div>
    </div>
  </section>
);

// This is the interactive Tag Button component with hover effects and animation
const TagBtn = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: 'linear-gradient(160.41deg, #FFF 35%, #FFE6DB 85%)',
      border: '0.7px solid #FFD3BD',
      boxShadow: '0 1.5px 6px #F7D8CB, 0 0.5px 0.5px #FFB091',
      borderRadius: 13,
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 500,
      fontSize: 20,
      color: '#2C2C2C',
      padding: '10px 20px',
      textAlign: 'center',
      minWidth: 220,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(.38,1.66,.77,1.03)', // Smooth transition for hover
      animation: 'floatAnimation 6s ease-in-out infinite', // Subtle floating animation
      display: 'inline-block',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#FA7E2A';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.boxShadow = '0 6px 22px rgba(250, 126, 42, 0.5), 0 1px 2px #FFB091';
      e.currentTarget.style.transform = 'translateY(-5px) scale(1.04)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'linear-gradient(160.41deg, #FFF 35%, #FFE6DB 85%)';
      e.currentTarget.style.color = '#2C2C2C';
      e.currentTarget.style.boxShadow = '0 1.5px 6px #F7D8CB, 0 0.5px 0.5px #FFB091';
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
    }}
  >
    {children}
    {/* Keyframes for the animation need to be defined in a global CSS file or a <style> tag in your main HTML file */}
    <style>{`
      @keyframes floatAnimation {
        0% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
        100% { transform: translateY(0); }
      }
    `}</style>
  </span>
);

export default AboutUs;