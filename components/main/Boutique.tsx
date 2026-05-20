"use client";

import React, { useState, useEffect } from "react";
import Cards from "./Cards/Cards";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  { imageSrc: "/image/cout1.jpg", name: "Palmier", price: "3000 F", rating: 4, category: "Palmier" },
  { imageSrc: "/image/cout2.jpg", name: "Femme", price: "2000 F", rating: 5, category: "Herbacée" },
  { imageSrc: "/image/cout3.jpg", name: "Conifère", price: "1500 F", rating: 3, category: "Conifère" },
  { imageSrc: "/image/cout4.jpg", name: "Femme", price: "1000 F", rating: 4, category: "Arbuste" },
  { imageSrc: "/image/cout5.jpg", name: "Femme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout6.jpg", name: "Homme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout7.jpg", name: "Palmier", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout8.jpg", name: "Homme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout9.jpg", name: "Palmier", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout10.jpg", name: "Homme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout11.jpg", name: "Femme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout12.jpg", name: "Homme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout13.jpg", name: "Palmier", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout14.jpg", name: "Palmier", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout15.jpg", name: "Homme", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout16.jpg", name: "Palmier", price: "2500 F", rating: 5, category: "Palmier" },
  { imageSrc: "/image/cout17.jpg", name: "Femme", price: "2500 F", rating: 5, category: "Palmier" },
];

export default function Boutique() {
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // Filtrer les items en fonction de la catégorie et de la barre de recherche
  const filteredItems = items.filter((item) => {
    const matchesCategory = filter ? item.category === filter : true;
    const matchesSearch = search
      ? item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.price.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  // Liste des catégories uniques
  const categories = Array.from(new Set(items.map((item) => item.category)));

  return (
    <section id="boutique" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-PrimaryCol">Notre</span> Boutique
          </h2>
          <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection de vêtements sur mesure, créés avec passion et savoir-faire pour vous offrir style et élégance.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
          <input
            type="text"
            placeholder="Rechercher par nom, catégorie ou prix"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-PrimaryCol shadow-sm"
          />
        </div>

        {/* Section des boutons de filtre */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => setFilter("")}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              filter === "" ? "bg-PrimaryCol text-white" : "bg-gray-100 text-gray-700 hover:bg-PrimaryCol/10"
            }`}
          >
            Tous
          </button>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                filter === category ? "bg-PrimaryCol text-white" : "bg-gray-100 text-gray-700 hover:bg-PrimaryCol/10"
              }`}
              data-aos="fade-up"
              data-aos-delay={`${250 + index * 50}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des cartes filtrées */}
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div 
                  key={index} 
                  data-aos="fade-up" 
                  data-aos-delay={`${100 + index % 4 * 100}`}
                  className="transform transition-transform hover:scale-105"
                >
                  <Cards
                    imageSrc={item.imageSrc}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                  />
                </div>
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-500 py-12" data-aos="fade-up">
                Aucun résultat trouvé.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
