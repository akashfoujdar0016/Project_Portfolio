export function AboutSection() {
  return (
    <section id="about" className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="w-full section-fade" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="px-6 md:px-14 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-10">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider flex items-center gap-4">
              ABOUT
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff0033]/40 to-transparent" />
            </h2>
          </div>

          {/* About Content */}
          <div className="hack-card rounded-xl p-8 md:p-12 border-t-2 border-t-[#ff0033]">
            <div className="space-y-6">
              <p className="font-inter text-[0.95rem] md:text-[1rem] leading-loose text-gray-300">
                I am an engineering student with a growing interest in web development and problem solving.
                Currently focused on building web projects and practicing DSA in Java to strengthen logical
                thinking and coding skills.
              </p>
              <p className="font-inter text-[0.95rem] md:text-[1rem] leading-loose text-gray-300">
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
