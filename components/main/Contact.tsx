// "use client"
// import React, { useState } from 'react';
// import { toast, Toaster } from 'sonner';
// import Link from 'next/link';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       toast.success('Votre message a été envoyé avec succès!', {
//         position: 'top-right',
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       toast.error('Une erreur est survenue. Veuillez réessayer.', {
//         position: 'top-right',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="text-PrimaryCol">Contactez</span> Nous
//           </h2>
//           <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Nous sommes à votre écoute pour toute question ou demande d'information. N'hésitez pas à nous contacter.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="lg:col-span-1" data-aos="fade-right">
//             <div className="bg-white p-6 rounded-lg shadow-md h-full">
//               <h3 className="text-2xl font-bold mb-6 text-gray-800">Nos Coordonnées</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700">Adresse</h4>
//                     <p className="text-gray-600 mt-1">Niger, Niamey</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700">Téléphone</h4>
//                     <p className="text-gray-600 mt-1">+227 99 00 00 01</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700">Email</h4>
//                     <p className="text-gray-600 mt-1">contact@laclassfashion.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700">Horaires d'ouverture</h4>
//                     <p className="text-gray-600 mt-1">Lundi - Vendredi: 9h - 18h</p>
//                     <p className="text-gray-600">Samedi: 10h - 16h</p>
//                     <p className="text-gray-600">Dimanche: Fermé</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8">
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Suivez-nous</h4>
//                 <div className="flex space-x-4">
//                   <a href="#" className="bg-PrimaryCol/10 p-3 rounded-full text-PrimaryCol hover:bg-PrimaryCol hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-PrimaryCol/10 p-3 rounded-full text-PrimaryCol hover:bg-PrimaryCol hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                       <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-PrimaryCol/10 p-3 rounded-full text-PrimaryCol hover:bg-PrimaryCol hover:text-white transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="lg:col-span-2" data-aos="fade-left">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h3>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Nom complet <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
//                       placeholder="Votre nom"
//                       disabled={isSubmitting}
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
//                       placeholder="votre@email.com"
//                       disabled={isSubmitting}
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                     Sujet <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
//                     placeholder="Sujet de votre message"
//                     disabled={isSubmitting}
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
//                     placeholder="Votre message"
//                     disabled={isSubmitting}
//                   ></textarea>
//                 </div>
                
//                 <div className="flex items-center">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`px-6 py-3 bg-PrimaryCol text-white rounded-md shadow-md hover:bg-PrimaryCol/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-PrimaryCol transition-colors ${
//                       isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center">
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Envoi en cours...
//                       </div>
//                     ) : (
//                       "Envoyer le message"
//                     )}
//                   </button>
                  
//                   <Link href="/devis" className="ml-4 text-PrimaryCol hover:text-PrimaryCol/80 font-medium">
//                     Demander un devis
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Google Maps */}
//         <div className="mt-12 rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85836507928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1621536859112!5m2!1sfr!2sfr" 
//             width="100%" 
//             height="450" 
//             style={{ border: 0 }} 
//             allowFullScreen 
//             loading="lazy"
//             title="LaClass Fashion Location"
//           ></iframe>
//         </div>
//       </div>
//       <Toaster />
//     </section>
//   );
// };

// export default Contact;
"use client"
import React from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-PrimaryCol">Contactez</span> Nous
          </h2>
          <div className="w-24 h-1 bg-PrimaryCol mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour toute question ou demande d'information. N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Nos Coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Adresse</h4>
                    <p className="text-gray-600 mt-1">Niger, Niamey</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Téléphone</h4>
                    <p className="text-gray-600 mt-1">+227 99 00 00 01</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Email</h4>
                    <p className="text-gray-600 mt-1">contact@laclassfashion.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-PrimaryCol/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-PrimaryCol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Horaires d'ouverture</h4>
                    <p className="text-gray-600 mt-1">Lundi - Vendredi: 9h - 18h</p>
                    <p className="text-gray-600">Samedi: 10h - 16h</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-PrimaryCol/10 p-3 rounded-full text-PrimaryCol hover:bg-PrimaryCol hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-PrimaryCol/10 p-3 rounded-full text-PrimaryCol hover:bg-PrimaryCol hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-PrimaryCol/10 p-3 rounded-full text-PrimaryCol hover:bg-PrimaryCol hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85836507928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1621536859112!5m2!1sfr!2sfr" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="LaClass Fashion Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;