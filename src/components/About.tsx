const skills = [
  { name: "Game Design", level: 90 },
  { name: "Programming", level: 85 },
  { name: "Pixel Art", level: 75 },
  { name: "Sound Design", level: 60 },
  { name: "Level Design", level: 88 },
  { name: "Game Engines", level: 82 },
];

const tools = [
  { name: "Unity / Godot", icon: "🎮" },
  { name: "VS Code", icon: "💻" },
  { name: "Aseprite", icon: "🎨" },
  { name: "Tiled", icon: "🗺️" },
  { name: "Audacity", icon: "🎵" },
  { name: "GitHub", icon: "🐙" },
  { name: "Blender", icon: "🔷" },
  { name: "Figma", icon: "✏️" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#080810] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="text-cyan-400 text-xs uppercase tracking-widest mb-3 flex items-center gap-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span className="w-6 h-px bg-cyan-400 inline-block" />
              About Me
            </p>

            <h2
              style={{ fontFamily: "Orbitron, sans-serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              The Person <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Behind the Code
              </span>
            </h2>

            <div
              className="space-y-4 text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <p>
                Hey! I'm an indie game developer who builds everything solo — design, code, art, sound. 
                I love creating worlds from scratch and solving the weird puzzles that game development throws at you.
              </p>
              <p>
                Started making games just for fun, and it turned into something I can't stop doing. 
                Every project is a chance to learn something new — whether it's a new mechanic, a new visual style, or a totally broken idea that somehow works.
              </p>
              <p>
                I'm not a studio. I'm just one person with a laptop and too many ideas.{" "}
                <span className="text-white/70">And that's exactly how I like it.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-sm font-medium transition-all duration-200"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://itch.io"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-sm font-medium transition-all duration-200"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                🎮 itch.io
              </a>
            </div>
          </div>

          {/* Right: Skills + Tools */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5">
              <h3
                className="text-white text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                // Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span
                        className="text-white/60 text-xs"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-violet-400 text-xs"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5">
              <h3
                className="text-white text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                // Tools I Use
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/3 border border-white/5 hover:border-violet-500/20 transition-colors duration-200"
                  >
                    <span className="text-base">{tool.icon}</span>
                    <span
                      className="text-white/50 text-xs"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
