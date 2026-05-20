"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendEmailSchema } from "@/schemas";
import * as z from "zod";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof SendEmailSchema>>({
    resolver: zodResolver(SendEmailSchema),
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SendEmailSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await sendEmail(values);
      
      if (response.success) {
        toast.success(response.success);
        reset(); // Clear form after successful submission
      } else if (response.error) {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            {...register("nom")}
            className={`w-full px-4 py-2 border ${
              errors.nom ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol`}
            placeholder="Votre nom"
            disabled={isSubmitting}
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-500">{errors.nom.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol`}
            placeholder="votre@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
          Sujet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="sujet"
          {...register("sujet")}
          className={`w-full px-4 py-2 border ${
            errors.sujet ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol`}
          placeholder="Sujet de votre message"
          disabled={isSubmitting}
        />
        {errors.sujet && (
          <p className="mt-1 text-sm text-red-500">{errors.sujet.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={`w-full px-4 py-2 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-PrimaryCol`}
          placeholder="Votre message"
          disabled={isSubmitting}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      
      <div className="flex items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 bg-PrimaryCol text-white rounded-md shadow-md hover:bg-PrimaryCol/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-PrimaryCol transition-colors ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </div>
          ) : (
            "Envoyer le message"
          )}
        </button>
      </div>
    </form>
  );
}