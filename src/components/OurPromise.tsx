import React from 'react';
// IMPORTANT: Make sure this path is correct for your project
import highlightsCollageImage from '@/assets/Nirmaanwhyus.jpg'; 

const OurProgramHighlights = () => (
  <section
    id="highlights"
    style={{
      maxWidth: '1200px',
      margin: '80px auto',
      padding: '0 24px',
      textAlign: 'center', // This centers the title
    }}
  >
    {/* Title at the top */}
    <h2 style={{
      fontFamily: 'Urbanist, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '4rem',
      color: '#FF4D01',
      marginBottom: '40px', // Creates space between the title and the image
    }}>
      Nirmaan Promise
    </h2>

    {/* Image directly underneath the title */}
    <div>
      <img 
        src={highlightsCollageImage}
        alt="Nirmaan Program Highlights Collage"
        style={{
          width: '100%', // Makes the image responsive to the container width
          height: 'auto',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(228, 147, 61, 0.15)',
        }}
      />
    </div>
  </section>
);

export default OurProgramHighlights;
