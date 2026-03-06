import { Github, Linkedin, Mail } from 'lucide-react';

const socials: Array<
  | { kind: 'lucide'; icon: any; label: string; href: string }
  | { kind: 'devicon'; devicon: string; label: string; href: string }
> = [
    {
      kind: 'lucide',
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/akashfoujdar0016',
    },
    {
      kind: 'lucide',
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akash-foujdar-b04526326/',
    },
    {
      kind: 'devicon',
      devicon: 'devicon-leetcode-plain colored',
      label: 'LeetCode',
      href: 'https://leetcode.com/u/akashfoujdar0016/',
    },
    {
      kind: 'lucide',
      icon: Mail,
      label: 'Email',
      href: 'mailto:akashfoujdar16@gmail.com',
    },
  ];

export function ContactSection() {
  return (
    <section id="contact" className="relative pt-32 pb-40 md:pt-56 md:pb-72 lg:pt-72 lg:pb-96 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto section-fade">
        <div className="section-shell px-10 pt-16 pb-24 md:px-14 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-40 md:mb-56">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider">
              CONTACT
            </h2>
          </div>
          <div className="h-10 md:h-14" />

          {/* Icons row directly under CONTACT */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-5 md:gap-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="section-hover-item flex flex-col items-center justify-center gap-1 px-4 py-3 border border-[rgba(255,0,51,0.06)] hover:border-[rgba(255,0,51,0.25)] transition-all group min-w-[4.5rem]"
                  style={{ borderRadius: '1px' }}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {social.kind === 'lucide' ? (
                    <social.icon className="w-5 h-5 md:w-6 md:h-6 text-[rgba(180,180,180,0.5)] group-hover:text-[#ff0033] transition-colors" />
                  ) : (
                    <i
                      className={`${social.devicon} text-[20px] md:text-[24px] opacity-80 group-hover:opacity-100 transition-all`}
                    ></i>
                  )}
                  <span className="font-mono text-[0.78rem] md:text-[0.8rem] text-[rgba(220,220,220,0.8)] tracking-[0.12em] uppercase">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
