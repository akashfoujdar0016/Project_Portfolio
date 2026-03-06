const skills = [
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original', forceColor: true },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
] as const;

export function SkillsSection() {
  return (
    <section id="tech-stack" className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="w-full section-fade" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="px-6 md:px-14 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-block border border-emerald-900/50 bg-[#0d1117] rounded-md px-4 py-2">
              <span className="text-emerald-500 font-mono text-lg md:text-xl font-medium">{`>_ techStack_`}</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-[#0f141a] border border-[#222] rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 hover:border-emerald-500 hover:bg-[#121820] transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <i
                    className={`${skill.icon} text-3xl md:text-4xl leading-none shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                <span className="font-mono text-[0.7rem] md:text-[0.75rem] font-medium text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
