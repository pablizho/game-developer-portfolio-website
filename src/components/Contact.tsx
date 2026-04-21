export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#080810] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <p
          className="text-cyan-400 text-xs uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          <span className="w-6 h-px bg-cyan-400 inline-block" />
          Get In Touch
          <span className="w-6 h-px bg-cyan-400 inline-block" />
        </p>

        <h2
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className="text-3xl sm:text-4xl font-bold text-white mb-5"
        >
          Let's Talk
        </h2>

        <p
          className="text-white/40 text-base leading-relaxed mb-12 max-w-lg mx-auto"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Got a cool idea? Want to collaborate? Just want to say something nice about a game? 
          I'm all ears. Hit me up anywhere below.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: (
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              ),
              label: "GitHub",
              value: "@yourusername",
              href: "https://github.com",
              color: "text-white",
            },
            {
              icon: <span className="text-xl">🎮</span>,
              label: "itch.io",
              value: "yourusername",
              href: "https://itch.io",
              color: "text-rose-400",
            },
            {
              icon: (
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
              label: "Email",
              value: "you@email.com",
              href: "mailto:you@email.com",
              color: "text-cyan-400",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${c.color} opacity-60 group-hover:opacity-100 transition-opacity duration-200`}>
                {c.icon}
              </div>
              <div>
                <div
                  className="text-white/30 text-xs uppercase tracking-widest mb-0.5"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {c.label}
                </div>
                <div
                  className="text-white/60 group-hover:text-white text-sm font-medium transition-colors duration-200"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Extra line */}
        <p
          className="text-white/20 text-xs"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          // I usually respond within a day or two
        </p>
      </div>
    </section>
  );
}
