import { Github, Linkedin, Tent } from "lucide-react";
import Link from "next/link";

const SocialLinks = ({
  platform,
  link,
}: {
  platform: string;
  link: string;
}) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "website":
        return <Tent size={18} />;
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      default:
        null;
    }
  };

  return (
    <Link href={link} target="_blank">
      {getIcon(platform)}
    </Link>
  );
};

export default SocialLinks;
