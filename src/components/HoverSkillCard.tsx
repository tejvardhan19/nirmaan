import React from 'react';

interface HoverSkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string; // This should be the imported image source
}

const HoverSkillCard: React.FC<HoverSkillCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  image 
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden max-w-sm mx-auto">
      {/* Image Container */}
      <div className="h-48 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 text-orange-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-poppins">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6 font-inter text-sm">
          {description}
        </p>
        
        {/* Features List */}
        <div className="space-y-2">
          <h4 className="font-semibold text-orange-600 text-sm mb-3">Key Areas:</h4>
          <div className="max-h-32 overflow-y-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2 mb-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-xs text-gray-600 font-inter leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default HoverSkillCard;
