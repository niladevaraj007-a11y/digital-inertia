import { useState } from "react";
import "./App.css";
import heroBackground from "./assets/hero-background.jpg";
import logo from "./assets/logo.png";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Websites, web applications, and commerce built to perform.",
  },
  {
    number: "02",
    title: "Entity & Sales",
    description: "Entity setup, sales strategy, and CRM implementation.",
  },
  {
    number: "03",
    title: "Work Flow",
    description: "Process mapping, workflow automation, and SOP design.",
  },
  {
    number: "04",
    title: "Team Management",
    description: "HR systems, team collaboration, and performance tracking.",
  },
  {
    number: "05",
    title: "Customized Software",
    description: "Tailored software, meaningful integrations, and APIs.",
  },
  {
    number: "06",
    title: "Bill Book Full Suite",
    description: "Billing, invoicing, accounting, and practical reporting.",
  },
];

const frameworkSteps = [
  {
    number: "01",
    title: "Establish Goals",
    description: "Define the vision, outcomes, and success metrics.",
  },
  {
    number: "02",
    title: "Diagnose & Map",
    description: "Audit what exists, then identify friction and gaps.",
  },
  {
    number: "03",
    title: "Drive Cultural Shift",
    description: "Bring change management and teams into the process.",
  },
  {
    number: "04",
    title: "Optimize & Automate",
    description: "Implement tools and workflows that reduce friction.",
  },
  {
    number: "05",
    title: "Scale Growth",
    description: "Monitor, optimize, and keep improving with intent.",
  },
];

const comparisonRows = [
  {
    metric: "Pricing & flexibility",
    traditional: "High. Rigid packages.",
    specialist: "Medium. Standard pricing.",
    tools: "Low cost. Limited options.",
    digitalInertia: "Flexible, transparent pricing.",
  },
  {
    metric: "Implementation speed",
    traditional: "Slow. 6-12 months.",
    specialist: "Medium. 3-6 months.",
    tools: "Slow. 4-8 months.",
    digitalInertia: "Fast. 4-8 weeks.",
  },
  {
    metric: "Customization level",
    traditional: "Low. Template-based.",
    specialist: "Medium. Semi-custom.",
    tools: "Low. Fixed solutions.",
    digitalInertia: "High. Fully customized.",
  },
  {
    metric: "Support & partnership",
    traditional: "Limited. Ticket support.",
    specialist: "Standard. Business hours.",
    tools: "Minimal. Email only.",
    digitalInertia: "ROI and growth focused.",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "Comparison", href: "#comparison" },
  { label: "Contact", href: "#contact" },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13 13 3M4 3h9v9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 19 12" fill="none" aria-hidden="true">
      <path d="M1 6h15m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* New logo used in the header and footer */
function BrandMark() {
  return <img src={logo} alt="Digital Inertia" className="brand-mark" />;
}

function Check() {
  return (
    <svg
      className="check-icon"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="m2 6.3 2.5 2.5L10 3.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function getFormString(formData, fieldName) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getFormString(formData, "name");
    const email = getFormString(formData, "email");
    const company = getFormString(formData, "company");
    const message = getFormString(formData, "message");

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Consultation enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Project or challenge:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:lavenlokesh@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-shell">
          <a
            className="brand"
            href="#home"
            onClick={closeMenu}
            aria-label="Digital Inertia home"
          >
            <BrandMark />
            <span>Digital Inertia</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={menuOpen ? "main-nav nav-open" : "main-nav"}
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}

            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Get consultation <ArrowUpRight />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div
          className="hero-photo"
          style={{ backgroundImage: `url(${heroBackground})` }}
          aria-hidden="true"
        />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-rule hero-rule-one" aria-hidden="true" />
        <div className="hero-rule hero-rule-two" aria-hidden="true" />

        <div className="hero-shell">
          <div className="hero-copy">
            <p className="hero-kicker">
              Strategy / Creativity / Technology / Execution
            </p>

            <p className="hero-brand">
              Digital
              <br />
              Inertia
            </p>

            <h1>
              Driven by strategy.
              <br />
              <span>Inspired by creativity.</span>
            </h1>

            <p className="hero-description">
              Strategy, creativity, technology, and execution to accelerate
              growth, optimize operations, and deliver measurable results for
              modern businesses.
            </p>

            <a className="button button-light" href="#contact">
              Start your transformation <ArrowUpRight />
            </a>
          </div>

          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <span>Chennai / India</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-light" id="about">
        <div className="section-shell about-layout">
          <div className="section-label">
            <span>01</span> Company overview
          </div>

          <div className="about-content">
            <p className="eyebrow">Built for businesses ready to move</p>

            <h2>
              Turn inertia into <span>momentum.</span>
            </h2>

            <div className="about-lower">
              <p className="about-statement">
                Digital Inertia is a growth-focused consulting and technology
                partner. We help ambitious teams turn slow, fragmented ways of
                working into clear systems that move their business forward.
              </p>

              <div className="about-detail">
                <p>
                  We connect strategic planning, practical technology, and
                  hands-on execution to create sustainable growth.
                </p>

                <div className="about-facts">
                  <div>
                    <span>Based in</span>
                    <strong>Chennai, India</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Business transformation</strong>
                  </div>
                  <div>
                    <span>Mission</span>
                    <strong>Inertia to momentum</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section-grey" id="services">
        <div className="section-shell">
          <div className="section-intro">
            <div className="section-label">
              <span>02</span> What we do
            </div>

            <div>
              <p className="eyebrow">Six business-ready capabilities</p>
              <h2>
                Build the systems behind <span>your next stage.</span>
              </h2>
            </div>

            <p className="section-description">
              Modular services designed to meet the reality of your operation,
              then help it become more efficient, connected, and scalable.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <ArrowUpRight />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="framework" id="framework">
        <div className="section-shell">
          <div className="framework-intro">
            <div className="section-label">
              <span>03</span> Our methodology
            </div>

            <div>
              <p className="eyebrow">A five-step framework</p>
              <h2>
                From the first signal to <span>scalable growth.</span>
              </h2>
            </div>
          </div>

          <div className="framework-steps">
            {frameworkSteps.map((step, index) => (
              <article className="framework-step" key={step.number}>
                <div className="step-line" aria-hidden="true">
                  <span />
                  {index < frameworkSteps.length - 1 && <ArrowRight />}
                </div>
                <span className="step-number">Step {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <p className="framework-outcome">
            Clear direction <span>+</span> efficient operations <span>+</span>{" "}
            sustained growth
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison section-light" id="comparison">
        <div className="section-shell">
          <div className="comparison-heading">
            <div className="section-label">
              <span>04</span> The difference
            </div>

            <div>
              <p className="eyebrow">A considered approach</p>
              <h2 id="comparison-heading-title">
                Designed to be the partner <span>that moves with you.</span>
              </h2>
            </div>
          </div>

          <section
            className="comparison-table-wrap"
            aria-labelledby="comparison-heading-title"
          >
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Evaluation criteria</th>
                  <th scope="col">Traditional agencies</th>
                  <th scope="col">Specialist firms</th>
                  <th scope="col">Off-the-shelf tools</th>
                  <th scope="col" className="di-column">
                    Digital Inertia
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.metric}>
                    <th scope="row">{row.metric}</th>
                    <td>{row.traditional}</td>
                    <td>{row.specialist}</td>
                    <td>{row.tools}</td>
                    <td className="di-column">
                      <Check />
                      {row.digitalInertia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <p className="comparison-note">
            Explore an approach shaped around your goals, operations, and growth
            plans.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <div className="section-label">
              <span>05</span> Start a conversation
            </div>

            <p className="eyebrow">Get in touch</p>
            <h2>
              Ready to build <span>what comes next?</span>
            </h2>

            <p className="contact-description">
              Share the opportunity, the roadblock, or the system you want to
              improve. We will help you find the next useful move.
            </p>

            <dl className="contact-details">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:blavenlokesh@gmail.com">
                    blavenlokesh@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Studio</dt>
                <dd>Chennai, Tamil Nadu, India</dd>
              </div>
              <div>
                <dt>Enquiries</dt>
                <dd>Project and business consultations</dd>
              </div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>Send us a message</span>
              <span>01 / 04</span>
            </div>

            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />

            <label htmlFor="company">Company / organization</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              autoComplete="organization"
            />

            <label htmlFor="message">Your challenge *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your project, goals, or challenge..."
              rows={4}
              required
            />

            <button className="button button-white" type="submit">
              Send message <ArrowUpRight />
            </button>

            <p className="form-note">
              Your email app will open with the message ready to send.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="section-shell footer-top">
          <a className="brand" href="#home">
            <BrandMark />
            <span>Digital Inertia</span>
          </a>

          <p>
            Building high-performing growth engines.
            <br />
            Chennai, India
          </p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#framework">Framework</a>
            <a href="#comparison">Comparison</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="footer-contact" href="mailto:lavenlokesh@gmail.com">
            Email us <ArrowUpRight />
          </a>
        </div>

        <div className="section-shell footer-bottom">
          <span>Copyright {new Date().getFullYear()} Digital Inertia</span>
          <span>Strategy / technology / execution</span>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
