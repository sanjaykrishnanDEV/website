// Projects.tsx

const projects = [
  {
    name: "Lumen",
    tagline: "A mini analytics platform with a live, real-time dashboard.",
    description:
      "Two React 19 + Vite SPAs — a demo app embedding a custom tracking SDK, and a dashboard that streams events over Socket.io the instant they're ingested, no polling. The dashboard is built around a swappable DataService interface, so the entire UI (stat cards, time-series charts, event breakdown via recharts) runs standalone against a mock data stream behind a single env flag, with zero backend required. On the SDK side, track() calls are queued in localStorage and flushed in batches, so events survive refreshes and flaky networks before they ever hit the wire.",
    highlights: [
      "React 19 + Vite + Tailwind, zero router — everything composed in a single App.tsx per app",
      "Live updates via Socket.io subscription, not polling — UI reacts to inserts in real time",
      "DataService abstraction: apiDataService / mockDataService swap behind one interface",
      "Custom embeddable SDK: batched, retry-safe localStorage queue with offline resilience",
      "Shared compile-time types (@lumen/shared-types) keep dashboard and backend in sync",
    ],
    url: "https://lumen.sanjaykrishnan.fyi",
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-header">Projects</h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-zinc-200/20 rounded-lg p-6 hover:bg-sidebar transition-colors"
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-xl font-semibold text-text">{project.name}</h2>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:underline"
              >
                {project.url}
              </a>
            </div>

            <p className="text-text/80 font-medium mt-2">{project.tagline}</p>
            <p className="text-text/60 mt-3 leading-6">{project.description}</p>

            <ul className="mt-4 space-y-1.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-text/70 leading-6">
                  <span className="text-accent">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
