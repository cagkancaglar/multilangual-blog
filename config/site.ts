export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    github: string;
    website: string;
    linkedin: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
  currentlyAt: "Istanbul",
  socialLinks: {
    github: "//github.com/cagkancaglar",
    website: "//cagkancaglar.com",
    linkedin: "//linkedin.com/cagkancaglar",
  },
};

export default siteConfig;
