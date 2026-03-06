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
        <div className="section-shell px-10 pt-16 pb-24 md:px-14 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-40 md:mb-56">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider">
              TECH STACK
            </h2>
          </div>
          <div className="h-10 md:h-14"></div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="hack-card section-hover-item p-7 md:p-8 flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[rgba(255,0,51,0.15)] bg-[rgba(255,0,51,0.03)]" style={{ borderRadius: '2px' }}>
                  <i
                    className={`${skill.icon} text-2xl md:text-3xl leading-none shrink-0 transition-all duration-300`}
                  />
                </div>
                <span className="font-mono text-[0.8rem] font-semibold text-[rgba(180,180,180,0.55)] group-hover:text-white transition-colors duration-300">
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
