// Resume.tsx

const skills = [
  { label: "Languages", value: "TypeScript, JavaScript, Node.js (Working Knowledge: Python, Elixir)" },
  { label: "Frontend", value: "React, React Hooks, D3.js, Tailwind CSS, Vite, HTML5, CSS3" },
  { label: "APIs & Data", value: "GraphQL, REST APIs" },
  { label: "Analytics & Integrations", value: "Mixpanel, Heap, Segment, Google Tag Manager, Intercom, HubSpot, Zapier, Stripe" },
  { label: "Observability", value: "Sentry, Grafana, Elasticsearch, Kibana" },
  { label: "AI", value: "OpenAI APIs, AI SDK, Pinecone" },
  { label: "Engineering", value: "Git, CI/CD, Performance Optimization, Frontend Observability, Production Debugging, Dependency & Security Management" },
]

const experience = [
  "Architected and led the frontend implementation of bidirectional Mixpanel synchronization across the product. Designed shared object-mapping infrastructure and schemaless data flows supporting customers with million-scale users and events.",
  "Designed and shipped a global analytics filtering system covering attributes, events, segments, time ranges, and grouping logic, including saved/reusable filters — driving 90%+ adoption among paying companies.",
  "Built and deployed an internal AI-powered support intelligence platform from the ground up (React, AI SDK, Python, OpenAI, Pinecone), ingesting Intercom conversations via webhooks into a conversational interface for querying historical customer interactions.",
  "Owned all production signup and onboarding flows end-to-end — Google OAuth, email verification, invitation-token signup, and company invitation workflows — across critical authentication paths.",
  "Established application observability across frontend and backend using Sentry, Elasticsearch/Kibana, and Grafana: error tracking, source-map based production debugging, CPU monitoring, product-adoption dashboards, and Slack alerting.",
  "Built complex D3.js analytics experiences with multiple metrics, dynamic filtering, grouping, and live data; extended Heap and Google Tag Manager tracking product-wide with attention to PII-safe data handling and GDPR compliance.",
  "Served as the primary technical point of contact for Support, resolving complex production issues; independently led frontend dependency and security upgrades across Vite, Rollup, TypeScript, and related tooling.",
]

const achievements = [
  "India Winner, Smart India Hackathon (SIHHW/20/54) — built an automated end-to-end system for chemical packaging (nano urea), competing nationally against teams across India.",
  "Delta Automation International Hackathon — built an end-to-end Industrial IoT platform (LAMP stack) integrating robotics with IIoT dashboards; enabled Amazon-style ordering where a placed order routed directly to a 3D-print job queue.",
  "Internal Hackathon — designed an AI-based \"Smartflow\" creator to auto-generate in-product user flows.",
  "Internal Hackathon — built an MCP agent integrated with the company's Userflow AI adoption agent, enabling end users to complete real-world tasks (e.g., booking appointments via the Calendly MCP) without leaving the chat interface.",
]

export default function Resume() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h1 className="text-4xl font-bold text-header">Sanjay Krishnan</h1>
        <a
          href="/Sanjay_Krishnan_Resume.pdf"
          download="Sanjay_Krishnan_Resume.pdf"
          className="shrink-0 inline-flex items-center gap-2 rounded-md border border-accent text-accent px-4 py-2 text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
        >
          Download PDF
        </a>
      </div>
      <p className="text-text/70 mb-1">
        Frontend Software Engineer · React · TypeScript · JavaScript · GraphQL
      </p>
      <p className="text-text/60 text-sm mb-8">
        Tamil Nadu, India · 9080565495 · er.sanjaykrishnan@gmail.com
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3 text-accent">Summary</h2>
        <p className="leading-7 text-text/90">
          Frontend Software Engineer with 2.5+ years building and operating production
          SaaS applications with React, TypeScript, JavaScript, and GraphQL. Track
          record of owning complex features end-to-end — frontend architecture,
          analytics platforms, third-party integrations, and application observability
          — while working directly with customers and cross-functional teams.
          Immediate joiner, open to Frontend Engineer, SDE1, and SDE2 roles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3 text-accent">Experience</h2>
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-semibold text-text">Beamer / Userflow — Software Development Engineer</h3>
          <span className="text-sm text-text/60 whitespace-nowrap ml-4">Feb 2024 – Aug 2026</span>
        </div>
        <p className="text-sm text-text/60 mb-3">Remote</p>
        <ul className="list-disc pl-5 space-y-2 leading-7 text-text/90">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3 text-accent">Technical Skills</h2>
        <div className="space-y-2">
          {skills.map((skill) => (
            <p key={skill.label} className="leading-6">
              <span className="font-semibold text-text">{skill.label}: </span>
              <span className="text-text/80">{skill.value}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3 text-accent">Achievements & Hackathons</h2>
        <ul className="list-disc pl-5 space-y-2 leading-7 text-text/90">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3 text-accent">Education</h2>
        <p className="text-text/90">Bachelor of Engineering (B.E.) — Anna University</p>
        <p className="text-text/60 text-sm">Tamil Nadu, India</p>
      </section>
    </div>
  )
}
