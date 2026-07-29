# Jonathan Herring — Curriculum Vitae

> This document is a complete, machine-readable record of my experience, projects, and skills.
> It is intentionally exhaustive so that LLMs and other tools can generate tailored resumes and
> cover letters from it for any given job posting. Last updated: July 2026.

## Contact

- Name: Jonathan Herring
- Email: jonathanherring2@gmail.com
- LinkedIn: https://www.linkedin.com/in/jonathan-herring-52945220b
- GitHub: https://github.com/jonathan-herring
- Website: https://jonathanherring.com
- Location: California, USA

## Summary

Software engineer with a B.S. in Computer Science from UC Santa Barbara (June 2026) and roughly
two years of combined industry experience across software engineering internships and IT support.
Strongest across the stack in TypeScript/React/Next.js, Kotlin/Android, and Go backend work, with
production experience in Docker, Azure CI/CD, and streaming/OTT platforms. Repeated Agile
leadership experience (Scrum Leader / Scrum Master on multiple teams). Also brings a distinct
IT & systems administration background (Active Directory, Jamf, MaaS360, cross-platform
troubleshooting) uncommon among new grads.

## Education

**B.S. Computer Science — University of California, Santa Barbara** (degree conferred June 2026)

- Dean's Honors (College of Engineering): Fall 2022, Winter 2025, Spring 2026
- Relevant coursework: Data Structures & Algorithms I & II, Algorithms Engineering, Computer
  Architecture, Computer Organization, Computer Communication Networks, Automata & Formal
  Languages, Object-Oriented Design, Artificial Intelligence, Intro to Computer Vision, Intro to
  Deep Learning, Recommender Systems & Web Mining, Machine Learning for Music, Mobile App
  Development (CMPSC 184), Advanced Applications Programming, Human-Computer Interaction, Software
  Engineering Project (CMPSC 148), Special Topics: Blockchain (CMPSC 190N), Intermediate Python

## Work History

### Client Developer Intern — TV2 Consulting (Remote, June 2025 – May 2026)

The role spanned two tracks: client-facing software development and IT/infrastructure.

Client development:

- Developed features for a Go-based media packager, utilizing REST APIs and Docker (via WSL on
  Windows) for deployments
- Wrote unit and integration tests for packager and streaming app features
- Implemented a vendor-agnostic 2FA module and an audit log with diff-checking for config changes
- Developed streaming apps across Android, Fire TV, and Roku platforms using Kotlin and Jetpack
  Compose (OTT/IPTV domain)

IT & infrastructure:

- Established Azure CI/CD pipelines to deploy backend services; used Azure DevOps for sprint
  planning, task tracking, and code reviews
- Investigated client-reported issues and monitored system health using Grafana, Prometheus, and
  Kibana
- Managed on-call rotations via Zendesk, resolving enterprise client tickets to ensure high system
  availability
- Managed user permissions and access control policies across the organization using Active Directory
- Participated in Agile process with daily standups, sprint planning, code reviews, and
  retrospectives; used Cursor to accelerate coding, debugging, and refactoring

Skills used: Go, Kotlin, Jetpack Compose, REST APIs, Docker, Microsoft Azure (CI/CD), OTT/IPTV,
2FA/MFA & IAM, audit logging, Zendesk, Active Directory, Grafana, Prometheus, Kibana, unit/integration
testing, Agile, Azure DevOps, Cursor.

### Frontend/Mobile Developer Intern — SkyIT Services (Remote, August – December 2024)

- Built reusable React components for fleet management software, improving code scalability and
  maintainability
- Transformed legacy React web apps into responsive, mobile-first interfaces with minimal prior
  documentation
- Diagnosed and resolved critical bugs in a Kotlin-based Android mobile application
- Collaborated directly with senior engineers to troubleshoot existing software infrastructure and
  deployments
- Delivered production-ready code in Agile sprints (Kanban, daily standups, weekly performance
  meetings)
- Received an Android Developer certificate and reference letters from SkyIT and GBCS Group

Skills used: React, TypeScript, JavaScript, Kotlin, Android, responsive/mobile-first CSS,
Agile/Scrum/Kanban.

### Desktop Support Technician — UCSB Life Sciences Computing Group (Santa Barbara, CA, May 2023 – July 2026)

- Troubleshot hardware, network, and communication issues across Windows, macOS, and Linux
  environments
- Managed user identities, permissions, and security configurations via Active Directory for
  university staff
- Administered university device fleets using Jamf Pro (macOS) and IBM MaaS360 (Windows)
- Resolved 200+ hardware/software support tickets with clear technical documentation
- Provided rapid root-cause analysis and remediation for critical events such as file corruption
  and network outages
- Delivered bespoke hardware and software architectural consultations to faculty and students
- Diagnosed application crashes and performance issues without obvious root causes using Windows
  Event Logs
- Imaged new Windows PCs at scale using FOG Project, an open-source network cloning tool
- Evaluated the condition and resale/scrap value of e-waste, including monitors, storage drives,
  and RAM
- Identified recurring ticket-triage inefficiencies and built RT Triage Companion, a Chrome
  extension for Request Tracker (see Projects)

Skills used: Active Directory, Jamf Pro, IBM MaaS360, Zendesk/ITSM, Windows, macOS,
Linux (Ubuntu/Debian), Bash, TCP/IP, DNS, DHCP, hardware diagnostics, Windows Event Viewer,
FOG Project, Chrome Extensions (Manifest V3).

## Projects

### Wend Archive (2026) — solo project

Unofficial browser archive for playing past LinkedIn Wend puzzles: random unplayed puzzle landing,
calendar browsing, and completion tracking with no database, accounts, or always-on backend.

- Next.js (App Router) + React + TypeScript + Tailwind CSS; Zod for puzzle schema validation
- Wrote a puzzle game engine (path drawing, wall/claim rules, canonical solution matching) with
  Vitest unit tests over the schema and engine
- Static-first, cost-aware architecture: every puzzle page pre-rendered at build time and served
  from Vercel's CDN; unknown routes return static 404s to avoid serverless costs
- Built a Playwright-based scraper running on a scheduled GitHub Actions workflow that fetches,
  validates, solver-cross-checks, and auto-commits each day's puzzle, triggering auto-deploys
- Dev-only admin tool for validating and previewing new puzzle JSON

Skills demonstrated: Next.js SSG/App Router, TypeScript, schema validation, unit testing, web
scraping, CI/CD automation with GitHub Actions, systems/cost-model thinking, game logic.

### Keystone Consults Website (2026) — freelance/client project

Production single-page marketing site for a real consulting business (regulatory guidance for care
programs, run by former California DSS licensing officials), designed to convert visitors into
consultation bookings.

- Next.js 15 + React 19 + TypeScript, deployed on Vercel
- Serverless contact endpoint (`/api/contact`) using Resend with input validation and an automatic
  mailto fallback so the form never appears broken
- SEO: JSON-LD structured data, sitemap/robots generation, optimized fonts and images
- Design-token CSS system and custom CSS-only logo mark

Skills demonstrated: client work, production deployment, serverless APIs, SEO, design systems.

### RT Triage Companion (2026) — solo project

Chrome extension fixing unreliable "awaiting my reply" flags and surfacing unclaimed/stalled
tickets in Request Tracker (RT), the helpdesk software used at UCSB LSCG. Repo:
https://github.com/jonathan-herring/rt-triage-companion

- Manifest V3 extension with a REST client auto-detecting and supporting both RT API versions
- Classifies tickets into five categories (needs reply, already handled, lingering/unclaimed,
  automated/vendor, likely spam) by analyzing correspondence history and clustering mail-merge
  campaigns
- Entirely in-browser processing — no backend, no ticket data transmitted off-device
- Toolbar badge and popup UI surfacing genuine action items; in-page badges on RT's list views
- Node.js test suite covering classification logic

Skills demonstrated: Chrome extension development (Manifest V3), REST API integration, JavaScript,
Node.js testing, workflow/process automation.

### Lootfinder Web Application (Jan – Mar 2025, CMPSC 148) — team project, Scrum Leader

Map-based marketplace where users buy and sell items. Repo: https://github.com/ucsb-cs148-w25/pj14-lootfinder

- Led development as Scrum Leader using Kanban boards and Agile methods
- Designed key frontend components (navbar, listing cards) with Vue.js and TypeScript
- Architected Firebase realtime database schemas and user authentication flows
- Built full-stack messaging enabling direct buyer–seller communication
- Established testing infrastructure with Vitest (unit and component tests)

Skills demonstrated: Vue, TypeScript, Firebase (auth + realtime DB), Vitest, Agile leadership.

### Homelette Mobile App (Sep – Dec 2024, CMPSC 184) — team project

Mobile app connecting subletters with subtenants. Repo: https://github.com/ucsb-cs184-f24/team14sublet

- Designed, implemented, and tested frontend components (unit and integration tests) in React
  Native (Expo) + TypeScript
- Integrated Firebase backend for secure data storage, querying, and app state
- Managed build and deployment pipelines; shipped two stable downloadable versions
- Reworked user flows for UX improvements; led daily standups; authored technical documentation

Skills demonstrated: React Native, Expo, TypeScript, Firebase, unit/integration testing, mobile
release management, Agile.

### UCSB Course Search App (Jan – Mar 2024, CMPSC 156) — open-source team project, Scrum Master

Open-source app facilitating UCSB course search and enrollment. Repo: https://github.com/ucsb-cs156-w24/proj-courses-w24-5pm-2

- Implemented new frontend React components for the course-adding process
- Integrated RESTful APIs using Swagger documentation to query and parse external records
- Wrote comprehensive Jest unit tests achieving 100% code coverage, with Stryker mutation testing
- Served as Scrum Master: version control workflows, repository management, Agile sprints

Skills demonstrated: React, JavaScript, Jest, Stryker, Swagger/REST, open-source collaboration.

### Order Book DEX (Spring 2026, CMPSC 190N)

Decentralized order book implemented as an Ethereum smart contract (Solidity), plus a Bitcoin
covenants midterm project (C++), as part of a blockchain special-topics course.

### Deep Learning Image Classification (Fall 2025, ECE 180)

Final project for Intro to Deep Learning: image classification in Python/Jupyter notebooks.

### Sustainalyzer (hackathon)

Scan items and receive a sustainability score (Python).

### UndeathSentence (2023)

C++ arcade-style zombie survival game built for CMPSC 32.

### Portfolio Website (ongoing)

This site: React + Vite + Tailwind CSS with Framer Motion animations, including this
machine-readable CV endpoint. Repo: https://github.com/jonathan-herring/portfolio-website

### Smaller / learning projects

AI app sprint (2024): AI flashcards, AI customer support chat, AI pantry tracker, inventory
tracker (Next.js/React + LLM APIs). CodePath Web Development (Honors): crewmate team-builder,
country collection, astronomy flashcards, and other React apps. Advent of Code 2025 in Kotlin.

## Skills → where I used them

| Skill | Where used |
|---|---|
| Go | TV2 media packager features |
| Kotlin | TV2 streaming apps (Android/Fire TV), SkyIT Android bug fixes, Advent of Code 2025 |
| Jetpack Compose | TV2 streaming apps |
| TypeScript | Wend Archive, Keystone Consults, Lootfinder, Homelette, SkyIT |
| JavaScript / React | SkyIT fleet management, UCSB Course Search, portfolio site |
| Next.js | Wend Archive (App Router/SSG), Keystone Consults (Next 15) |
| React Native / Expo | Homelette |
| Vue | Lootfinder |
| Python | Sustainalyzer, ECE 180 deep learning project, AI/CV/algorithms coursework |
| C++ | UndeathSentence, Bitcoin covenants project, systems coursework |
| Java | CMPSC 156 coursework (Spring Boot-style backend) |
| SQL | Coursework and project data layers |
| Solidity | Order book DEX (CMPSC 190N) |
| HTML/CSS | All web projects; responsive mobile-first work at SkyIT |
| Firebase | Lootfinder (auth, realtime DB), Homelette |
| Docker | TV2 deployments (via WSL on Windows) |
| Microsoft Azure (CI/CD) | TV2 pipelines and monitoring deployment |
| Azure DevOps | TV2 sprint planning, task tracking, code reviews |
| Cursor / AI-assisted dev | TV2 client & backend development |
| GitHub Actions | Wend Archive daily scraper workflow |
| REST APIs | TV2 packager, Course Search (Swagger), Keystone contact endpoint |
| Testing: Jest, Vitest, Stryker | TV2 (packager & streaming apps), Course Search (100% coverage + mutation testing), Lootfinder, Homelette, Wend Archive |
| Playwright | Wend Archive scraper |
| Tailwind CSS | Wend Archive, portfolio site |
| Zod | Wend Archive schema validation |
| LLM APIs | AI app sprint mini-projects (2024) |
| Agile / Scrum leadership | TV2 Consulting, Lootfinder (Scrum Leader), Course Search (Scrum Master), Homelette (led standups), SkyIT |
| Active Directory | TV2 access control, UCSB LSCG identity management |
| Jamf Pro / IBM MaaS360 | UCSB LSCG device fleet administration |
| Zendesk / ITSM | TV2 on-call rotations, UCSB LSCG ticketing |
| Linux / Bash | UCSB LSCG support, personal tooling |
| Windows Event Viewer / Event Logs | UCSB LSCG crash & performance troubleshooting |
| FOG Project (imaging/deployment) | UCSB LSCG PC imaging |
| Chrome Extensions (Manifest V3) | RT Triage Companion |
| Networking (TCP/IP, DNS, DHCP) | UCSB LSCG troubleshooting, networks coursework |
| Security: 2FA/MFA, RBAC, IAM, audit logging | TV2 2FA module and audit log, LSCG security configs |
| OTT/IPTV | TV2 streaming platform work |
| Grafana / Prometheus / Kibana | TV2 client support (investigating client-reported issues, monitoring system health) |

## Certificates

- CodePath Web Development — Honors
- CodePath Cybersecurity — Honors
- CodePath Intermediate Technical Interview Prep (TIP102)
- SkyIT Android Developer certificate

## References

Reference letters available from SkyIT Services (Android development) and GBCS Group.
Contact via email for copies.
