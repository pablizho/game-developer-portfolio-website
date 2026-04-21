type Post = {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  emoji: string;
};

const posts: Post[] = [
  {
    date: "Dec 2024",
    tag: "Release",
    title: "Project Dungeon is live!",
    excerpt:
      "After 6 months of late nights and way too much coffee, it's finally out. The procedural generation works better than I expected, and the item system is surprisingly fun to abuse.",
    emoji: "🚀",
  },
  {
    date: "Nov 2024",
    tag: "Devlog",
    title: "How I built the loot system",
    excerpt:
      "Loot tables are deceptively simple until they're not. Here's a breakdown of how the weighted random system works in Project Dungeon and why I rewrote it three times.",
    emoji: "⚙️",
  },
  {
    date: "Sep 2024",
    tag: "Design",
    title: "Level design philosophy for solo devs",
    excerpt:
      "When you're one person doing everything, you have to be ruthless about scope. Here's how I approach level design without burning out — or making boring levels.",
    emoji: "🗺️",
  },
  {
    date: "Jul 2024",
    tag: "Art",
    title: "Pixel art tips I wish I knew earlier",
    excerpt:
      "I'm not an artist. But after hundreds of hours in Aseprite, I've picked up a few things that made my sprites go from 'who drew this' to 'ok, this is acceptable'.",
    emoji: "🎨",
  },
];

const tagColors: Record<string, string> = {
  Release: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Devlog: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Design: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Art: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

export default function Devlog() {
  return (
    <section id="devlog" className="py-28 bg-[#07070e] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p
              className="text-violet-400 text-xs uppercase tracking-widest mb-3 flex items-center gap-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span className="w-6 h-px bg-violet-400 inline-block" />
              Dev Notes
            </p>
            <h2
              style={{ fontFamily: "Orbitron, sans-serif" }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Devlog
            </h2>
          </div>
          <p
            className="text-white/30 text-sm max-w-xs"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Thoughts, post-mortems, and rambling about game dev.
          </p>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-violet-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{post.emoji}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${tagColors[post.tag] ?? "text-white/50 bg-white/5 border-white/10"}`}
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {post.tag}
                  </span>
                </div>
                <span
                  className="text-white/20 text-xs"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {post.date}
                </span>
              </div>

              <h3
                style={{ fontFamily: "Orbitron, sans-serif" }}
                className="text-white text-lg font-semibold mb-3 group-hover:text-violet-300 transition-colors duration-200 leading-snug"
              >
                {post.title}
              </h3>

              <p
                className="text-white/40 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {post.excerpt}
              </p>

              <div className="flex items-center gap-1 text-violet-400/60 text-xs group-hover:text-violet-400 transition-colors duration-200"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Read more
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
