export interface LinkItem {
  name: string;
  link: string;
}

// Update your navigation links to include the contact section
export const Links = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "À Propos",
    link: "/#about",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Réalisations",
    link: "/#realisations",
  },
  {
    name: "Boutique",
    link: "/#boutique",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
  {
    name: "Devis",
    link: "/devis",
  },
]
export interface ChildrenItem {
  title: string;
  path: string;
  allowedRoles: string[];
}
export interface NavigationItem {
  title: string;
  icon: string;
  path: string;
  children?: ChildrenItem[];
  allowedRoles: string[];
}

export const adminNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    icon: "material-symbols:dashboard",
    path: "/admin",
    allowedRoles: ["USER"],
  },
  {
    title: "Test",
    icon: "material-symbols:dashboard",
    path: "/test",
    allowedRoles: ["ADMIN", "USER"],
  },
  {
    title: "Paramètres",
    icon: "material-symbols:settings",
    path: "/dashboard/settings",
    allowedRoles: ["USER"],
  },
  {
    title: "Pages",
    icon: "eos-icons:admin",
    path: "#",
    children: [
      {
        title: "Client",
        path: "/dashboard/client",
        allowedRoles: ["USER"],
      },
      {
        title: "Server",
        path: "/dashboard/server",
        allowedRoles: ["USER"],
      },
    ],
    allowedRoles: ["USER"],
  },
];
