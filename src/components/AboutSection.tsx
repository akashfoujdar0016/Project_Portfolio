export function AboutSection() {
  return (
    <section id="about" className="relative pt-32 pb-40 md:pt-56 md:pb-72 lg:pt-72 lg:pb-96 px-6 md:px-10 lg:px-16">
      <div className="w-full section-fade" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="section-shell px-10 pt-16 pb-24 md:px-14 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="mb-40 md:mb-56">
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white tracking-wider">
              ABOUT
            </h2>
          </div>
          <div className="h-10 md:h-14"></div>

          <div className="space-y-6">
            <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(180,180,180,0.55)' }}>
              I am an engineering student with a growing interest in web development and problem solving.
              Currently focused on building web projects and practicing DSA in Java to strengthen logical
              thinking and coding skills.
            </p>
            <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(180,180,180,0.55)' }}>
              Driven by curiosity, continuous learning, and the excitement of creating something meaningful
              with code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
