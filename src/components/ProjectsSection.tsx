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
    <section id="projects" className="relative pt-32 pb-40 md:pt-56 md:pb-72 lg:pt-72 lg:pb-96 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto section-fade">
        <div className="section-shell px-10 pt-16 pb-24 md:px-14 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-40 md:mb-56">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider">PROJECTS</h2>
          </div>
          <div className="h-10 md:h-14"></div>

          {/* Single project card */}
          <div className="hack-card section-hover-item overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Visual placeholder */}
              <div
                className="relative h-56 md:h-auto min-h-[240px]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,0,51,0.08), rgba(3,3,5,0.95))',
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,0,51,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.2) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-4xl font-bold text-[rgba(255,0,51,0.12)]">01</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <h4 className="font-space text-xl font-bold text-white mb-3">{project.title}</h4>
                <p
                  className="font-inter text-xs leading-relaxed mb-5"
                  style={{ color: 'rgba(180,180,180,0.5)' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.6rem] px-2 py-1 border border-[rgba(255,0,51,0.15)] text-[rgba(255,0,51,0.6)] tracking-[0.05em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 font-mono text-[0.68rem] text-[rgba(180,180,180,0.4)] hover:text-[#ff0033] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
