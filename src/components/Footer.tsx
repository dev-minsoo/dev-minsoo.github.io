import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Email", icon: Mail, url: "mailto:hello@example.com" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-zinc-400 text-sm">
            © 2025 Min-soo. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
