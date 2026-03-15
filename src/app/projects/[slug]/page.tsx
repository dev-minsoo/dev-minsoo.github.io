import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/config/projects";
import { ProjectTroubleshootingItem } from "@/types";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

type ActionLink = {
  key: string;
  href: string;
  label: string;
  icon: typeof ExternalLink | typeof Github;
  className: string;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureGrid({ items, secondaryItems }: { items: string[]; secondaryItems?: string[] }) {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/8 bg-[#0f1a2b] px-5 py-4 text-sm leading-7 text-slate-200"
          >
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>

      {secondaryItems?.length ? (
        <div className="border-t border-white/8 pt-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">추가 기능</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">{secondaryItems.join(" · ")}</p>
        </div>
      ) : null}
    </div>
  );
}

function TroubleshootingList({ items }: { items: ProjectTroubleshootingItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-white/8 bg-[#0f1a2b] px-5 py-4">
          <p className="text-sm font-semibold text-white">{item.title}</p>
          <p className="mt-3 text-sm leading-7 text-slate-400">{item.problem}</p>
          <div className="mt-4 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">Solution</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.solution}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DetailBlock({
  title,
  content,
  items,
  secondaryItems,
  className = "",
}: {
  title: string;
  content?: string;
  items?: string[];
  secondaryItems?: string[];
  className?: string;
}) {
  return (
    <article className={`rounded-[24px] border border-white/8 bg-[#0b1423]/92 p-7 ${className}`}>
      <p className="text-sm font-semibold tracking-[0.02em] text-white">{title}</p>
      {content ? <p className="mt-5 leading-8 text-slate-300">{content}</p> : null}
      {items?.length ? (
        <div className={content ? "mt-6" : "mt-5"}>
          {title === "핵심 기능" || title === "Core Features" ? (
            <FeatureGrid items={items} secondaryItems={secondaryItems} />
          ) : (
            <BulletList items={items} />
          )}
        </div>
      ) : null}
    </article>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | 우민수",
    };
  }

  return {
    title: `${project.title} | Projects | 우민수`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isContainedBanner = project.imageFit === "contain";
  const imageFitClass = isContainedBanner ? "object-contain" : "object-cover";
  const actionLinks: ActionLink[] = (project.demoFirst
    ? [
        project.links.demo
          ? {
              key: "demo",
              href: project.links.demo,
              label: "Demo",
              icon: ExternalLink,
              className:
                "inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition-colors hover:border-cyan-200/70 hover:bg-cyan-300/15",
            }
          : null,
        project.links.github
          ? {
              key: "github",
              href: project.links.github,
              label: "Code",
              icon: Github,
              className:
                "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-100 transition-colors hover:border-cyan-300/60 hover:bg-white/5",
            }
          : null,
      ]
    : [
        project.links.github
          ? {
              key: "github",
              href: project.links.github,
              label: "Code",
              icon: Github,
              className:
                "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-100 transition-colors hover:border-cyan-300/60 hover:bg-white/5",
            }
          : null,
        project.links.demo
          ? {
              key: "demo",
              href: project.links.demo,
              label: "Demo",
              icon: ExternalLink,
              className:
                "inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition-colors hover:border-cyan-200/70 hover:bg-cyan-300/15",
            }
          : null,
      ]).filter((link): link is ActionLink => link !== null);
  const background = project.detail.overview;
  const techStack = project.detail.techStack ?? project.tags;
  const coreFeatures = project.detail.coreFeatures ?? project.detail.implementation;
  const secondaryFeatures = project.detail.secondaryFeatures;
  const troubleshooting = project.detail.troubleshooting;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04050f] px-6 py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-24 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />
        <div className="absolute inset-0 subtle-grid opacity-40" />
      </div>

      <div className="section-shell relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <section className="mt-10 rounded-[28px] border border-white/8 bg-[#0b1423]/94 p-8 shadow-2xl shadow-cyan-950/20 md:p-10">
          <div className="relative mb-8 aspect-[10/3] overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/80">
            <Image
              src={project.image}
              alt={`${project.title} banner`}
              fill
              className={imageFitClass}
              sizes="(min-width: 1120px) 1120px, 100vw"
              priority
            />
            <div
              className={
                isContainedBanner
                  ? "absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"
                  : "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent"
              }
            />
          </div>

          <div className="mb-2 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-200">
            Case Study
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.28em] text-cyan-300/90">{project.category}</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/8 bg-white/[0.025] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {actionLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.className}
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-6">
          <DetailBlock title="Background" content={background} />
          <DetailBlock title="Core Features" items={coreFeatures} secondaryItems={secondaryFeatures} />
          {troubleshooting?.length ? (
            <article className="rounded-[24px] border border-white/8 bg-[#0b1423]/92 p-7">
              <p className="text-sm font-semibold tracking-[0.02em] text-white">Troubleshooting</p>
              <div className="mt-5">
                <TroubleshootingList items={troubleshooting} />
              </div>
            </article>
          ) : (
            <DetailBlock title="Troubleshooting" items={project.detail.impact} />
          )}
        </section>
      </div>
    </main>
  );
}
