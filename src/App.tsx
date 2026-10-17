import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  FileText,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import { education, navLinks, profile, projects, skills } from "./data";
import type { Project, SkillGroup } from "./data";

function SectionLabel({ number, children, inverse = false }: { number: string; children: string; inverse?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] ${inverse ? "text-white/70" : "text-muted"}`}>
      <span className="font-display text-coral">{number}</span>
      <span className={`h-px w-8 ${inverse ? "bg-white/30" : "bg-line"}`} />
      {children}
    </p>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="border-t border-line py-5">
      <h3 className="mb-3 font-display text-lg font-semibold">{group.title}</h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li className="rounded-full border border-line bg-white/70 px-3 py-1 text-sm text-muted" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`group flex flex-col rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_18px_45px_-28px_rgba(24,33,29,0.35)] sm:p-8 ${project.wide ? "md:col-span-2" : ""}`}>
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest font-display font-bold text-lime">
          0{index + 1}
        </span>
        <span className="text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted">{project.tag}</span>
      </div>
      <h3 className="font-display text-2xl font-bold tracking-normal">{project.title}</h3>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-forest" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-5 pt-7 text-sm font-bold">
        {project.live && (
          <a className="inline-flex items-center gap-1.5 text-forest hover:text-coral" href={project.live} target="_blank" rel="noreferrer">
            Live site <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        )}
        {project.github && (
          <a className="inline-flex items-center gap-1.5 text-forest hover:text-coral" href={project.github} target="_blank" rel="noreferrer">
            Source <Code2 aria-hidden="true" size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <nav aria-label="Main navigation" className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a aria-label={`${profile.name} home`} className="font-display text-xl font-bold tracking-normal" href="#home">
            JA<span className="text-coral">.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((label) => (
              <a className="text-sm font-semibold text-muted transition-colors hover:text-ink" href={`#${label.toLowerCase()}`} key={label}>
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={15} />
              <span>Let&apos;s talk</span>
            </a>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              {isMenuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="border-t border-line bg-paper px-5 py-3 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 sm:px-3">
              {navLinks.map((label) => (
                <a className="py-1 text-sm font-semibold text-muted hover:text-ink" href={`#${label.toLowerCase()}`} key={label} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="paper-grid overflow-hidden" id="home">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-28">
            <div>
              <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-semibold text-muted">
                <span className="h-2 w-2 rounded-full bg-forest ring-4 ring-lime/50" />
                {profile.status}
              </p>
              <p className="mb-2 font-display text-xl font-semibold text-forest">Hi, I&apos;m</p>
              <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-normal sm:text-6xl lg:text-[4.5rem]">
                {profile.name.split(" ")[0]}<br />
                <span className="text-forest">{profile.name.split(" ").slice(1).join(" ")}.</span>
              </h1>
              <p className="mt-5 font-display text-xl font-semibold text-coral sm:text-2xl">{profile.role.trim()}</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">{profile.bio}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-semibold text-white transition-colors hover:bg-ink" download="resume.pdf" href="/resume.pdf">
                  <Download aria-hidden="true" size={17} /> Resume
                </a>
                <a className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 font-semibold transition-colors hover:border-forest" href="/cv.pdf" rel="noreferrer" target="_blank">
                  <FileText aria-hidden="true" size={17} /> View CV <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              </div>
              <SocialLinks
                discordUsername={profile.discordUsername}
                email={profile.email}
                github={profile.github}
                linkedin="https://www.linkedin.com/in/jannatul-akiba/"
                whatsapp={`https://wa.me/88${profile.phone.slice(1)}`}
              />
            </div>

            <div className="relative mx-auto w-full max-w-[430px]">
              <div aria-hidden="true" className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-coral sm:-right-6 sm:-top-6" />
              <div className="relative overflow-hidden rounded-[2rem] bg-forest p-8 text-white shadow-[0_28px_70px_-35px_rgba(36,75,57,0.7)] sm:p-10">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#c8f169 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                <div className="relative flex min-h-[350px] flex-col justify-between sm:min-h-[390px]">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Developer / Researcher</span>
                    <span className="font-display text-sm font-semibold text-lime">2026</span>
                  </div>
                  <div className="py-8">
                    <span className="block font-display text-[8rem] font-bold leading-[0.8] tracking-normal text-lime sm:text-[9rem]">JA</span>
                    <p className="mt-5 max-w-[250px] text-sm leading-6 text-white/75">Building useful experiences across web, mobile, and healthcare AI.</p>
                  </div>
                  <div className="flex items-end justify-between border-t border-white/20 pt-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">Thesis model accuracy</p>
                      <p className="mt-1 font-display text-3xl font-bold text-white">98.67<span className="text-lime">%</span></p>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-forest"><ArrowUpRight aria-hidden="true" size={21} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white" id="about">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div><SectionLabel number="01">A little about me</SectionLabel><h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Curious by nature.<br />Builder by practice.</h2></div>
            <div>
              <p className="text-lg leading-8 text-muted">{profile.about}</p>
              <a className="mt-6 inline-flex items-center gap-2 font-bold text-forest hover:text-coral" href={profile.github} target="_blank" rel="noreferrer">
                More about my work <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionLabel number="02">What I work with</SectionLabel>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Skills & tools</h2>
              <p className="max-w-sm text-sm leading-6 text-muted">A practical toolkit for building, shipping, and learning across disciplines.</p>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2">
              {skills.map((group) => <SkillCard group={group} key={group.title} />)}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white" id="projects">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionLabel number="03">Selected work</SectionLabel>
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Projects with purpose</h2>
              <a className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-coral" href={profile.github} target="_blank" rel="noreferrer">
                All repositories <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="grid items-stretch gap-4 md:grid-cols-2">
              {projects.map((project, index) => <ProjectCard index={index} key={project.title} project={project} />)}
            </div>
          </div>
        </section>

        <section id="education">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div><SectionLabel number="04">Learning journey</SectionLabel><h2 className="font-display text-3xl font-bold sm:text-4xl">Education & training</h2></div>
            <div className="divide-y divide-line border-y border-line">
              {education.map((item) => (
                <article className="flex gap-4 py-6 sm:gap-6" key={item.title}>
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime/60 text-forest"><GraduationCap aria-hidden="true" size={21} /></span>
                  <div><h3 className="font-display text-lg font-bold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted">{item.meta}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest text-white" id="contact">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionLabel inverse number="05">Have a good one in mind?</SectionLabel>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">Let&apos;s build something<br className="hidden sm:block" /> that makes a difference.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">Open to junior and trainee roles in Bangladesh. The fastest way to reach me is email.</p>
            </div>
            <a className="inline-flex w-fit items-center gap-3 rounded-full bg-lime px-6 py-4 font-bold text-ink transition-colors hover:bg-white" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={18} /> Email me <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {profile.name}. Built with care.</p>
          <nav aria-label="Footer social links" className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a className="inline-flex items-center gap-2 hover:text-lime" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" size={18} /> GitHub <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a className="inline-flex items-center gap-2 hover:text-lime" href="https://www.linkedin.com/in/jannatul-akiba/" target="_blank" rel="noreferrer">
              <FaLinkedinIn aria-hidden="true" className="text-[#0a66c2]" size={18} /> LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a className="inline-flex items-center gap-2 hover:text-lime" href={`https://wa.me/88${profile.phone.slice(1)}`} target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" className="text-[#25d366]" size={19} /> WhatsApp <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a className="inline-flex items-center gap-2 hover:text-lime" href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" className="text-coral" size={18} /> Email
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}