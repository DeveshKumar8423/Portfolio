import { Linkedin, Github, Twitter, Mail, Briefcase } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: SOCIAL_LINKS.linkedin,
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: SOCIAL_LINKS.github,
    color: "hover:text-[#333]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: SOCIAL_LINKS.twitter,
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:deveshkumar8423gola@gmail.com",
    color: "hover:text-primary",
  },
  {
    name: "Upwork",
    icon: Briefcase,
    url: SOCIAL_LINKS.upwork,
    color: "hover:text-[#6fda44]",
  },
];

export default function SocialRow() {
  return (
    <TooltipProvider>
      <div className="flex flex-row items-center justify-center gap-6 md:gap-8 py-4 animate-fade-in">
        {socials.map(({ name, icon: Icon, url, color }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={`transition-transform duration-300 hover:scale-125 ${color}`}
              >
                <Icon className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
