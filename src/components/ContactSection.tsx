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
    <section id="contact" className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="w-full section-fade" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="px-6 md:px-14 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-10">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider flex items-center gap-4">
              CONTACT
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff0033]/40 to-transparent" />
            </h2>
          </div>

          {/* Icons row directly under CONTACT */}
          <div className="hack-card rounded-xl p-8 border-t-2 border-t-[#ff0033] flex flex-wrap gap-4 md:gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center gap-3 px-5 py-3 bg-[rgba(10,2,2,0.4)] border border-[rgba(255,0,51,0.15)] rounded-lg hover:border-[#ff0033] hover:bg-[rgba(255,0,51,0.05)] hover:shadow-[0_0_15px_rgba(255,0,51,0.15)] transition-all group min-w-[8rem]"
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {social.kind === 'lucide' ? (
                  <social.icon className="w-5 h-5 md:w-5 md:h-5 text-[rgba(180,180,180,0.6)] group-hover:text-[#ff0033] transition-colors" />
                ) : (
                  <i
                    className={`${social.devicon} text-[20px] md:text-[20px] opacity-80 group-hover:opacity-100 transition-all`}
                  ></i>
                )}
                <span className="font-mono text-[0.85rem] font-medium text-gray-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
