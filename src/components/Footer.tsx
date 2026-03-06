export function Footer() {
  return (
    <footer
      className="relative mt-24 md:mt-40 py-5 px-6"
      style={{
        background: 'rgba(6, 8, 10, 0.97)',
        borderTop: '1px solid rgba(0, 255, 136, 0.12)',
      }}
    >
      <div className="flex items-center justify-center" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <span
          className="font-mono text-[0.72rem] tracking-[0.18em]"
          style={{
            color: 'rgba(0, 255, 136, 0.75)',
            textShadow: '0 0 10px rgba(0, 255, 136, 0.35)',
          }}
        >
          © 2026 Akash Foujdar{' '}
          <span style={{ color: 'rgba(0, 255, 136, 0.45)' }}>//</span>{' '}
          akashfoujdar0016
        </span>
      </div>
    </footer>
  );
}
