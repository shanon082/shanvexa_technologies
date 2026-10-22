export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-shell about-grid">
        <div>
          <div className="eyebrow">04 / THE PEOPLE BEHIND THE CODE</div>
          <h2>
            Small by design.
            <br />
            <span>Ambitious by nature.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            Shanvexa Technologies is an independent software engineering
            business based in Uganda, focused on making technology useful in
            everyday work.
          </p>
          <p>
            Founded by Shanon Simon Lubega, we combine hands-on software
            development with an engineering mindset: understand the system,
            solve the right problem, and pay attention to the details.
          </p>
          <div className="founder">
            <span className="founder-monogram">SL</span>
            <div>
              <b>Shanon Simon Lubega</b>
              <span>Founder &amp; Software Developer</span>
            </div>
            <a
              href="https://personal-website-rho-sandy-79.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Shanon&#x27;s personal portfolio, opens in new tab"
            >
              ↗
            </a>
          </div>
        </div>
        <div className="values-row">
          <span>Direct collaboration</span>
          <span>Practical solutions</span>
          <span>Thoughtful engineering</span>
        </div>
      </div>
    </section>
  );
}
