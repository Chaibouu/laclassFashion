const appConfig = {
  appName: "Acte de cession",
  websiteTitle: "Acte de cession",
  websiteDescription:
    "Acte de cession simple authentication service and admin panel",
  logoUrl: "/logo.jpg",
  sidebarClearlogoUrl: "/sahel_coders_logo.png",
  adminSidebarColor: "#1C2434",
  mailOptions: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASSWORD,
    },
  },
  publicRoutes: [],
  defaultLoginRedirect: "/actes",

  // Ajout d'une option pour autoriser ou non les connexions multiples
  allowMultipleSessions: true, // ou false pour invalider les anciennes sessions
  rateLimit: {
    windowMs: 10 * 1000, // Durée de la fenêtre en ms (10 seconds)
    max: 10, // Nombre maximum de requêtes par IP dans la fenêtre
  },
  // Configuration du Backoff progressif
  backoff: {
    maxAttempts: 5, // Nombre maximal de tentatives de connexion avant blocage
    backoffDelayFactor: 2, // Facteur de progression du backoff (multiplicateur)
  },
};

export default appConfig;
