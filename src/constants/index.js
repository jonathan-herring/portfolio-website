export const HERO_CONTENT = `I'm a software engineer with a B.S. in Computer Science from UC Santa Barbara (June 2026). Over the past year at TV2 Consulting I built streaming apps for Android, Fire TV, and Roku, backend features in Go, and Azure CI/CD infrastructure. Before that I shipped production frontend and mobile work at SkyIT Services. I build across the stack — Go, Kotlin, TypeScript, React, Next.js — and I like building things that actually get used.`;

export const EXPERIENCES = [
  {
    year: "June 2025 – May 2026",
    role: "Client Developer Intern",
    company: "TV2 Consulting",
    location: "Remote",
    description: `Client development: built features for a Go-based media packager using REST APIs and Docker (via WSL on Windows), wrote unit and integration tests for packager and streaming app features, implemented a vendor-agnostic 2FA module and an audit log with diff-checking for config changes, and developed streaming apps across Android, Fire TV, and Roku using Kotlin and Jetpack Compose. IT & infrastructure: established Azure CI/CD pipelines to deploy backend services, used Grafana, Prometheus, and Kibana to investigate client-reported issues and monitor system health, handled on-call rotations for enterprise clients via Zendesk, managed permissions and access control with Active Directory, and worked in an Agile process with daily standups, sprints, and retrospectives.`,
    technologies: ["Go", "Kotlin", "Jetpack Compose", "Docker", "Azure", "REST APIs", "Zendesk", "Active Directory", "Grafana", "Prometheus", "Kibana", "Agile"],
  },
  {
    year: "August – December 2024",
    role: "Frontend/Mobile Developer Intern",
    company: "SkyIT Services",
    location: "Remote",
    description: `Built reusable React components for fleet management software, improving code scalability and maintainability. Transformed legacy React web apps into responsive, mobile-first interfaces with minimal prior documentation. Diagnosed and resolved critical bugs in a Kotlin-based Android mobile application to improve user experience. Delivered production-ready code in Agile sprints using a Kanban-style system with daily standups.`,
    technologies: ["React", "Kotlin", "TypeScript", "Agile"],
  },
  {
    year: "May 2023 – June 2026",
    role: "Desktop Support Technician",
    company: "UCSB Life Sciences Computing Group",
    location: "Santa Barbara, CA",
    description: `Troubleshot hardware, network, and communication issues across Windows, macOS, and Linux environments. Managed user identities, permissions, and security configurations via Active Directory. Administered university device fleets using Jamf Pro (macOS) and IBM MaaS360 (Windows). Provided rapid root-cause analysis for 50+ urgent tickets, including file corruption and network outages, and delivered hardware and software consultations to faculty and students.`,
    technologies: ["Active Directory", "Jamf Pro", "IBM MaaS360", "Zendesk", "Linux"],
  },
];

export const PROJECTS = [
  {
    title: "Wend Archive",
    description:
      "A browser archive of past LinkedIn Wend puzzles with a full game engine, calendar, and completion tracking. Static-first Next.js architecture served from a CDN with no database, Zod-validated puzzle schemas, Vitest-tested game logic, and a Playwright scraper that runs on a daily GitHub Actions schedule to validate and auto-commit new puzzles.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Playwright", "GitHub Actions"],
  },
  {
    title: "Keystone Consults Website",
    description:
      "Production marketing site built for a real consulting business run by former CDSS licensing officials. Single-page, conversion-focused design with a serverless contact endpoint (Resend with mailto fallback), JSON-LD structured data, sitemap/robots generation, and a design-token CSS system.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Resend", "SEO"],
  },
  {
    title: "Lootfinder Web Application (CMPSC 148)",
    description:
      "A map-based marketplace where users can buy and sell items. Led development as Scrum Leader, designed key frontend components, architected Firebase realtime database schemas and auth flows, established testing infrastructure with Vitest, and built full-stack messaging between buyers and sellers.",
    technologies: ["Vue", "TypeScript", "Firebase", "Vitest"],
    github: "https://github.com/ucsb-cs148-w25/pj14-lootfinder",
  },
  {
    title: "Homelette Mobile App (CMPSC 184)",
    description:
      "A mobile app connecting subletters with subtenants. Designed, implemented, and tested frontend components (unit and integration tests), integrated the Firebase backend, managed build and deployment pipelines, and shipped two functional downloadable versions using Agile development methods.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    github: "https://github.com/ucsb-cs184-f24/team14sublet",
  },
  {
    title: "UCSB Course Search App (CMPSC 156)",
    description:
      "An open-source app facilitating the course search and enrollment process. Implemented new React components, integrated RESTful APIs via Swagger, wrote unit tests with Jest achieving 100% code coverage with Stryker mutation testing, and served as Scrum Master.",
    technologies: ["JavaScript", "React", "Jest", "Stryker", "Swagger"],
    github: "https://github.com/ucsb-cs156-w24/proj-courses-w24-5pm-2",
  },
];

export const CONTACT = {
  email: "jonathanherring2@gmail.com",
};
