import profilePhoto from "../assets/profile.jpg"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/sanjaykrishnan-Tech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanjaykrishnane/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:er.sanjaykrishnan@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m4 6 8 7 8-7" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
        <img
          src={profilePhoto}
          alt="Sanjay Krishnan"
          className="w-28 h-28 rounded-full object-cover border border-text/10 shrink-0"
        />
        <div>
          <h1 className="text-4xl font-bold text-header">About Me</h1>
          <p className="text-text/70 mt-1">
            Frontend Software Engineer · React · TypeScript · GraphQL
          </p>
          <div className="flex items-center gap-4 mt-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text/70 hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 leading-8">
        <p>
          I'm a Frontend Software Engineer with 2.5+ years building and operating
          production SaaS applications with React, TypeScript, JavaScript, and
          GraphQL. I like owning complex features end-to-end — frontend architecture,
          analytics platforms, third-party integrations, and application observability
          — while working closely with customers and cross-functional teams. 
          <br />
          <br />
          I may not know every syntax by heart, but I can ship fast — I know how
          to find what I need and get it into production.
          <br />
          <br />
        </p>

        <p>
          At Beamer / Userflow, I architected bidirectional Mixpanel synchronization
          across the product, designed a global analytics filtering system that saw
          90%+ adoption among paying companies, and built an internal AI-powered
          support intelligence platform from the ground up using React, the AI SDK,
          Python, OpenAI, and Pinecone. I've also owned production signup and
          onboarding flows, and set up observability across the stack with Sentry,
          Elasticsearch/Kibana, and Grafana.
        </p>

        <p>
          I'm fascinated by the layers beneath modern frontend development —
          browser internals, rendering, React internals, build tools, and
          performance — and I write about what I learn along the way. Outside of
          software, I enjoy tinkering with robotics, Raspberry Pi projects, and
          3D printing.
        </p>

        <p>
          I'm an India Winner of the Smart India Hackathon, where I built an
          automated end-to-end system for chemical packaging, and I've picked up a
          few more hackathon wins along the way building IoT platforms and AI-driven
          tools.
        </p>

        <p>
          Have a look at my{" "}
          <a href="/resume" className="text-accent underline underline-offset-2">
            resume
          </a>{" "}
          for the full picture, or find me on{" "}
          <a
            href="https://github.com/sanjaykrishnan-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/sanjaykrishnane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  )
}
