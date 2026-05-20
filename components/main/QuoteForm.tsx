"use client"
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';

// Define the form schema with Zod
const QuoteFormSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez saisir une adresse email valide" }),
  telephone: z.string().min(8, { message: "Veuillez saisir un numéro de téléphone valide" }),
  service: z.string().min(1, { message: "Veuillez sélectionner un service" }),
  description: z.string().min(10, { message: "Veuillez décrire votre projet (minimum 10 caractères)" }),
  budget: z.string().optional(),
  delai: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof QuoteFormSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      service: "",
      description: "",
      budget: "",
      delai: "",
    }
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form data:", data);
      
      toast.success("Votre demande de devis a été envoyée avec succès! Nous vous contacterons bientôt.", {
        position: "top-right",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.", {
        position: "top-right",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="text-PrimaryCol">Demande de</span> Devis
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Remplissez ce formulaire pour recevoir un devis personnalisé pour votre projet.
      </p>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              {...form.register("nom")}
              id="nom"
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
              disabled={isSubmitting}
            />
            {form.formState.errors.nom && (
              <p className="mt-1 text-sm text-red-600">{form.formState.errors.nom.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...form.register("email")}
              id="email"
              type="email"
              placeholder="votre@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
              disabled={isSubmitting}
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-sm text-red-600">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Téléphone */}
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              {...form.register("telephone")}
              id="telephone"
              type="tel"
              placeholder="Votre numéro de téléphone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
              disabled={isSubmitting}
            />
            {form.formState.errors.telephone && (
              <p className="mt-1 text-sm text-red-600">{form.formState.errors.telephone.message}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service souhaité <span className="text-red-500">*</span>
            </label>
            <select
              {...form.register("service")}
              id="service"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
              disabled={isSubmitting}
            >
              <option value="">Sélectionnez un service</option>
              <option value="couture-sur-mesure">Couture sur Mesure</option>
              <option value="retouches">Retouches & Ajustements</option>
              <option value="tenues-ceremonielles">Tenues Cérémonielles</option>
              <option value="mode-traditionnelle">Mode Traditionnelle</option>
              <option value="uniformes">Uniformes Professionnels</option>
              <option value="cours-couture">Cours de Couture</option>
              <option value="autre">Autre (précisez dans la description)</option>
            </select>
            {form.formState.errors.service && (
              <p className="mt-1 text-sm text-red-600">{form.formState.errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget estimé
            </label>
            <select
              {...form.register("budget")}
              id="budget"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
              disabled={isSubmitting}
            >
              <option value="">Sélectionnez une fourchette</option>
              <option value="moins-50">Moins de 50€</option>
              <option value="50-100">50€ - 100€</option>
              <option value="100-200">100€ - 200€</option>
              <option value="200-500">200€ - 500€</option>
              <option value="plus-500">Plus de 500€</option>
              <option value="a-discuter">À discuter</option>
            </select>
          </div>

          {/* Délai */}
          <div>
            <label htmlFor="delai" className="block text-sm font-medium text-gray-700 mb-1">
              Délai souhaité
            </label>
            <select
              {...form.register("delai")}
              id="delai"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
              disabled={isSubmitting}
            >
              <option value="">Sélectionnez un délai</option>
              <option value="urgent">Urgent (moins d'une semaine)</option>
              <option value="court">Court terme (1-2 semaines)</option>
              <option value="moyen">Moyen terme (2-4 semaines)</option>
              <option value="long">Long terme (plus d'un mois)</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description de votre projet <span className="text-red-500">*</span>
          </label>
          <textarea
            {...form.register("description")}
            id="description"
            rows={5}
            placeholder="Décrivez votre projet en détail (type de vêtement, style, matériaux souhaités, etc.)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol"
            disabled={isSubmitting}
          ></textarea>
          {form.formState.errors.description && (
            <p className="mt-1 text-sm text-red-600">{form.formState.errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 bg-PrimaryCol text-white font-medium rounded-md shadow-md hover:bg-PrimaryCol/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-PrimaryCol transition-colors ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </div>
          ) : (
            "Demander un devis"
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default QuoteForm;