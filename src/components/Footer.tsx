export function Footer() {
  return (
    <footer
      className="relative mt-72 md:mt-96 py-10 px-6"
      style={{ borderTop: '1px solid rgba(255,0,51,0.08)' }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-start">
        <span
          className="font-mono text-[0.7rem] tracking-[0.18em] uppercase"
          style={{ color: 'rgba(180,180,180,0.6)' }}
        >
          by <span className="text-[#ff0033]">Akash Foujdar</span> 2026
        </span>
      </div>
    </footer>
  );
}
