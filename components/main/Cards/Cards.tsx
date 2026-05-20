import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  name: string;
  price: string;
  rating: number; // Note sur 5 étoiles
}

const Cards: React.FC<CardProps> = ({ imageSrc, name, price, rating }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white max-w-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-DarkCol h-[300px]">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover h-full w-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="relative bg-BrunFonce min-h-[100px] flex flex-col py-4 px-5 rounded-b-lg">
        <div className="flex justify-between items-center mb-3">
          {/* Nom */}
          <h3 className="text-xl font-semibold text-slate-700">{name}</h3>
          {/* Prix */}
          <p className="text-slate-700 text-lg font-medium">{price}</p>
        </div>
        
        {/* Notation - moved to bottom */}
        <div className="bg-PrimaryCol rounded-full px-2 absolute -top-10 right-2 flex mt-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-yellow-400 text-xl ${
                index < rating ? "opacity-100" : "opacity-30"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
