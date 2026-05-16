const { useEffect, useState } = React;
const h = React.createElement;

// Portfolio data: edit these arrays when you want to change skills, projects, or highlights.
const skills = [
  {
    label: "Frontend",
    title: "HTML, CSS, JavaScript, React, Next.js",
    text: "Building responsive sections, navigation, cards, forms, interactive layouts, and modern React-based pages.",
  },
  {
    label: "Programming",
    title: "Java and Python",
    text: "Intermediate level knowledge with logic building, syntax, OOP basics, and problem solving practice.",
  },
  {
    label: "Database",
    title: "SQL Basics",
    text: "Basic SQL queries, tables, filtering, sorting, joins foundation, and database concepts.",
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
  "Responsive website layouts",
  "Frontend UI and interactions",
  "React and Next.js learning",
  "Java and Python intermediate practice",
  "SQL basics and project deployment",
];

const projects = [
  {
    type: "AI Project",
    title: "Agentic AI Pharmacy System",
    text: "An agentic AI based pharmacy system project focused on smarter pharmacy workflows and automation.",
    tech: "Agentic AI / Pharmacy",
    screen: "screen-one",
    link: "https://github.com/Rit123-hub/agentic-ai.pharmacy",
  },
  {
    type: "Web App",
    title: "Ultimate Contact Manager",
    text: "A contact management project for organizing and managing contact information in a clean workflow.",
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
      h("p", { className: "eyebrow" }, "React Developer Portfolio"),
      h("h1", null, "Aditya Kandle builds modern websites with clean code."),
      h("p", { className: "hero-text" },
        "I build responsive web interfaces and keep improving my programming foundation. ",
        "My current stack includes React, Next.js, frontend development, Java intermediate, Python intermediate, and SQL basics."
      ),
      h("div", { className: "hero-actions" },
        h("a", { className: "button primary", href: "#projects" }, "See Projects"),
        h("a", { className: "button secondary", href: "#contact" }, "Contact Me")
      )
    ),
    h("div", { className: "hero-showcase reveal" },
      h("img", { src: "assets/hero-workspace.png", alt: "Modern developer workspace with laptop" }),
      h("div", { className: "showcase-caption" },
        h("span", null, "React Portfolio"),
        h("strong", null, "Frontend + Programming")
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
      h("h2", null, "Focused on improving one project at a time.")
    ),
    h("div", { className: "about-grid" },
      h("div", { className: "about-copy reveal" },
        h("p", null,
          "I am Aditya Kandle, a student and developer building my foundation in web development and programming. ",
          "I enjoy creating clean, responsive websites that are simple to use and easy to understand."
        ),
        h("p", null,
          "My current focus is improving React, Next.js, JavaScript logic, Java and Python problem solving, SQL basics, and real project deployment."
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

// Skills component: clear stack summary with React, Next.js, Java, Python, and SQL.
function Skills() {
  return h("section", { className: "section skills", id: "skills" },
    h("div", { className: "section-heading reveal" },
      h("p", { className: "eyebrow" }, "Skills"),
      h("h2", null, "My current tech stack.")
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
      h("h2", null, "Add your GitHub projects here.")
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
        h("h2", null, "Let us connect."),
        h("p", null, "Reach out by email, explore my GitHub projects, or connect with me on LinkedIn.")
      ),
      h("div", { className: "contact-actions" },
        h("a", { className: "button primary", href: "mailto:adityakandle937@gmail.com" }, "Email Me"),
        h("a", { className: "button secondary", href: "https://github.com/adityakandle0310", target: "_blank", rel: "noreferrer" }, "GitHub"),
        h("a", { className: "button secondary", href: "https://www.linkedin.com/in/aditya-kandale-03439b387/", target: "_blank", rel: "noreferrer" }, "LinkedIn")
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
