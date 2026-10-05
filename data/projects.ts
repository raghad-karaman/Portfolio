import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "blood-donation-management-system",
    name: "Blood Donation Management System",
    tagline: "An AI-assisted health platform for blood stock forecasting, donor prioritization, and crisis coordination",
    summary:
      "A healthcare platform that brings donors, patients, hospitals, and blood-center staff onto one system — forecasting stock shortages, prioritizing which donor to contact next, and coordinating the response when a shortage becomes a crisis.",
    description: [
      "Blood donation systems lose time in predictable places: stock levels are tracked reactively instead of forecast ahead of time, deciding which donor to call next is largely manual, cold-chain handling isn't monitored in real time, and coordination between hospitals, blood centers, and call-center staff happens across disconnected channels. This graduation project was built to close those gaps with one platform and a decision-support layer on top of it, covering five user roles: donor and patient (mobile), and admin, moderator, and staff (web).",
      "The platform has three parts: a React Native + TypeScript mobile app for donors and patients, a Next.js 14 + Tailwind CSS web panel for admin/moderator/staff roles, and a FastAPI (Python 3.11+, AsyncIO) backend that serves both over a REST API. PostgreSQL 15+ holds the data — more than 60 related tables covering users, donors, appointments, blood stock, cold-chain sensor readings, campaigns, loyalty scoring, crisis events, and route-optimization results.",
      "The decision-support layer is where most of the engineering went, and it's built as several purpose-built models rather than one black box. The project doesn't have real users yet, so every model here was trained and evaluated on synthetic donor, appointment, and blood-stock datasets I generated myself, not live production data. A LightGBM/Random Forest ensemble predicts no-show risk for appointments; an XGBoost model predicts how likely a donor is to respond to a request (AUC 0.913 in evaluation). Stock levels are forecast 7–30 days out with an ARIMA(1,1,1)/Prophet/LSTM ensemble (ARIMA alone reaches R² = 0.890 on the stock series). For deciding who to contact first, a hybrid ranker blends a rule-based score (blood-type compatibility, urgency) with a learned score using AHP-derived criteria weights and TOPSIS ranking — validated against domain experts with a consistency ratio of 0.0052. K-Means clustering segments donors into behavioral groups (best silhouette score 0.316 at K=4), and an Apriori model mines association rules in donation behavior for campaign targeting.",
      "A graph neural network (GraphSAGE) for donor-request matching exists as a research prototype: it reaches 78% accuracy in lab testing, but at ~2.3s inference time it doesn't yet meet the sub-500ms production bar, so it isn't wired into the live matching flow — the hybrid ranker handles the current matching flow. The same honesty applies to route optimization: a web dashboard compares four algorithms (A*, Tabu Search, Google Routes API, Google Fleet Routing) side by side for planning mobile blood-drive routes, but v1.0 only optimizes a single vehicle at a time; multi-vehicle fleet routing is scoped for v2.0.",
      "Beyond the core ML layer, the system also includes a crisis decision-support flow (automatic shortage detection → Monte Carlo risk simulation → AHP-based prioritization → automated campaign/notification), GPS-based cold-chain traceability with sensor alerts, a Bayesian-network risk model, a donor loyalty/gamification system (badges, leaderboard), and FHIR/HL7-based integration hooks for exchanging data with external health systems. Every ML module is exposed through a 13-tab analytics dashboard in the web panel, including an explainable-AI view that shows which features drove each model's predictions."
    ],
    role:
      "Solo graduation project — designed and built the full system end to end: the PostgreSQL schema, the FastAPI backend and its ML services, the Next.js admin/moderator/staff panel, the React Native donor/patient app, and the decision-support layer described above.",
    impact:
      "A 60+ table data model, mobile application, web admin panel, backend API, and AI-assisted decision-support layer, bringing data, users, and operational workflows into one system.",
    type: "Graduation Project",
    status: "In active development",
    statusNote:
      "The project is currently being prepared for a TÜBİTAK application, following my advisor's recommendation. Source code is kept private ahead of that process, but I'm glad to walk through the architecture and code in an interview.",
    technologies: [
      "React Native",
      "TypeScript",
      "Next.js 14",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "PyTorch",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "ARIMA / Prophet / LSTM",
      "AHP + TOPSIS",
      "K-Means",
      "Apriori",
      "GraphSAGE (GNN)",
      "Bayesian Networks",
      "Monte Carlo simulation",
      "Tabu Search / A*",
      "Google Routes API",
      "FHIR / HL7"
    ],
    features: [
      "No-show risk prediction for appointments (LightGBM/Random Forest)",
      "Donor response-likelihood prediction (XGBoost, AUC 0.913)",
      "7–30 day blood-stock forecasting (ARIMA/Prophet/LSTM ensemble)",
      "Hybrid donor prioritization — rule-based + AHP/TOPSIS + ML ranking",
      "K-Means donor segmentation and Apriori association-rule mining",
      "GNN-based donor matching, tracked openly as a research prototype",
      "Crisis decision support: automatic detection → Monte Carlo simulation → AHP prioritization → automated outreach",
      "GPS-based cold-chain traceability with live sensor alerts",
      "Multi-algorithm route-optimization comparison for mobile blood drives (A*, Tabu Search, Google Routes/Fleet)",
      "Donor loyalty scoring, badges, and leaderboard",
      "13-tab ML analytics dashboard with an explainable-AI view",
      "FHIR/HL7 integration hooks for external health systems"
    ],
    architecture: [
      "React Native + TypeScript mobile app for donor and patient roles",
      "Next.js 14 + TypeScript + Tailwind CSS web panel for admin, moderator, and staff roles",
      "FastAPI (Python 3.11, AsyncIO) service layer — auth, business logic, and a dedicated ML services module",
      "PostgreSQL 15+ with 60+ related tables as the persistence layer",
      "A model layer of purpose-built services (no-show, response, stock-forecast, hybrid-ranker, GNN-matcher, Bayesian network) sitting behind the API, each independently evaluated"
    ],
    metrics: [
      { label: "Response Predictor AUC", value: "0.913" },
      { label: "ARIMA stock-forecast R²", value: "0.890" },
      { label: "Hybrid ranking vs. baseline (Spearman ρ)", value: "0.921" },
      { label: "Donor segmentation (K-Means silhouette, K=4)", value: "0.316" },
      { label: "GNN matching prototype accuracy (lab)", value: "78%" }
    ],
    challenges: [
      {
        challenge:
          "No-show prediction started out nearly useless: only 3% of appointments are actual no-shows, so the first model just learned to always predict 'will show up' (F1 of 7.7% on the minority class).",
        solution:
          "Documented the failure honestly rather than hiding it behind accuracy, and used it to scope the fix: SMOTE oversampling plus threshold tuning brought the minority-class F1 to roughly 35% in lab testing — good enough to keep improving, not yet good enough to fully automate on."
      },
      {
        challenge:
          "The GraphSAGE-based donor-matching model looked promising (78% accuracy) but ran at ~2.3s per inference — far past the sub-500ms bar needed for a live matching flow.",
        solution:
          "Kept it out of production rather than shipping a slow or misleading feature: it's clearly labeled as a research prototype in the UI, while a hybrid AHP+TOPSIS+ML ranker handles real donor prioritization today."
      },
      {
        challenge:
          "Full multi-vehicle route optimization for the mobile blood-drive fleet was out of scope for a one-person v1.0 given time and infrastructure budget.",
        solution:
          "Shipped a single-vehicle comparison dashboard (A*, Tabu Search, Google Routes, Google Fleet side by side) that's genuinely useful today, and scoped multi-vehicle VRP optimization as a defined v2.0 milestone instead of an unfinished promise."
      }
    ],
    links: {
      report: "https://drive.google.com/file/d/1moAG5UgoCvhBS5ChxPhwOv6mI3CkAqV1/view?usp=sharing"
    },
    featured: true,
    year: "2025–2026"
  },
  {
    slug: "fitai-fashion-ecommerce",
    name: "FitAI",
    tagline: "An AI-powered SaaS concept that helps online fashion sellers cut wrong-size returns",
    summary:
      "A multi-tenant platform for online fashion sellers — scoring how well a product fits a shopper's body type, reading customer reviews with Turkish NLP, and giving the seller an admin dashboard. Built by a 7-person team (web, AI, and mobile sub-teams); I was on the 3-person web team as the UI/UX designer.",
    description: [
      "Wrong-size returns are one of the most expensive problems in online fashion retail — shoppers can't judge their own measurements against a cut, fabric quality is hard to convey in a product photo, and by the time a return happens, the seller has already absorbed the shipping and restocking cost. FitAI is built for the seller's side of that problem: it isn't a new storefront, but a layer designed to sit next to a seller's existing shop on marketplaces like Trendyol, Hepsiburada, Shopify, or WooCommerce.",
      "The project was built by seven people in three sub-teams: web (3), AI (2), and mobile (2). The web panel for sellers and admins runs on ASP.NET Core with the ABP Framework, Razor Pages, and an EF Core multi-tenant data layer that keeps every store's data isolated. The AI layer is two Python/FastAPI services: a Random Forest fit-score model (0–100, plus a return-risk level derived from the score) and a review-analysis service that combines a pre-trained Turkish BERT sentiment model with rule-based theme detection. The Flutter mobile app was built by the mobile team.",
      "How it works today: a shopper picks a body type (manual selection — automatic camera-based detection is a scoped bonus feature, not shipped) and pastes a Trendyol or Hepsiburada product link; the AI service scrapes the page for the cut and fabric hints and returns the score, return risk, and advice. Shopify and WooCommerce are planned adapters, not implemented. The fit model was trained on a small synthetic dataset (9 body types × 3 cuts, with expert-assigned scores), so it demonstrates the approach rather than predicting from real return data. Sellers can also adjust recommendation weighting through natural-language commands such as 'raise oversize scores by 20%' (what we called Adaptive AI).",
      "The admin dashboard covers stores, products, users, commissions, notifications, AI instructions, and review management, plus a four-tab analytics page. To be clear about its state: only the review and NLP analytics are backed by the API; the revenue, commission, store-comparison, and dashboard KPI figures are sample data (the screens fall back to demo values if the API is unavailable). Read it as a working prototype, not production analytics."
    ],
    role:
      "One of seven team members; on the three-person web team I was responsible for UI/UX — drafted the design plan for the web pages, designed the interfaces (login/register, dashboard, user panel, stores, product add/list/detail, reviews, charts, and the analytics screens), integrated the AI algorithms' outputs into the frontend, and prepared the presentation documents. The backend and API were built by a teammate, the AI services by the AI sub-team, and the Flutter app by the mobile sub-team.",
    impact:
      "Turns 'will this fit?' into a 0–100 score and a return-risk level a seller can act on, without asking them to leave the marketplace they already sell on.",
    type: "Group Project",
    status: "Completed",
    statusNote:
      "The GitHub repository contains the web panel and AI service folders of the team project. The Flutter mobile app lives in a separate repository maintained by the mobile team.",
    technologies: [
      "ASP.NET Core (ABP Framework)",
      "Razor Pages",
      "EF Core",
      "JavaScript",
      "Chart.js",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Random Forest",
      "BERT",
      "REST API"
    ],
    features: [
      "0–100 fit-compatibility score from body type vs. product cut/fabric, with a return-risk level",
      "Product-link analysis for Trendyol and Hepsiburada (page scraping); Shopify and WooCommerce planned",
      "Turkish review analysis — sentiment (pre-trained BERT) and rule-based themes such as size, fabric, fit, and returns",
      "Adaptive AI — natural-language commands adjust recommendation weighting",
      "Multi-tenant seller/admin panel: stores, products, users, commissions, notifications, AI instructions, reviews",
      "Four-tab analytics page (revenue, NLP and sentiment, store comparison, activity map) — NLP tab uses live API data, the rest is sample data",
      "Manual body-type selection today; camera-based auto-detection scoped as a future feature"
    ],
    links: { github: "https://github.com/raghad-karaman/FitAI-Web",
      report: "https://drive.google.com/uc?export=download&id=1lY2PZcRBG6kyMnRv5lRZB9K-qlTFnDyn"
    },
    featured: true,
    year: "2025"
  },
  {
    slug: "disaster-management-decision-support",
    name: "Disaster Management Decision Support System",
    tagline: "A decision-support dashboard that scores disaster regions by need and suggests which response team to send",
    summary:
      "A web-based decision support system that turns recorded needs (water, food, tents, medicine) into a priority score per region, shows the most critical regions on a map, and recommends which available response team to dispatch.",
    description: [
      "After a disaster, the hard question is where to send help first. This project (KDS stands for Karar Destek Sistemi, Turkish for decision support system) collects victim and need records per region, ranks the regions by urgency, and suggests a response team for the most critical ones. It was built as a team project around a shared MySQL database.",
      "The system has two parts. A Laravel 12 web application provides the admin panel (CRUD for regions, victims, needs, resources, distributions, relief teams, reports, and notifications), a public form for submitting need reports, and the dashboard. A separate FastAPI service holds the analysis logic and reads the same database; the dashboard consumes it over REST.",
      "The analysis is deliberately simple and transparent rather than machine-learning based. Each region gets a weighted score (water 0.20, food 0.15, tents 0.30, medicine 0.35, so medicine and shelter count most), and thresholds on that score map to four priority levels from Low to Critical. Simple rules on the region's needs then suggest team types (health, logistics, search and rescue, psychosocial).",
      "For dispatch, the team-assignment endpoint picks a target team type from the region's dominant need, then searches for a team in four stages: an available team of the right type with a known location (nearest by Haversine distance), then the same type without location data, then resting teams as well, and finally any type as a last resort. It estimates arrival time from distance at an assumed 50 km/h and stores a short text explaining why that team was chosen."
    ],
    role: "Team project — contributed to the FastAPI/Python analysis services and the Laravel–FastAPI REST integration.",
    impact:
      "Replaces gut-feel dispatch with a transparent, explainable ranking: every priority level and team choice can be traced back to a formula or rule.",
    type: "Team Project",
    status: "Completed",
    technologies: [
      "Laravel",
      "PHP",
      "FastAPI",
      "Python",
      "MySQL",
      "JavaScript",
      "Leaflet",
      "ApexCharts",
      "REST API"
    ],
    features: [
      "Weighted need score per region with four priority levels (Low to Critical)",
      "Rule-based suggestion of team types (health, logistics, search and rescue, psychosocial)",
      "Tiered team assignment: nearest suitable available team by Haversine distance, with fallbacks",
      "Estimated arrival time and a stored explanation for each assignment decision",
      "Dashboard with need totals, top regions, need and team distribution charts, and a 7-day trend",
      "Interactive Leaflet map of critical regions",
      "Admin CRUD for regions, victims, needs, resources, distributions, relief teams, reports, and notifications",
      "Public need-report form that creates the victim and need records"
    ],
    architecture: [
      "Laravel 12 web app: admin panel, public need-report form, and dashboard views",
      "FastAPI service: scoring, priority, team suggestion, and assignment logic",
      "Shared MySQL database used by both services",
      "Dashboard calls the FastAPI endpoints over REST (summary, top regions, map data, needs distribution, team status, trend, assign)"
    ],
    links: {
      github: "https://github.com/raghad-karaman/KDSProject"
    },
    featured: false,
    year: "2025"
  },
  {
    slug: "opale-store",
    name: "Opale Store",
    tagline: "E-commerce platform for luxury fashion and cosmetics",
    summary:
      "A full e-commerce platform for luxury fashion and cosmetic products, covering accounts, catalog, cart, checkout, order tracking, and admin management.",
    description: [
      "Opale Store is a complete e-commerce build covering the modules a real storefront needs: account registration and login, product and category management, a shopping cart, secure payment, order tracking, and an admin panel — built around a secure, user-friendly shopping experience."
    ],
    role: "Team project — contributed to core e-commerce modules across the Laravel/MySQL stack.",
    impact: "A full storefront-to-checkout flow built for a luxury catalog, where a clunky cart or a slow checkout is a lost sale.",
    type: "Group Project",
    status: "Completed",
    technologies: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Account registration and login",
      "Product and category management",
      "Shopping cart and secure payment",
      "Order tracking",
      "Admin management panel"
    ],
    links: {
      github: "https://github.com/raghad-karaman/Opale_Store"
    },
    featured: false,
    year: "2024"
  },
  {
    slug: "not-takip-sistemi",
    name: "Not Takip Sistemi",
    tagline: "A public course-info site and admin panel for tracking students, professors, and grades",
    summary:
      "A solo ASP.NET MVC 5 application with a public site for browsing professors, students, and course reviews, plus an admin panel for managing all of it — including grades, photos, and comment moderation.",
    description: [
      "Not Takip Sistemi (\"Grade Tracking System\") is a two-sided web app: a public site where visitors can browse a paginated directory of professors and students, read professor detail pages, and see approved reviews, and an admin panel behind email/password login where staff manage all of that data.",
      "The admin side covers full CRUD for students, professors, courses, grades, comments, and site contact info, photo uploads for professors and students, a dashboard summarizing student/professor counts and pending comment approvals, and a comment-moderation flow where a review only appears publicly once an admin approves it.",
      "Under the hood it's ASP.NET MVC 5 on .NET Framework 4.7.2, with Entity Framework 6 in Database-First mode against a SQL Server schema of nine related tables (students, professors, courses, course schedule, grades, comments, admin accounts/permissions, and site contact/about content), rendered with Razor views, Bootstrap 5, and DataTables for the list/pagination-heavy screens.",
      "I wrote the README with the same honesty I'd want from a teammate: it documents known limitations up front rather than hiding them — passwords are currently stored in plain text (hashing is the next fix), admin-page access relies on a session check in the layout rather than a per-controller authorization filter, and new admin accounts can only be added via SQL today, not through the panel itself. It's a demo/learning build, and I'd rather be upfront about exactly where it stands than overstate it."
    ],
    role:
      "Solo project — designed and built the full system end to end: the SQL Server schema, the Entity Framework data layer, every MVC controller and Razor view, and the admin panel.",
    impact:
      "A complete two-sided ASP.NET MVC app built solo, down to the database schema — and a README that documents its real limitations instead of glossing over them.",
    type: "Solo Project",
    status: "Completed",
    technologies: [
      "ASP.NET MVC 5",
      ".NET Framework 4.7.2",
      "Entity Framework 6",
      "SQL Server",
      "Razor",
      "Bootstrap 5",
      "DataTables",
      "jQuery",
      "PagedList.Mvc"
    ],
    features: [
      "Public site: home, about, and contact pages",
      "Paginated professor directory with detail pages",
      "Paginated student directory",
      "Approved review/comment display on the public site",
      "Admin dashboard — student, professor, and pending-comment counts",
      "Full CRUD for students, professors, courses, grades, comments, and contact info",
      "Photo upload for professors and students",
      "Comment moderation — a review goes public only once approved",
      "Admin accounts and permission levels (Yönetim / Yönetim Yetkisi)"
    ],
    architecture: [
      "ASP.NET MVC 5 (.NET Framework 4.7.2) backend",
      "Entity Framework 6, Database-First (Model1.edmx) against SQL Server",
      "Nine-table relational schema: Ogrenciler, Hocalar, Dersler, DersProgrami, Notlar, Yorumlar, Yonetim/YonetimYetkisi, İletisim/Hakkimda",
      "Razor views with Bootstrap 5, DataTables, and PagedList.Mvc for listing and pagination"
    ],
    links: {
      github: "https://github.com/raghad-karaman/AspNot"
    },
    featured: false,
    year: "2024"
  }
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);