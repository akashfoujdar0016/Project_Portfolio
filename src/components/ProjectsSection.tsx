import { Github } from 'lucide-react';

export function ProjectsSection() {
  const project = {
    title: 'Lost and Found Portal',
    description:
      "An institute portal where students and staff can report a lost item or submit a found item, browse all posts, and help owners reclaim their belongings. Supports item details, images, contact info, and status updates.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    github: 'https://github.com/akashfoujdar0016/lost_and_found.git',
  };

  return (
    <section id="projects" className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="w-full section-fade" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="px-6 md:px-14 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-10">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider flex items-center gap-4">
              PROJECTS
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff0033]/40 to-transparent" />
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Single project card */}
            <div className="hack-card rounded-xl p-8 md:p-10 border-t-2 border-t-[#ff0033] flex flex-col">
              <h4 className="font-space text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#ff0033] transition-colors">
                {project.title}
              </h4>
              <p
                className="font-inter text-[0.95rem] leading-loose mb-8 flex-1"
                style={{ color: 'rgba(180,180,180,0.7)' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.7rem] px-3 py-1 bg-[rgba(255,0,51,0.05)] border border-[rgba(255,0,51,0.2)] text-[rgba(255,100,120,0.9)] rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-2 font-mono text-[0.75rem] text-[rgba(180,180,180,0.6)] hover:text-[#ff0033] transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
