import * as Icons from "lucide-react";
import { siteConfig } from "@/config/site";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="section-shell py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} dev-minsoo. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {siteConfig.socials.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons];
              return (
                Icon && (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              );
            })}

            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="맨 위로"
            >
              <ChevronUp size={15} />
              <span className="text-xs">Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
