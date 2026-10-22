import { ServiceLink } from "./enquiry-context";

export function Services() {
  return (
    <section id="services" className="section-shell section-space">
      <div className="section-intro">
        <div>
          <div className="eyebrow">01 / WHAT WE DO</div>
          <h2>
            The right technology.
            <br />
            For the way you work.
          </h2>
        </div>
        <p>
          From your first website to the systems behind your operations, we help
          you build something useful—and keep it working.
        </p>
      </div>
      <div className="services-grid">
        <ServiceLink
          service="Website or web application"
          className="service-card"
        >
          <div className="service-top">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <rect x="5" y="8" width="30" height="24" rx="3" />
              <path d="M5 15h30M11 11.5h1m4 0h1M14 21l-4 4 4 4m12-8 4 4-4 4m-4-10-4 12" />
            </svg>
            <span>01</span>
          </div>
          <h3>Websites &amp; web apps</h3>
          <p>
            A professional home for your business, or a tailored application
            that makes your services easier to use.
          </p>
          <div className="service-bottom">
            <span>Company websites · Portals · Dashboards</span>
            <b>↗</b>
          </div>
        </ServiceLink>
        <ServiceLink service="Custom business system" className="service-card">
          <div className="service-top">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <rect x="5" y="5" width="12" height="12" rx="2" />
              <rect x="23" y="5" width="12" height="12" rx="2" />
              <rect x="5" y="23" width="12" height="12" rx="2" />
              <path d="M23 29h12m-6-6v12" />
            </svg>
            <span>02</span>
          </div>
          <h3>Business systems</h3>
          <p>
            Bring scattered records and repetitive processes into one clear,
            practical workspace for your organisation.
          </p>
          <div className="service-bottom">
            <span>Operations · Reporting · Administration</span>
            <b>↗</b>
          </div>
        </ServiceLink>
        <ServiceLink service="Mobile application" className="service-card">
          <div className="service-top">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <rect x="11" y="3" width="18" height="34" rx="4" />
              <path d="M17 7h6m-6 25h6M16 18l3 3 6-7" />
            </svg>
            <span>03</span>
          </div>
          <h3>Mobile applications</h3>
          <p>
            Put the tools your customers and teams need in their hands, with
            focused, easy-to-navigate mobile experiences.
          </p>
          <div className="service-bottom">
            <span>Android · Flutter · Connected experiences</span>
            <b>↗</b>
          </div>
        </ServiceLink>
        <ServiceLink
          service="Integration, automation or support"
          className="service-card"
        >
          <div className="service-top">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <path d="m15 7-8 8 8 8m10-6 8 8-8 8M7 15h16a6 6 0 0 1 6 6m4 4H17a6 6 0 0 1-6-6" />
            </svg>
            <span>04</span>
          </div>
          <h3>Integration &amp; support</h3>
          <p>
            Connect your tools, simplify repetitive tasks, and give existing
            software the attention it needs to move forward.
          </p>
          <div className="service-bottom">
            <span>APIs · Automation · Maintenance</span>
            <b>↗</b>
          </div>
        </ServiceLink>
      </div>
    </section>
  );
}
