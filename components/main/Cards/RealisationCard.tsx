import React from "react";
import Image from "next/image";

interface RealisationCardProps {
  imageSrc: string;
  title: string;
  category: string;
  description: string;
}

const RealisationCard: React.FC<RealisationCardProps> = ({ 
  imageSrc, 
  title, 
  category, 
  description 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-[350px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-PrimaryCol text-white text-sm px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-PrimaryCol font-medium">LaClass Fashion</span>
          <button className="text-gray-700 hover:text-PrimaryCol flex items-center transition-colors">
            <span>Voir détails</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealisationCard;