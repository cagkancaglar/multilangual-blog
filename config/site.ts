export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    website: string;
    github: string;
    linkedin: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
  currentlyAt: "Istanbul",
  socialLinks: {
    website: "//cagkancaglar.com",
    github: "//github.com/cagkancaglar",
    linkedin: "//linkedin.com/in/çağkan-çağlar-80375617b",
  },
};

export default siteConfig;
