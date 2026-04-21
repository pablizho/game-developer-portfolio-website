import { useState } from "react";

type Game = {
  id: number;
  title: string;
  genre: string;
  status: "Released" | "In Dev" | "Prototype";
  year: string;
  description: string;
  tags: string[];
  image: string;
  playUrl?: string;
  itchUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const games: Game[] = [
  {
    id: 1,
    title: "Project Dungeon",
    genre: "Roguelike / RPG",
    status: "Released",
    year: "2024",
    description:
      "A top-down dungeon crawler with procedurally generated levels and permadeath mechanics. Fight through endless floors, collect loot and grow stronger — until you don't.",
    tags: ["Pixel Art", "Procedural", "Solo dev"],
    image: "images/game-placeholder-1.jpg",
    playUrl: "#",
    itchUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Neon Shift",
    genre: "Platformer",
    status: "In Dev",
    year: "2025",
    description:
      "A fast-paced cyberpunk platformer where the city itself is your enemy. Dash through neon-lit streets, hack environments and outrun the system.",
    tags: ["Neon", "Fast-paced", "Cyberpunk"],
    image: "/images/game-placeholder-2.jpg",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Void Pieces",
    genre: "Puzzle",
    status: "Prototype",
    year: "2025",
    description:
      "A minimalist puzzle game about assembling floating islands in the void. Each level is a meditation on logic and space.",
    tags: ["Minimalist", "Chill", "Logic"],
    image: "/images/game-placeholder-3.jpg",
    githubUrl: "#",
  },
];

const statusColors: Record<Game["status"], string> = {
  Released: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Dev": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Prototype: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

const statusDot: Record<Game["status"], string> = {
  Released: "bg-emerald-400",
  "In Dev": "bg-amber-400 animate-pulse",
  Prototype: "bg-cyan-400",
};

export default function Games() {
  const [, setHovered] = useState<number | null>(null);

  return (
    <section id="games" className="py-28 bg-[#07070e] relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-violet-400 text-xs uppercase tracking-widest mb-3 flex items-center gap-2"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            <span className="w-6 h-px bg-violet-400 inline-block" />
            My Projects
          </p>
          <h2
            style={{ fontFamily: "Orbitron, sans-serif" }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Games I've Built
          </h2>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Featured game — wide card */}
          {games
            .filter((g) => g.featured)
            .map((game) => (
              <div
                key={game.id}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0d0d1a] hover:border-violet-500/30 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHovered(game.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d1a]/80 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/80 to-transparent lg:hidden" />
                  </div>

                  {/* Info */}
                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusColors[game.status]}`}
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusDot[game.status]}`} />
                        {game.status}
                      </span>
                      <span className="text-white/20 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {game.year}
                      </span>
                      <span className="text-violet-400/60 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {game.genre}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                      className="text-2xl sm:text-3xl font-bold text-white mb-3"
                    >
                      {game.title}
                    </h3>

                    <p
                      className="text-white/40 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {game.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {game.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-white/40 text-xs"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {game.playUrl && (
                        <a
                          href={game.playUrl}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors duration-200"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          ▶ Play Now
                        </a>
                      )}
                      {game.itchUrl && (
                        <a
                          href={game.itchUrl}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 text-sm transition-all duration-200"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          🎮 itch.io
                        </a>
                      )}
                      {game.githubUrl && (
                        <a
                          href={game.githubUrl}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 text-sm transition-all duration-200"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other games — 2 column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {games
              .filter((g) => !g.featured)
              .map((game) => (
                <div
                  key={game.id}
                  className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0d0d1a] hover:border-violet-500/30 transition-all duration-500 flex flex-col"
                  onMouseEnter={() => setHovered(game.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/30 to-transparent" />

                    {/* Status badge on image */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium backdrop-blur-sm ${statusColors[game.status]}`}
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusDot[game.status]}`} />
                        {game.status}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-violet-400/60 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {game.genre}
                      </span>
                      <span className="text-white/20 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {game.year}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                      className="text-xl font-bold text-white mb-2"
                    >
                      {game.title}
                    </h3>

                    <p
                      className="text-white/40 text-sm leading-relaxed mb-5 flex-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {game.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {game.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/5 text-white/35 text-xs"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {game.playUrl && (
                        <a
                          href={game.playUrl}
                          className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          ▶ Play
                        </a>
                      )}
                      {game.githubUrl && (
                        <a
                          href={game.githubUrl}
                          className="px-4 py-2 rounded-lg border border-white/10 text-white/50 hover:text-white text-xs transition-all"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Note about downloads */}
        <div className="mt-10 p-5 rounded-xl border border-violet-500/10 bg-violet-500/5 flex items-start gap-3">
          <span className="text-violet-400 text-lg mt-0.5">💡</span>
          <p
            className="text-white/40 text-sm leading-relaxed"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-white/70 font-medium">Want to download?</span> Files over 100 MB should be hosted on{" "}
            <a href="https://itch.io" target="_blank" rel="noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
              itch.io
            </a>{" "}
            — it's free and perfect for indie games. Small web builds can be played directly here.
          </p>
        </div>
      </div>
    </section>
  );
}
