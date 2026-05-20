"use client";

import React, { useState, useEffect } from "react";
import RealisationCard from "./Cards/RealisationCard";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample data for realizations
const realisations = [
  { 
    id: 1,
    imageSrc: "/image/cout1.jpg", 
    title: "Robe de Soirée Élégante", 
    category: "Robe", 
    description: "Robe sur mesure réalisée pour une soirée de gala avec des finitions en dentelle."
  },
  { 
    id: 2,
    imageSrc: "/image/cout2.jpg", 
    title: "Ensemble Traditionnel", 
    category: "Tenue Traditionnelle", 
    description: "Création d'un ensemble traditionnel avec broderies faites à la main."
  },
  { 
    id: 3,
    imageSrc: "/image/cout3.jpg", 
    title: "Costume Homme", 
    category: "Costume", 
    description: "Costume trois pièces sur mesure pour cérémonie de mariage."
  },
  { 
    id: 4,
    imageSrc: "/image/cout4.jpg", 
    title: "Tenue de Cérémonie", 
    category: "Cérémonie", 
    description: "Ensemble créé pour une invitée d'honneur lors d'une cérémonie officielle."
  },
  { 
    id: 5,
    imageSrc: "/image/cout5.jpg", 
    title: "Robe de Mariée", 
    category: "Mariage", 
    description: "Robe de mariée sur mesure avec traîne et voile assortis."
  },
  { 
    id: 6,
    imageSrc: "/image/cout6.jpg", 
    title: "Tenue Professionnelle", 
    category: "Uniforme", 
    description: "Uniforme professionnel créé pour une entreprise locale."
  },
];

export default function Realisations() {
  const [filter, setFilter] = useState<string>("");
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // Get unique categories for filter buttons
  const categories = Array.from(new Set(realisations.map(item => item.category)));
  
  // Filter realizations based on selected category
  const filteredRealisations = filter 
    ? realisations.filter(item => item.category === filter)
    : realisations;

  return (
    <section id="realisations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-PrimaryCol">Nos</span> Réalisations
          </h2>
          <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos créations sur mesure réalisées avec passion et savoir-faire pour nos clients.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center" data-aos="fade-up" data-aos-delay="100">
          <button
            onClick={() => setFilter("")}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              filter === "" ? "bg-PrimaryCol text-white" : "bg-gray-100 text-gray-700 hover:bg-PrimaryCol/10"
            }`}
          >
            Toutes
          </button>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                filter === category ? "bg-PrimaryCol text-white" : "bg-gray-100 text-gray-700 hover:bg-PrimaryCol/10"
              }`}
              data-aos="fade-up"
              data-aos-delay={`${150 + index * 50}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Realizations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRealisations.map((item, index) => (
            <div 
              key={item.id} 
              data-aos="fade-up" 
              data-aos-delay={`${100 + (index % 3) * 100}`}
            >
              <RealisationCard
                imageSrc={item.imageSrc}
                title={item.title}
                category={item.category}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}