export type App = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  category?: string;
};

export const apps: App[] = [
  {
    slug: "fluxcareers",
    name: "FluxCareers",
    tagline: "Tailor your CV in minutes.",
    url: "https://fluxcareers.oddbatch.app",
    category: "tool",
  },
  {
    slug: "promptvault",
    name: "promptVault",
    tagline: "Your local prompt library.",
    url: "https://promptvault.anaken.one",
    category: "tool",
  },
];
