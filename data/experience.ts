export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Intern",
    org: "Miraz Teknoloji",
    period: "August 2025",
    points: [
      "Built user interfaces in React, including a dream-journal app with ChatGPT API integration, deployed on Vercel",
      "Set up a React Native + TypeScript environment and worked with core components (Text, Image, Button, FlatList, Switch)",
      "Worked on image processing",
      "Built a WordPress content and site management project (articles, pages, users, Elementor, header/footer, menus)"
    ]
  },
  {
    role: "Web Development Intern",
    org: "Speed Of Light",
    period: "August 2024",
    points: [
      "Learned Git/GitHub version control — repositories, commits, pushes, and pulls — for project tracking",
      "Worked on product matching, stock tracking, and order management across marketplaces (Trendyol, Hepsiburada, N11, Çiçeksepeti, PTT AVM)",
      "Built responsive interfaces with HTML5 and CSS3 (Flexbox, Grid, animations, media queries)",
      "Built interactive UI components with jQuery, Owl Carousel, SweetAlert2, Tippy.js, and Micron.js",
      "Developed backend features in PHP (OOP), connecting to MySQL via mysqli and PDO",
      "Built a responsive Bootstrap site with navbar, card, form, and button components"
    ]
  }
];
