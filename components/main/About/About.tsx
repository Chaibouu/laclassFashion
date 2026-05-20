'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-PrimaryCol">À Propos de</span> LaClassFashion
          </h2>
          <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-x-8">
          {/* Image avec superposition */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative mb-16 mt-16"> {/* Ajout de marge pour éviter la superposition */}
              <div className="relative h-[550px] w-full rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center"> {/* Hauteur augmentée */}
                <Image
                  src="/Logo/laclassFashionBlack.png"
                  alt="Atelier LaClassFashion"
                  width={800} 
                  height={800} 
                  className="object-contain p-4"
                />
              </div>
              
              {/* Éléments superposés */}
              {/* <div className="absolute -bottom-14 -left-10 bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-4">
                  <div className="bg-PrimaryCol rounded-full p-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500">Expérience</p>
                    <p className="text-2xl font-bold">+2 ans</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-14 -right-10 bg-white p-6 rounded-lg shadow-lg" data-aos="fade-down" data-aos-delay="400"> 
                <div className="flex items-center gap-4">
                  <div className="bg-PrimaryCol rounded-full p-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500">Clients Satisfaits</p>
                    <p className="text-2xl font-bold">250+</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          
          {/* Contenu textuel */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              L'Excellence de la Couture Professionnelle
            </h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Fondée avec passion, <span className="font-semibold text-PrimaryCol">LaClassFashion</span> est une entreprise de couture professionnelle dédiée à l'art du vêtement sur mesure. Notre atelier combine savoir-faire traditionnel et créativité contemporaine pour donner vie à vos envies vestimentaires.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-PrimaryCol/10 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Expertise Artisanale</h4>
                  <p className="text-gray-600">Notre équipe de couturiers qualifiés maîtrise les techniques les plus exigeantes pour des finitions impeccables.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-PrimaryCol/10 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Matériaux Premium</h4>
                  <p className="text-gray-600">Nous sélectionnons uniquement des tissus et fournitures de haute qualité pour garantir durabilité et élégance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-PrimaryCol/10 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Service Personnalisé</h4>
                  <p className="text-gray-600">Chaque client bénéficie d'une attention particulière et d'un accompagnement sur mesure tout au long du processus.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#services" className="bg-PrimaryCol hover:bg-PrimaryCol/90 text-white py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center">
                <span>Découvrir Nos Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link href="#contact" className="bg-white border-2 border-PrimaryCol text-PrimaryCol hover:bg-PrimaryCol/10 py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center">
                <span>Contactez-Nous</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;