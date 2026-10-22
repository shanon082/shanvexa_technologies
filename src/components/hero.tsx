export function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot"></span> INDEPENDENT SOFTWARE ENGINEERING
        </div>
        <h1>
          Good ideas.
          <br />
          Great engineering.
          <br />
          <span>Real impact.</span>
        </h1>
        <p>
          We turn everyday business challenges into thoughtful digital
          solutions. Built around your people, your processes, and what comes
          next.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            Let’s build something <span>↗</span>
          </a>
          <a className="text-link" href="#work">
            Explore our work <span>↓</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="small-cross">✳</span> Based in Uganda. Building
          beyond borders.
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Illustrative preview of connected software interfaces"
      >
        <div className="visual-grid"></div>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="visual-top">
          <span>IDEA → ENGINEERING → IMPACT</span>
          <span>SV / 01</span>
        </div>
        <div className="floating-label">
          <span className="status-dot"></span> Designed for real life
        </div>
        <div className="product-window">
          <div className="window-bar">
            <span className="tiny-logo">ϟ</span>
            <b>Academic workspace</b>
            <span className="window-avatar">SA</span>
          </div>
          <div className="window-content">
            <div className="window-heading">
              <div>
                <span className="micro">YOUR WEEK, IN FOCUS</span>
                <h3>A better kind of timetable.</h3>
              </div>
              <span className="window-pill">Weekly view</span>
            </div>
            <div className="calendar">
              <div className="cal-days">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
              </div>
              <div className="cal-grid">
                <div className="cal-event green e1">
                  <b>Computer networks</b>
                  <span>09:00 — 11:00</span>
                </div>
                <div className="cal-event purple e2">
                  <b>Electronics lab</b>
                  <span>14:00 — 16:00</span>
                </div>
                <div className="cal-event cream e3">
                  <b>Engineering maths</b>
                  <span>10:00 — 12:00</span>
                </div>
                <div className="cal-event green e4">
                  <b>Software design</b>
                  <span>09:00 — 11:00</span>
                </div>
                <div className="cal-event cream e5">
                  <b>Project workshop</b>
                  <span>14:00 — 16:00</span>
                </div>
              </div>
            </div>
            <div className="window-foot">
              <span>
                <i></i> A clearer week for everyone
              </span>
              <span>Illustrative interface</span>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="mini-icon">↗</div>
          <div>
            <b>Less busywork.</b>
            <span>More room to move forward.</span>
          </div>
          <svg viewBox="0 0 90 40" aria-hidden="true">
            <path
              d="M2 35 20 28 33 31 48 18 62 21 87 4"
              fill="none"
              stroke="#70933a"
              strokeWidth="3"
            />
            <circle cx="87" cy="4" r="3" fill="#70933a" />
          </svg>
        </div>
        <div className="visual-bottom">
          <span>BUILT WITH PURPOSE.</span>
          <span>ENGINEERED TO LAST. ↗</span>
        </div>
      </div>
    </section>
  );
}
