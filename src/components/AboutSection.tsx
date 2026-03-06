export function AboutSection() {
  return (
    <section id="about" className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="w-full section-fade" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="px-6 md:px-14 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-block border border-emerald-900/50 bg-[#0d1117] rounded-md px-4 py-2">
              <span className="text-emerald-500 font-mono text-lg md:text-xl font-medium">{`>_ about_`}</span>
            </div>
          </div>

          {/* About Content */}
          <div className="bg-[#0f141a] border border-[#222] border-t-2 border-t-[#1f6b4e] rounded-xl p-6 md:p-10">
            <div className="space-y-6">
              <p className="font-mono text-[0.85rem] md:text-[0.95rem] leading-loose text-[#8b949e]">
                I am an engineering student with a growing interest in web development and problem solving.
                Currently focused on building web projects and practicing DSA in Java to strengthen logical
                thinking and coding skills.
              </p>
              <p className="font-mono text-[0.85rem] md:text-[0.95rem] leading-loose text-[#8b949e]">
                Driven by curiosity, continuous learning, and the excitement of creating something meaningful
                with code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
