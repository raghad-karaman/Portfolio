/**
 * Optional short descriptions for individual screenshots, keyed by project
 * slug and then by filename (without extension).
 *
 * How it works: when a screenshot is found in a project's public folder,
 * lib/screenshots.ts checks this file for a matching entry and uses it as
 * the caption/alt text instead of the plain filename-derived label.
 *
 * - Use the exact filenames suggested for each project and the matching
 *   description appears automatically — no other code changes needed.
 * - Use a different filename and the gallery still works fine; it just
 *   falls back to a label generated from that filename.
 * - Want your own wording, or added a screen not listed here? Add or edit
 *   an entry below — key = filename without extension, value = one short
 *   sentence describing what the screen does.
 */
export const screenshotNotes: Record<string, Record<string, string>> = {
  "blood-donation-management-system": {
    "01-admin-dashboard":
      "Admin landing page — system-wide KPIs (donors, active donors, donations, pending emergencies), a top-donor ranking panel, and a donor-satisfaction summary.",
    "02-donor-scoring-kdss":
      "Donor scoring page — ranks donors by loyalty tier and priority score, with search, filters, and at-a-glance reliability and no-show risk.",
    "03-blood-requests": "Create and track blood requests by blood type, urgency, and quantity through to fulfillment.",
    "04-crisis-management":
      "Crisis management screen — triggers the shortage-response flow: detection, Monte Carlo risk simulation, AHP-based prioritization, automated outreach.",
    "05-ml-analytics-summary":
      "ML analytics overview — one-screen summary of every model's headline metric and the next 7 days of predicted stock.",
    "06-ml-stock-ai": "Stock AI tab — per-blood-type stock cards with a 14-day forecast chart (actual vs. predicted, with confidence band).",
    "07-ml-explainable-ai": "Explainable AI tab — ranks which features drove a model's predictions, so admins can see why.",
    "08-ml-classification": "Classification tab — precision/recall/F1/AUC and ROC curves for the no-show and response-prediction models.",
    "09-ml-clustering": "Segmentation tab — K-Means donor clusters with quality metrics and each segment's profile.",
    "10-ml-gnn": "GNN tab — graph-based donor matching, clearly labeled as a research prototype, not used in production matching.",
    "11-ml-apriori": "Apriori tab — association rules mined from donor behavior, filterable by support, confidence, and lift.",
    "12-donor-list": "Full donor directory with search and filtering by city, blood type, and status.",
    "13-reports": "Reports hub — card-based access to top-donor, blood-type, badge, and leaderboard reports.",
    "14-campaigns": "Campaign management — lists all blood-drive campaigns with status and participation.",
    "15-centers": "Blood-center management — list and details for donation centers.",
    "16-mobile-units-routing":
      "Mobile blood-drive routing — compares A*, Tabu Search, Google Routes, and Google Fleet on the same route by distance, time, fuel, and accuracy.",
    "17-cold-chain-sensors": "Cold-chain monitoring — live sensor readings and GPS-based traceability for blood in transit.",
    "18-transport-requests": "Transport requests — donors needing transport support, tracked by staff.",
    "19-moderator-dashboard": "Moderator dashboard — pending request approvals and queue overview.",
    "20-moderator-notifications": "Bulk notification tool for moderators to message donor segments.",
    "21-staff-dashboard": "Staff/call-center dashboard — today's appointments and operational tasks.",
    "22-staff-donor-list": "Staff view of the donor list for call-center lookups.",
    "23-staff-stock": "Staff-level stock management and recording.",
    "24-mobile-login": "Donor/patient login — email and password, JWT-based authentication.",
    "25-mobile-donor-dashboard":
      "Donor home screen — eligibility status, stats, nearby urgent requests, nearest center, and an AI donation-timing insight.",
    "26-mobile-donation-booking": "Book a donation appointment, with an eligibility check before booking.",
    "27-mobile-blood-requests": "Emergency blood requests matching the donor's blood type.",
    "28-mobile-centers-map": "Map view of nearby blood centers.",
    "29-mobile-campaigns": "Browse and join active donation campaigns.",
    "30-mobile-crisis-mode": "Crisis-mode banner and flow for donors during an active shortage.",
    "31-mobile-leaderboard": "Donor leaderboard, ranked by donation activity.",
    "32-mobile-badges": "Earned badges and gamification progress.",
    "33-mobile-profile": "Donor profile and settings.",
    "34-mobile-patient-home": "Patient home screen — create and track blood requests.",
    "35-mobile-patient-request": "Patient's request-creation flow."
  },
  "fitai-fashion-ecommerce": {
    "01-admin-dashboard": "Admin dashboard — KPI cards, monthly commission chart, average fit score, and the fit-score/NLP AI panels.",
    "02-login": "Seller/admin login screen.",
    "03-register": "Seller/admin registration screen.",
    "04-analytics-revenue": "Revenue analytics — commission totals, a switchable trend chart, and revenue by plan tier.",
    "05-analytics-nlp-sentiment": "NLP & sentiment tab — sentiment trend, a word cloud of review themes, and per-category satisfaction.",
    "06-analytics-store-comparison": "Store comparison — a radar chart plus side-by-side metrics across stores.",
    "07-analytics-activity-map": "Geographic activity map — store locations and a sales-activity heat map.",
    "08-store-management": "Store management — list, search/filter, and add/edit/delete seller stores.",
    "09-product-list": "Product list with search and filters by cut, fabric, and status.",
    "10-product-add": "Add-product form, tied to a selected store.",
    "11-product-detail": "Product detail — fit stats, rating distribution, and the review list.",
    "12-review-management": "Review management — two tabs: raw reviews and NLP-derived findings.",
    "13-user-management": "User management — roles, status, and CRUD for platform users.",
    "14-commission-records": "Commission records — paginated table with period filtering and CRUD.",
    "15-notifications": "Notification center, filterable by channel and type.",
    "16-ai-instructions": "AI instruction management — configure and schedule the AI's automated tasks."
  },
"disaster-management-decision-support": {
    "Admin-Dashboard": "Decision-support admin dashboard — overall system KPIs, 7-day demand trend summary, demand breakdown charts, team status distribution, and Leaflet critical zones map.",
    "User-Dashboard": "Public victim request form — collects demographic info, location/district selection, item quantities (water, food, tent, medicine), and additional notes for admin dispatch.",
    "resources": "Resource inventory panel — tracks available relief materials, quantities, units, and last update dates with CRUD actions.",
    "vitcims": "Victim records list — paginated directory showing victim personal details, age, gender, contact number, assigned region, and management options.",
    "Team": "Field teams panel — tracks operational teams, team leaders, dispatch types (e.g. Health, Logistics), current deployment status, and assigned districts."
  },
  "opale-store": {
    "01-homepage": "Storefront homepage and product listing.",
    "02-product-detail": "Product detail page.",
    "03-cart": "Shopping cart.",
    "04-checkout": "Checkout and payment.",
    "05-order-tracking": "Order tracking.",
    "06-admin-panel": "Admin management panel."
  }
};
