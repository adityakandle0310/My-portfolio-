const { useEffect, useState } = React;
const h = React.createElement;

// Portfolio data: edit these arrays when you want to change skills, projects, or highlights.
const skills = [
  {
    label: "Frontend",
    title: "HTML, CSS, JavaScript, React, Next.js",
    text: "Creating responsive interfaces, clean layouts, reusable sections, and modern React-based pages.",
  },
  {
    label: "Programming",
    title: "Java and Python",
    text: "Intermediate knowledge with logic building, OOP basics, data handling, and problem solving practice.",
  },
  {
    label: "Database",
    title: "SQL Basics",
    text: "Comfortable with basic queries, tables, filtering, sorting, joins foundation, and database concepts.",
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Programming",
    items: ["Java - Intermediate", "Python - Intermediate"],
  },
  {
    title: "Database",
    items: ["SQL - Basics"],
  },
];

const stats = [
  ["HTML", "Structure"],
  ["CSS", "Design"],
  ["React", "Frontend"],
  ["Next.js", "Framework"],
  ["Java", "Intermediate"],
  ["Python", "Intermediate"],
  ["SQL", "Basics"],
];

const focusItems = [
  "Clean and responsive web interfaces",
  "React and Next.js focused learning",
  "Java and Python problem solving",
  "SQL basics and database thinking",
];

const qualifications = [
  {
    title: "10th Standard",
    meta: "Completed with 93.60%",
    detail: "Built a strong academic foundation with consistent performance.",
  },
  {
    title: "Diploma in Computer Engineering",
    meta: "Completed with 92.69%",
    detail: "Focused on computer fundamentals, programming concepts, and technical learning.",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    meta: "Currently pursuing",
    detail: "Shri Guru Gobind Singh Ji Institute of Engineering and Technology, Vishnupuri, Nanded.",
  },
];

const projects = [
  {
    type: "AI Project",
    title: "Agentic AI Pharmacy System",
    text: "A pharmacy-focused AI project exploring smarter workflows, automation, and practical agentic system ideas.",
    tech: "Agentic AI / Pharmacy",
    screen: "screen-one",
    link: "https://github.com/Rit123-hub/agentic-ai.pharmacy",
  },
  {
    type: "Web App",
    title: "Ultimate Contact Manager",
    text: "A contact management project built around organizing people, details, and user-friendly data workflows.",
    tech: "Contact Manager",
    screen: "screen-two",
    link: "https://github.com/adityakandle0310/ContactManger",
  },
  {
    type: "Database Practice",
    title: "SQL Practice Work",
    text: "A collection of SQL basics: queries, tables, filters, and database learning exercises.",
    tech: "SQL Basics",
    screen: "screen-three",
    link: "#",
  },
];

// Small inline SVG icons, so the portfolio does not need an icon library.
function Icon({ name }) {
  const common = {
    className: "button-icon",
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "email") {
    return h("svg", common,
      h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
      h("path", { d: "m3 7 9 6 9-6" })
    );
  }

  if (name === "linkedin") {
    return h("svg", common,
      h("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" }),
      h("rect", { x: "2", y: "9", width: "4", height: "12" }),
      h("circle", { cx: "4", cy: "4", r: "2" })
    );
  }

  return h("svg", common,
    h("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" }),
    h("path", { d: "M9 18c-4.51 2-5-2-7-2" })
  );
}

// Header component: top navigation and mobile menu.
function Header() {
  const [open, setOpen] = useState(false);

  return h("header", { className: "site-header", id: "top" },
    h("nav", { className: "nav" },
      h("a", { className: "brand", href: "#top", "aria-label": "Go to top" },
        h("span", { className: "brand-mark" }, "AK"),
        h("span", null, "Aditya Kandle")
      ),
      h("button", {
        className: "menu-button",
        type: "button",
        "aria-label": "Open navigation",
        "aria-expanded": String(open),
        onClick: () => setOpen(!open),
      }, h("span"), h("span"), h("span")),
      h("div", { className: `nav-links ${open ? "open" : ""}` },
        ["About", "Skills", "Projects", "Contact"].map((item) =>
          h("a", {
            key: item,
            href: `#${item.toLowerCase()}`,
            onClick: () => setOpen(false),
          }, item)
        )
      )
    )
  );
}

// Hero component: first screen of the portfolio.
function Hero() {
  return h("section", { className: "hero section" },
    h("div", { className: "hero-copy reveal" },
      h("p", { className: "eyebrow" }, "Developer Portfolio"),
      h("h1", null, "Hi, I am Aditya Kandle. I build clean, modern digital experiences."),
      h("p", { className: "hero-text" },
        "A growing developer with a strong interest in frontend engineering, AI-powered ideas, and practical software systems. ",
        "I work with React, Next.js, Java, Python, and SQL to turn ideas into useful projects."
      ),
      h("div", { className: "hero-actions" },
        h("a", { className: "button primary", href: "#projects" }, "View My Work"),
        h("a", { className: "button secondary", href: "#contact" }, "Get In Touch")
      ),
      h("div", { className: "hero-points", "aria-label": "Developer strengths" },
        h("span", null, "React UI"),
        h("span", null, "Java/Python Logic"),
        h("span", null, "AI Project Ideas")
      ),
      h("div", { className: "code-rail", "aria-hidden": "true" },
        h("div", { className: "code-rail-track" },
          ["React", "Next.js", "Java", "Python", "SQL", "AI Systems", "Frontend", "GitHub"].map((item) =>
            h("span", { key: item }, item)
          ),
          ["React", "Next.js", "Java", "Python", "SQL", "AI Systems", "Frontend", "GitHub"].map((item) =>
            h("span", { key: `${item}-copy` }, item)
          )
        )
      )
    ),
    h("div", { className: "hero-showcase reveal" },
      h("img", { src: "assets/hero-workspace.png", alt: "Modern developer workspace with laptop" }),
      h("div", { className: "showcase-caption" },
        h("span", null, "Open to Opportunities"),
        h("strong", null, "Frontend + Programming + AI Projects")
      )
    )
  );
}

// Stats component: quick highlight strip below the hero.
function StatsBand() {
  return h("section", { className: "stats-band", "aria-label": "Portfolio highlights" },
    stats.map(([title, subtitle]) =>
      h("div", { key: title },
        h("strong", null, title),
        h("span", null, subtitle)
      )
    )
  );
}

// About component: short introduction and current focus.
function About() {
  return h("section", { className: "section about", id: "about" },
      h("div", { className: "section-heading reveal" },
        h("p", { className: "eyebrow" }, "About Me"),
      h("h2", null, "Curious, consistent, and focused on building real things.")
    ),
    h("div", { className: "about-grid" },
      h("div", { className: "about-copy reveal" },
        h("p", null,
          "I am Aditya Kandle, a developer who enjoys building websites and practical software projects. ",
          "I care about clean UI, readable code, and learning technologies deeply enough to use them in real work."
        ),
        h("p", null,
          "My current focus is React, Next.js, JavaScript logic, Java and Python problem solving, SQL basics, and project deployment. ",
          "I am especially interested in projects where technology solves a clear user problem."
        )
      ),
      h("div", { className: "focus-list reveal" },
        focusItems.map((item, index) =>
          h("div", { key: item },
            h("span", null, String(index + 1).padStart(2, "0")),
            h("p", null, item)
          )
        )
      )
    )
  );
}

// Qualification component: academic background and current degree.
function Qualifications() {
  return h("section", { className: "section qualifications", id: "qualifications" },
    h("div", { className: "section-heading reveal" },
      h("p", { className: "eyebrow" }, "Qualifications"),
      h("h2", null, "Academic background with strong performance.")
    ),
    h("div", { className: "qualification-rail reveal", "aria-hidden": "true" },
      h("div", { className: "qualification-rail-track" },
        ["10th - 93.60%", "Diploma - 92.69%", "B.Tech CSE", "SGGSIET Nanded", "Computer Engineering"].map((item) =>
          h("span", { key: item }, item)
        ),
        ["10th - 93.60%", "Diploma - 92.69%", "B.Tech CSE", "SGGSIET Nanded", "Computer Engineering"].map((item) =>
          h("span", { key: `${item}-copy` }, item)
        )
      )
    ),
    h("div", { className: "qualification-timeline" },
      qualifications.map((item, index) =>
        h("article", { className: "qualification-card reveal", key: item.title },
          h("span", { className: "qualification-index" }, String(index + 1).padStart(2, "0")),
          h("div", null,
            h("h3", null, item.title),
            h("strong", null, item.meta),
            h("p", null, item.detail)
          )
        )
      )
    )
  );
}

// Skills component: clear stack summary with React, Next.js, Java, Python, and SQL.
function Skills() {
  return h("section", { className: "section skills", id: "skills" },
      h("div", { className: "section-heading reveal" },
        h("p", { className: "eyebrow" }, "Skills"),
      h("h2", null, "Technology I am building with.")
    ),
    h("div", { className: "stack-panel reveal" },
      stackGroups.map((group) =>
        h("div", { className: "stack-group", key: group.title },
          h("h3", null, group.title),
          h("div", { className: "stack-tags" },
            group.items.map((item) => h("span", { key: item }, item))
          )
        )
      )
    ),
    h("div", { className: "skill-board" },
      skills.map((skill) =>
        h("article", { className: "skill-card reveal", key: skill.title },
          h("span", null, skill.label),
          h("h3", null, skill.title),
          h("p", null, skill.text)
        )
      )
    )
  );
}

// Projects component: replace # links with your actual GitHub project URLs.
function Projects() {
  return h("section", { className: "section projects", id: "projects" },
      h("div", { className: "section-heading reveal" },
        h("p", { className: "eyebrow" }, "Projects"),
      h("h2", null, "Projects that show what I am learning and building.")
    ),
    h("div", { className: "project-grid" },
      projects.map((project, index) =>
        h("article", { className: "project-card reveal", key: project.title },
          h("div", { className: `project-screen ${project.screen}` },
            h("span", null, String(index + 1).padStart(2, "0"))
          ),
          h("div", { className: "project-content" },
            h("p", { className: "project-type" }, project.type),
            h("h3", null, project.title),
            h("p", null, project.text),
            h("div", { className: "project-footer" },
              h("span", null, project.tech),
              h("a", { href: project.link, target: "_blank", rel: "noreferrer" }, "GitHub")
            )
          )
        )
      )
    )
  );
}

// Contact component: replace placeholder links with your real profiles.
function Contact() {
  return h("section", { className: "section contact", id: "contact" },
      h("div", { className: "contact-panel reveal" },
      h("div", null,
        h("p", { className: "eyebrow" }, "Contact"),
        h("h2", null, "Interested in working together?"),
        h("p", null, "I am open to internships, project collaboration, learning opportunities, and developer roles where I can contribute and grow.")
      ),
      h("div", { className: "contact-actions" },
        h("a", { className: "button primary", href: "mailto:adityakandle937@gmail.com" },
          h(Icon, { name: "email" }),
          "Email Me"
        ),
        h("a", { className: "button secondary", href: "https://github.com/adityakandle0310", target: "_blank", rel: "noreferrer" },
          h(Icon, { name: "github" }),
          "GitHub"
        ),
        h("a", { className: "button secondary", href: "https://www.linkedin.com/in/aditya-kandale-03439b387/", target: "_blank", rel: "noreferrer" },
          h(Icon, { name: "linkedin" }),
          "LinkedIn"
        )
      )
    )
  );
}

// Main React app: combines all portfolio sections.
function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min(index % 4, 3) * 80}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return h(React.Fragment, null,
    h(Header),
    h("main", null,
      h(Hero),
      h(StatsBand),
      h(About),
      h(Qualifications),
      h(Skills),
      h(Projects),
      h(Contact)
    ),
    h("footer", { className: "footer" },
    h("p", null, `© ${new Date().getFullYear()} Aditya Kandle. Built with React, HTML, CSS, and JavaScript.`)
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
