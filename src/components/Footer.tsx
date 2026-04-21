export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07070e] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="white">
              <polygon points="8,1 15,5 15,11 8,15 1,11 1,5" />
            </svg>
          </div>
          <span
            className="text-white/30 text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            DevName
          </span>
        </div>

        {/* Copyright */}
        <p
          className="text-white/20 text-xs"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          © {year} — Built with 💜 by one indie dev
        </p>

        {/* Links */}
        <div className="flex gap-5">
          {[
            { href: "https://github.com", label: "GitHub" },
            { href: "https://itch.io", label: "itch.io" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/20 hover:text-white/60 text-xs uppercase tracking-wider transition-colors duration-200"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
