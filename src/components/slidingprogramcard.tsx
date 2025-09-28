import React, { useState, useEffect } from 'react';

const SlidingProgramCard = ({ images, title, description, features, icon }) => {
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    if (hovered) {
      intervalId = setInterval(() => {
        setSlideIndex(i => (i + 1) % images.length);
      }, 1500);
    } else {
      setSlideIndex(0);
    }
    return () => clearInterval(intervalId);
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group w-full max-w-xs rounded-[28px] shadow-xl p-0 overflow-hidden transition-transform duration-300"
      style={{
        background: 'linear-gradient(to bottom, #fff 50%, #FF7928 140%)',
        borderRadius: '28px',
        minHeight: 528,
        cursor: 'pointer',
      }}
    >
      <div className="relative h-[350px] overflow-hidden rounded-t-[28px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${title} image ${idx + 1}`}
              className="w-[340px] h-[350px] object-cover rounded-tl-[28px] rounded-tr-[28px] shadow-lg grayscale"
              draggable={false}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col h-full justify-between relative p-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 rounded-xl bg-white/80 flex items-center justify-center shadow-md text-[#FF4D01]">
            {icon}
          </div>
          <h3 className="text-2xl font-bold font-poppins mb-2 text-[#222] leading-none text-center">{title}</h3>
          <p className="text-lg font-urbanist mb-4 text-center text-[#222]">{description}</p>
        </div>
        <ul className="my-4 flex-1">
          {features.map(feature => (
            <li key={feature} className="flex items-start mb-1">
              <span className="mt-2 w-2 h-2 bg-[#FF4D01] rounded-full flex-shrink-0 mr-2" />
              <span className="font-urbanist text-base text-black">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none rounded-b-[28px]"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FF7928 100%)',
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      />
    </div>
  );
};

export default SlidingProgramCard;
