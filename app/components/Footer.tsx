import siteConfig from "@/config/site";
import PaddingContainer from "./PaddingContainer";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="py-8 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social and Currently at */}
        <div className="flex justify-between gap-4 mt-6 flex-wrap">
          <div>
            <div className="text-lg font-medium">#exploretheworld</div>
            <div className="flex items-center gap-x-2 mt-2 text-neutral-600">
              <SocialLinks
                platform="website"
                link={siteConfig.socialLinks.website}
              />
              <SocialLinks
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocialLinks
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently at</div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex justify-between items-center flex-wrap gap-4 py-3 border-t mt-16">
          <div className="text-sm text-neutral-400">
            All rights are reserved &copy; Copyright {new Date().getFullYear()}
          </div>
          <div>
            Made with love by{" "}
            <Link href="//cagkancaglar.com" target="_blank">
              @cagkancaglar
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
