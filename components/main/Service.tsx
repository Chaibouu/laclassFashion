// "use client";
// import Image from "next/image";
// import React from "react";

// const services = [
//   {
//     title: "Conception sous projet agricole",
//     description: "Nous analysons votre terrain et installons un système adapté pour une irrigation optimale.",
//     icon: "/IconeService/project.png",
//   },
//   {
//     title: "Installation de systèmes d'irrigation",
//     description: "Nous analysons votre terrain et installons un système adapté pour une irrigation optimale.",
//     icon: "/IconeService/water-system.png",
//   },
//   {
//     title: "Suivi et entretien des champs",
//     description: "Nous assurons un suivi régulier de vos cultures et l'entretien des jardins ou champs.",
//     icon: "/IconeService/reforestation.png",
//   },
//   {
//     title: "Formation pratique",
//     description: "Nous assurons un suivi régulier de vos cultures et l'entretien des jardins ou champs.",
//     icon: "/IconeService/teaching.png",
//   },
//   {
//     title: "Vente de Pépinières et Semences Certifié",
//     description: "Découvrez notre sélection de plantes, graines et produits d'entretien de qualité.",
//     icon: "/IconeService/seeds.png",
//   },
//   {
//     title: "Conseils personnalisés",
//     description: "Recevez des recommandations adaptées à vos besoins pour vos projets agricoles ou paysagers.",
//     icon: "/IconeService/lightbulb.png",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="max-w-[1100px] mx-auto">
//       <div>
//         <h2 className="text-SecondaryCol text-4xl font-bold text-center mb-6 dark:text-PrimaryCol">Services</h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="relative w-42 md:w-82 h-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden group dark:bg-DarkCol dark:border-slate-600"
//           >
//             {/* Icône et titre visibles par défaut */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-transform duration-500 group-hover:-translate-y-full">
//               {/* <div className="text-4xl text-green-500">{service.icon}</div> */}
//               <div className="">
//                 <Image
//                     src={service.icon}
//                     alt={service.title}
//                     width={600}
//                     height={600}
//                     className="w-26 h-26"
//                 />
//               </div>
//               <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-PrimaryCol">{service.title}</h3>
//             </div>

//             {/* Description masquée au départ */}
//             <div className="absolute inset-0 flex items-center justify-center p-4 text-white bg-BrunFonce translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//               <p className="text-sm">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Définition de l'interface pour le type Service
interface Service {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: JSX.Element;
  color: string;
  delay: number;
}

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesList: Service[] = [
    {
      id: 1,
      title: "Couture sur Mesure",
      description: "Création de vêtements entièrement personnalisés selon vos mesures et préférences, pour une tenue unique qui vous ressemble.",
      detailedDescription: "Notre service de couture sur mesure vous offre une expérience personnalisée où chaque vêtement est créé spécifiquement pour vous. Le processus commence par une consultation approfondie pour comprendre vos préférences, suivie d'une prise de mesures précise. Nos couturiers expérimentés sélectionnent ensuite les tissus et matériaux de haute qualité qui correspondent à votre vision. Après la création d'un patron unique, nous procédons à la coupe et à l'assemblage minutieux de votre vêtement. Des essayages intermédiaires garantissent un ajustement parfait. Le résultat final est une pièce unique qui met en valeur votre silhouette et reflète votre style personnel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 19h11M5 6.2v9.4a4 4 0 0 0 1.4 3L8 20l4-1 4 1 1.6-1.4a4 4 0 0 0 1.4-3V6.2l-5-1.7a2 2 0 0 0-1.2 0l-5 1.7z"></path>
          <path d="M12 9v5"></path>
          <path d="M8 9h8"></path>
        </svg>
      ),
      color: "bg-rose-100 border-rose-400 text-rose-600",
      delay: 100
    },
    {
      id: 2,
      title: "Retouches & Ajustements",
      description: "Service professionnel de retouches pour adapter vos vêtements existants à votre silhouette ou les moderniser.",
      detailedDescription: "Notre service de retouches et ajustements permet de donner une seconde vie à vos vêtements préférés. Que vous ayez besoin d'ajuster un vêtement à votre silhouette, de raccourcir un pantalon, de modifier une robe ou de réparer une pièce endommagée, nos experts en couture s'en chargent avec précision. Nous utilisons des techniques professionnelles pour garantir que les modifications s'intègrent parfaitement au vêtement d'origine, préservant ainsi son style et sa qualité. Ce service est idéal pour adapter les vêtements après une perte ou prise de poids, moderniser des pièces vintage, ou simplement personnaliser vos achats prêt-à-porter.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-5"></path>
          <path d="M9 7V2"></path>
          <path d="M15 7V2"></path>
          <path d="M5 7c0 2.8 2 5 7 5s7-2.2 7-5"></path>
          <path d="M5 17c0 2.8 2 5 7 5s7-2.2 7-5"></path>
          <path d="M5 12c0 2.8 2 5 7 5s7-2.2 7-5"></path>
        </svg>
      ),
      color: "bg-blue-100 border-blue-400 text-blue-600",
      delay: 200
    },
    {
      id: 3,
      title: "Tenues Cérémonielles",
      description: "Confection de tenues élégantes pour mariages, baptêmes et autres événements spéciaux, avec un souci du détail incomparable.",
      detailedDescription: "Nos tenues cérémonielles sont conçues pour faire de vos moments spéciaux des souvenirs inoubliables. Que ce soit pour un mariage, un baptême, une soirée de gala ou tout autre événement important, nous créons des vêtements qui allient élégance et confort. Notre processus commence par une consultation approfondie pour comprendre l'ambiance de l'événement et vos préférences personnelles. Nous vous proposons ensuite des designs exclusifs, sélectionnons des tissus nobles (soie, satin, dentelle, etc.) et réalisons des essayages minutieux pour garantir une tenue parfaitement ajustée. Chaque détail, de la broderie aux finitions, est exécuté avec un soin particulier pour créer une pièce exceptionnelle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path>
          <path d="M15 7A5 5 0 0 0 5 7c0 2.5 2.5 5 5 5s5-2.5 5-5z"></path>
          <path d="M12 1v4"></path>
          <path d="M7.61 6.04l2.03-2.03"></path>
          <path d="M16.39 6.04l-2.03-2.03"></path>
        </svg>
      ),
      color: "bg-purple-100 border-purple-400 text-purple-600",
      delay: 300
    },
    {
      id: 4,
      title: "Mode Traditionnelle",
      description: "Création de vêtements traditionnels qui honorent le patrimoine culturel tout en intégrant des touches contemporaines.",
      detailedDescription: "Notre service de mode traditionnelle célèbre la richesse des patrimoines culturels à travers des vêtements authentiques et raffinés. Nous nous spécialisons dans la création de tenues qui respectent les codes et techniques ancestrales tout en les adaptant aux exigences contemporaines de confort et de style. Nos artisans maîtrisent les méthodes traditionnelles de couture, broderie et ornementation propres à différentes cultures. Que vous recherchiez une tenue pour une célébration culturelle, un événement familial important ou simplement pour honorer vos racines, nous créons des pièces qui racontent une histoire tout en vous permettant d'exprimer votre identité personnelle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6v14c0 1 1 2 2 2h14c1 0 2-1 2-2V6c0-1-1-2-2-2h-2"></path>
          <path d="M14 4V2c0-1-1-2-2-2h-4C7 0 6 1 6 2v2"></path>
          <path d="M10 14v-4"></path>
          <path d="M3 10h18"></path>
        </svg>
      ),
      color: "bg-amber-100 border-amber-400 text-amber-600",
      delay: 400
    },
    {
      id: 5,
      title: "Uniformes Professionnels",
      description: "Conception et production d'uniformes pour entreprises, avec possibilité de personnalisation et broderie de logo.",
      detailedDescription: "Notre service d'uniformes professionnels offre aux entreprises et organisations la possibilité de créer une identité visuelle cohérente à travers des tenues de travail élégantes et fonctionnelles. Nous travaillons en étroite collaboration avec vous pour comprendre votre image de marque, les exigences pratiques du métier et les préférences de vos employés. Nos uniformes sont conçus avec des matériaux durables et confortables, adaptés à un usage quotidien intensif. Nous proposons également des options de personnalisation comme la broderie de logos, l'impression de noms ou l'ajout d'éléments distinctifs. Notre service inclut la prise de mesures pour chaque employé, garantissant ainsi un ajustement parfait pour tous.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
          <path d="M10 20V10a2 2 0 1 1 4 0v10"></path>
        </svg>
      ),
      color: "bg-emerald-100 border-emerald-400 text-emerald-600",
      delay: 500
    },
    {
      id: 6,
      title: "Cours de Couture",
      description: "Ateliers et formations pour tous niveaux, vous permettant d'acquérir des compétences en couture et de développer votre créativité.",
      detailedDescription: "Nos cours de couture sont conçus pour tous les niveaux, du débutant complet au couturier expérimenté souhaitant perfectionner ses techniques. Dans une ambiance conviviale et créative, nos instructeurs qualifiés vous guident pas à pas dans l'apprentissage de la couture. Nos ateliers couvrent un large éventail de compétences : bases de la couture à la machine et à la main, lecture de patrons, techniques de coupe, finitions professionnelles, et bien plus encore. Nous proposons des formats variés : cours hebdomadaires, ateliers thématiques, stages intensifs ou cours particuliers. Tous les matériaux et équipements sont fournis, vous permettant de vous concentrer pleinement sur votre apprentissage et votre créativité.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 18V7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v11"></path>
          <path d="M5 16H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1"></path>
          <path d="M12 6v7"></path>
          <path d="M9 9h6"></path>
        </svg>
      ),
      color: "bg-orange-100 border-orange-400 text-orange-600",
      delay: 600
    }
  ];

  // Assurez-vous de compléter les descriptions détaillées pour tous les services

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-PrimaryCol">Nos</span> Services
          </h2>
          <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de couture professionnelle, conçus pour répondre à tous vos besoins vestimentaires avec élégance et précision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-lg p-6 border-l-4 ${service.color} shadow-md transition-transform hover:scale-105`}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              <button 
                onClick={() => openModal(service)}
                className="mt-4 text-PrimaryCol hover:text-PrimaryCol/80 font-medium flex items-center"
              >
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Vous avez un projet spécifique qui ne figure pas dans notre liste de services ? Contactez-nous pour discuter de vos besoins particuliers.
          </p>
          <button className="bg-PrimaryCol hover:bg-PrimaryCol/90 text-white py-3 px-8 rounded-lg transition duration-300 shadow-md flex items-center mx-auto">
            <span>Demander un Devis Personnalisé</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal pour les détails du service */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full ${selectedService.color.replace('border-', 'bg-')} mr-4`}>
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-PrimaryCol">Description</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedService.detailedDescription}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-PrimaryCol">Processus</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Consultation initiale et prise de mesures</li>
                  <li>Sélection des tissus et matériaux</li>
                  <li>Création du patron personnalisé</li>
                  <li>Coupe et assemblage</li>
                  <li>Essayages et ajustements</li>
                  <li>Finitions et livraison</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-PrimaryCol">Tarifs</h4>
                <p className="text-gray-700">
                  Les tarifs varient selon la complexité du projet, les matériaux utilisés et le temps nécessaire à la réalisation. Contactez-nous pour obtenir un devis personnalisé.
                </p>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={closeModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg mr-2"
                >
                  Fermer
                </button>
                <button className="bg-PrimaryCol hover:bg-PrimaryCol/90 text-white py-2 px-4 rounded-lg">
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;