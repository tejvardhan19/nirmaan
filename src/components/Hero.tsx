import React, { useEffect, useRef } from 'react';
import heroImage from '@/assets/hero-image.jpg';
import vector1 from '@/assets/Vector-1.jpg';
import vector2 from '@/assets/Vector-2.jpg';
import quoteUp from '@/assets/quote-up.png';

const Hero = () => {
  const plusAiRef = useRef(null);

  useEffect(() => {
    let frameId;
    let direction = 1;
    let position = 0;
    const maxMovement = 15; // pixels
    const speed = 0.5;

    const animate = () => {
      if (plusAiRef.current) {
        position += direction * speed;
        if (position > maxMovement || position < -maxMovement) {
          direction *= -1;
        }
        plusAiRef.current.style.transform = `translateY(${position}px)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        background: '#FFF8F1',
        minHeight: '900px',
        width: '100vw',
        overflowX: 'hidden', // Prevent horizontal scrollbar
        fontFamily: 'Urbanist, sans-serif',
      }}
    >
      {/* Radial orange behind image */}
      <div
        style={{
          position: 'absolute',
          left: 'calc(50% - 240px)',
          top: '220px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffc8b0 0%, #fff8f1 75%)',
          zIndex: 1,
        }}
      />

      {/* Vector 2 PNG */}
      <img
        src={vector2}
        alt=""
        style={{
          position: 'absolute',
          width: '101px',
          height: '79px',
          left: '95px',
          top: '-390px',
          transform: 'rotate(180deg)',
          zIndex: 30,
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Vector 1 PNG */}
      <img
        src={vector1}
        alt=""
        style={{
          position: 'absolute',
          width: '33px',
          height: '40px',
          left: '1310px',
          top: '-183px',
          border: '8px solid #FEB273',
          zIndex: 30,
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Headline */}
      <h1
        style={{
          position: 'absolute',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '950px',
          fontWeight: 600,
          fontSize: '64px',
          lineHeight: '77px',
          textAlign: 'center',
          color: '#000',
          letterSpacing: '-0.015em',
          zIndex: 10,
        }}
      >
        Redefining Indian Education through{' '}
        <span style={{ color: '#FF6B00' }}>Real Learning</span>
      </h1>

      {/* + Sign and AI container with animation */}
      <div
        ref={plusAiRef}
        style={{
          position: 'absolute',
          left: '1100px',
          top: '150px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 15,
          cursor: 'default',
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: '80px',
            color: '#000',
            userSelect: 'none',
          }}
        >
          +
        </span>
        <span
          style={{
            fontFamily: '"Figma Hand", cursive',
            fontWeight: 700,
            fontSize: '80px',
            color: '#BF3A01',
            textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            userSelect: 'none',
          }}
        >
          AI
        </span>
      </div>

      {/* Hero Image (Increased size 370px width) */}
      <img
        src={heroImage}
        alt="Learner"
        style={{
          position: 'absolute',
          left: 'calc(50% - 185px)',
          bottom: 'auto',
          top: '250px',
          width: '440px',
          height: 'auto',
          zIndex: 18,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Left Quote PNG */}
      <img
        src={quoteUp}
        alt=""
        style={{
          position: 'absolute',
          width: '74px',
          height: '64px',
          left: '80px',
          top: '270px',
          zIndex: 20,
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Left Quote Text */}
      <div
        style={{
          position: 'absolute',
          left: '90px',
          top: '340px',
          width: '370px',
          fontWeight: 500,
          fontSize: '24px',
          color: '#344054',
          letterSpacing: '-0.015em',
          zIndex: 20,
        }}
      >
        <div>
          We teach what students need most
          <br />
          but textbooks fail to teach
        </div>
      </div>

      {/* Right Quote PNG */}
      <img
        src={quoteUp}
        alt=""
        style={{
          position: 'absolute',
          width: '74px',
          height: '64px',
          left: '1010px',
          top: '430px',
          zIndex: 20,
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Right Quote Text */}
      <div
        style={{
          position: 'absolute',
          right: '90px',
          top: '500px',
          width: '370px',
          fontWeight: 500,
          fontSize: '24px',
          color: '#344054',
          textAlign: 'right',
          letterSpacing: '-0.015em',
          zIndex: 20,
        }}
      >
        <div>
          An AI that truly understands your student and teaches in the way
          <br />
          they understand and learn best.
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
