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
    title: "Nouvel acte",
    icon: "material-symbols:dashboard",
    path: "/newActe",
    allowedRoles: ["ADMIN", "USER"],
  },
  {
    title: "Toute les actes",
    icon: "material-symbols:dashboard",
    path: "/actes",
    allowedRoles: ["ADMIN", "USER"],
  }
];
