"use client"
import React from 'react';
import QuoteForm from './QuoteForm';
import Image from 'next/image';

const Quote = () => {
  return (
    <section id="devis" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-PrimaryCol">Demande de</span> Devis
          </h2>
          <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez un projet spécifique en tête ? Demandez un devis personnalisé et notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image et avantages */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/Logo/laclassFashionBlack.png"
                  alt="LaClassFashion Devis"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Pourquoi nous choisir ?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Devis détaillé gratuit</h4>
                    <p className="text-gray-600 text-sm">Recevez un devis complet sans engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Réponse rapide</h4>
                    <p className="text-gray-600 text-sm">Nous vous répondons sous 24-48h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tarifs transparents</h4>
                    <p className="text-gray-600 text-sm">Prix clairs sans frais cachés</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Accompagnement personnalisé</h4>
                    <p className="text-gray-600 text-sm">Un suivi sur mesure tout au long du projet</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-PrimaryCol" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Satisfaction garantie</h4>
                    <p className="text-gray-600 text-sm">Nous travaillons jusqu'à votre entière satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire de devis */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;