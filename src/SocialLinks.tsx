import { useState } from "react";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

interface SocialLinksProps {
  github: string;
  linkedin: string;
  whatsapp: string;
  email: string;
  discordUsername: string;
}

const iconButton =
  "group relative grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-muted shadow-sm transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

function Tooltip({ children }: { children: ReactNode }) {
  return (
    <span
      className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      role="tooltip"
    >
      {children}
    </span>
  );
}

interface LinkItemProps {
  label: string;
  href: string;
  hoverClass: string;
  icon: ReactNode;
  external?: boolean;
}

function SocialLink({ label, href, hoverClass, icon, external = true }: LinkItemProps) {
  return (
    <li>
      <a
        aria-label={external ? `${label} (opens in a new tab)` : label}
        className={`${iconButton} ${hoverClass}`}
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {icon}
        <Tooltip>{label}</Tooltip>
      </a>
    </li>
  );
}

export default function SocialLinks({ github, linkedin, whatsapp, email, discordUsername }: SocialLinksProps) {
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(discordUsername);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <ul aria-label="Social links" className="mt-8 flex flex-wrap items-center gap-3">
      <SocialLink
        hoverClass="hover:border-ink hover:bg-ink hover:text-white"
        href={github}
        icon={<FaGithub aria-hidden="true" size={20} />}
        label="GitHub"
      />
      <SocialLink
        hoverClass="hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
        href={linkedin}
        icon={<FaLinkedinIn aria-hidden="true" size={20} />}
        label="LinkedIn"
      />
      <SocialLink
        hoverClass="hover:border-[#25d366] hover:bg-[#25d366] hover:text-white"
        href={whatsapp}
        icon={<FaWhatsapp aria-hidden="true" size={21} />}
        label="WhatsApp"
      />
      <li>
        <button
          aria-label={copied ? "Discord username copied" : `Copy Discord username ${discordUsername}`}
          className={`${iconButton} hover:border-[#5865f2] hover:bg-[#5865f2] hover:text-white`}
          onClick={() => void copyDiscord()}
          type="button"
        >
          {copied ? <Check aria-hidden="true" size={20} /> : <FaDiscord aria-hidden="true" size={21} />}
          <Tooltip>{copied ? "Copied!" : `Discord: @${discordUsername}`}</Tooltip>
        </button>
      </li>
      <SocialLink
        external={false}
        hoverClass="hover:border-coral hover:bg-coral hover:text-white"
        href={`mailto:${email}`}
        icon={<FaEnvelope aria-hidden="true" size={19} />}
        label="Email"
      />
    </ul>
  );
}