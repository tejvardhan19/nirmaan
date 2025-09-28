import React from 'react';
import { Users, BookOpen, Brain } from 'lucide-react';
import HoverSkillCard from './HoverSkillCard';

// Import image assets correctly
import commImage from '@/assets/comm.jpg';
import lifeImage from '@/assets/life.jpg';
import skillsImage from '@/assets/skills.jpg';

const programData = [
  {
    title: "Communication Skills",
    description: "Strengthening solid foundations in communication and language skills.",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Public Speaking", "Formal and informal Communication", "Active listening",
      "Critical thinking", "Debates", "Essay writing",
      "Non-verbal Communication", "Everyday Communication", "Phonics"
    ],
    image: commImage,
  },
  {
    title: "Life Skills",
    description: "Equipping students with practical skills for everyday success.",
    icon: <BookOpen className="w-8 h-8" />,
    features: [
      "Entrepreneurship", "Financial Literacy", "Time Management", "Teamwork & Leadership",
      "Public Speaking", "Problem Solving & Decision Making", "Social-Emotional learning",
      "Creativity", "Civic Sense", "Empathy", "Health & Hygiene"
    ],
    image: lifeImage,
  },
  {
    title: "21st Century Skills",
    description: "AI/ML, Robotics, & STEM coding for future readiness.",
    icon: <Brain className="w-8 h-8" />,
    features: [
      "AI Education for Academics, creativity and productivity", "AI for Creative Writing & Learning",
      "Robotics", "STEM Education", "Block based coding", "Digital Literacy & Awareness",
      "Cross-Skill 21st-Century Activities"
    ],
    image: skillsImage,
  },
];


const Programs = () => (
  <section id="programs" className="py-20 lg:py-32 bg-[#FFF8F1] scroll-mt-16">
    <div className="max-w-[1400px] mx-auto px-4 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-poppins text-[#FF4D01] tracking-tight">
        Our Core Programs
      </h2>
      <p className="text-xl font-urbanist font-bold text-[#FF4D01] mb-12">
        We teach what students need most but textbooks fail to teach.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {programData.map(({ image, ...props }) => (
          <HoverSkillCard key={props.title} image={image} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
