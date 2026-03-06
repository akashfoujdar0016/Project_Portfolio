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
          <div className="mb-12">
            <div className="inline-block border border-emerald-900/50 bg-[#0d1117] rounded-md px-4 py-2">
              <span className="text-emerald-500 font-mono text-lg md:text-xl font-medium">{`>_ myProjects_`}</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Single project card */}
            <div className="bg-[#0d1117] border border-[#30363d] border-t-2 border-t-[#1f6b4e] rounded-xl p-6 md:p-8 hover:bg-[#10141a] transition-colors group">
              <h4 className="font-mono text-base md:text-lg font-semibold text-gray-200 mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>
              <p
                className="font-mono text-[0.85rem] leading-relaxed mb-6"
                style={{ color: '#8b949e' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.65rem] px-2 py-1 bg-[#161b22] border border-[#30363d] text-[#8b949e] rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-2 font-mono text-[0.75rem] text-[#8b949e] hover:text-emerald-400 transition-colors"
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
