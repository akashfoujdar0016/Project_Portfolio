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
          <div className="mb-10">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider flex items-center gap-4">
              TECH STACK
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff0033]/40 to-transparent" />
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="hack-card rounded-xl p-5 md:p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <i
                    className={`${skill.icon} text-4xl leading-none shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg`}
                  />
                </div>
                <span className="font-mono text-[0.75rem] font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
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
