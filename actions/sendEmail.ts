"use server";

// Action simplifiée pour l'envoi d'email - site vitrine
export const sendEmail = async (data: {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}) => {
  try {
    // Pour un site vitrine, on peut simplement logger les données
    // ou les envoyer à une API externe si nécessaire
    console.log("Email reçu:", data);
    
    // Ici, vous pouvez ajouter l'intégration avec un service d'email
    // comme SendGrid, Nodemailer, etc.
    
    return {
      success: "Votre message a été envoyé avec succès. Nous vous répondrons bientôt !",
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return {
      error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
    };
  }
};

