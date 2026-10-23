import { ServiceLink } from "./enquiry-context";
import { ProductDetails } from "./project-dialogs";

export function SelectedWork() {
  return (
    <section id="work" className="work-section section-space">
      <div className="section-shell">
        <div className="section-intro">
          <div>
            <div className="eyebrow">02 / SELECTED WORK BY OUR FOUNDER</div>
            <h2>
              Practical problems.
              <br />
              Purpose-built solutions.
            </h2>
          </div>
          <p>
            Selected projects by Shanon Simon Lubega, founder of Shanvexa
            Technologies. A closer look at his work across business software,
            websites, and connected mobile experiences.
          </p>
        </div>
        <div className="work-feature">
          <div className="work-copy">
            <span className="tag">EDUCATION TECHNOLOGY · FOUNDER’S WORK</span>
            <h3>
              Automated Timetable
              <br />Generator.
            </h3>
            <p>
              Give academic administrators a clearer way to plan classes, manage
              constraints, and share schedules with lecturers and students.
            </p>
            <ul className="check-list">
              <li>Plan around lecturers, rooms, and course hours</li>
              <li>Review conflicts and adjust before publishing</li>
              <li>Give each user a relevant timetable view</li>
            </ul>
            <ProductDetails />
            <span className="work-caption">
              Laravel · React · Scheduling optimisation · Demo by arrangement
              <br />
              By Shanon Simon Lubega · Full-stack development
            </span>
          </div>
          <div className="work-art">
            <div className="art-heading">
              <span className="tiny-logo">ϟ</span>
              <span>
                One plan.
                <br />
                <b>Everyone connected.</b>
              </span>
            </div>
            <div className="schedule-board">
              <div className="board-header">
                <div>
                  <span className="micro">ACADEMIC SCHEDULING</span>
                  <h4>From complexity to clarity.</h4>
                </div>
                <span className="board-dots">•••</span>
              </div>
              <div className="flow-rows">
                <div>
                  <span className="flow-icon">01</span>
                  <p>
                    <b>Set your requirements</b>
                    <span>Courses, rooms &amp; availability</span>
                  </p>
                  <span>✓</span>
                </div>
                <div>
                  <span className="flow-icon">02</span>
                  <p>
                    <b>Generate &amp; review</b>
                    <span>Find a fit. Resolve conflicts.</span>
                  </p>
                  <span>✓</span>
                </div>
                <div className="active-flow">
                  <span className="flow-icon">03</span>
                  <p>
                    <b>Publish with confidence</b>
                    <span>A shared schedule for your institution</span>
                  </p>
                  <span>↗</span>
                </div>
              </div>
              <div className="role-chips">
                <span>Admin</span>
                <span>Lecturer</span>
                <span>Student</span>
              </div>
            </div>
            <span className="art-caption">
              Illustration of the scheduling workflow · Not a screenshot
            </span>
          </div>
        </div>
        <div className="selected-projects">
          <article className="project-card" aria-labelledby="avenora-title">
            <div
              className="project-art foundation-art"
              role="img"
              aria-label="Editorial illustration for the Avenora Foundation website project, not a screenshot"
            >
              <div className="project-art-top">
                <span>AVENORA FOUNDATION</span>
                <span>WEB / 02</span>
              </div>
              <div className="foundation-emblem" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="foundation-art-copy">
                A thoughtful
                <br />
                digital presence.
              </div>
              <span className="project-art-caption">Project illustration</span>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span className="tag">ORGANISATION WEBSITE</span>
                <span className="project-status">Website demo</span>
              </div>
              <h3 id="avenora-title">Avenora Foundation</h3>
              <p>
                A fictional foundation website exploring clear storytelling and
                an approachable online presence. A presentation concept, not a
                paid client engagement.
              </p>
              <div className="project-credit">
                <span>BUILT BY</span>
                <b>Shanon Simon Lubega</b>
                <span className="credit-role">
                  Website design &amp; development
                </span>
              </div>
              <div className="project-tech">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
              <a className="text-link project-demo" href="https://avenora-foundation.vercel.app/" target="_blank" rel="noopener noreferrer">View public demo <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
              <details className="project-details">
                <summary>
                  Explore this project <span>+</span>
                </summary>
                <div className="project-detail-content">
                  <dl>
                    <dt>The brief</dt>
                    <dd>
                      Create a dedicated website that gives an organisation a
                      professional place to introduce itself online.
                    </dd>
                    <dt>My contribution</dt>
                    <dd>
                      Website design and implementation using Next.js and TypeScript.
                    </dd>
                    <dt>Current stage</dt>
                    <dd>
                      Public fictional website demonstration. It does not represent
                      an operating foundation or a completed client engagement.
                    </dd>
                  </dl>
                  <ServiceLink
                    service="Website or web application"
                    className="text-link"
                  >
                    Discuss a similar website <span>↗</span>
                  </ServiceLink>
                </div>
              </details>
            </div>
          </article>
          <article className="project-card" aria-labelledby="energy-title">
            <div
              className="project-art energy-art"
              role="img"
              aria-label="Illustration of a connected web and Android energy project, not a screenshot"
            >
              <div className="project-art-top">
                <span>CONNECTED ENERGY</span>
                <span>WEB + ANDROID / 03</span>
              </div>
              <div className="energy-visual">
                <div className="energy-web">
                  <span className="energy-visual-label">WEB WORKSPACE</span>
                  <div className="energy-bolt">ϟ</div>
                  <div className="energy-line"></div>
                  <div className="energy-line short"></div>
                  <div className="energy-modules">
                    <span>Accounts</span>
                    <span>Meters</span>
                  </div>
                </div>
                <span className="energy-connector" aria-hidden="true">
                  ↔
                </span>
                <div className="energy-phone">
                  <span className="phone-speaker"></span>
                  <span className="energy-visual-label">ON THE GO</span>
                  <span className="phone-energy-icon">ϟ</span>
                  <span className="phone-label">
                    Your energy.
                    <br />
                    One place.
                  </span>
                  <div className="phone-pills">
                    <span>Profile</span>
                    <span>Activity</span>
                  </div>
                  <span className="phone-home"></span>
                </div>
              </div>
              <span className="project-art-caption">
                Project illustration · Development prototype
              </span>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span className="tag">WEB &amp; MOBILE ENGINEERING</span>
                <span className="project-status">In development</span>
              </div>
              <h3 id="energy-title">Energy-sharing platform</h3>
              <p>
                A connected web and Android prototype bringing account, meter,
                and simulated energy information into a shared digital experience.
                Financial and hardware features are not live production services.
              </p>
              <div className="project-credit">
                <span>BUILT BY</span>
                <b>Shanon Simon Lubega</b>
                <span className="credit-role">
                  Full-stack development &amp; Android integration
                </span>
              </div>
              <div className="project-tech">
                <span>Django</span>
                <span>Next.js</span>
                <span>Capacitor / Android</span>
              </div>
              <details className="project-details">
                <summary>
                  Explore this project <span>+</span>
                </summary>
                <div className="project-detail-content">
                  <dl>
                    <dt>The challenge</dt>
                    <dd>
                      Extend an existing web platform to Android while
                      connecting both experiences to the same backend.
                    </dd>
                    <dt>My contribution</dt>
                    <dd>
                      Django API and Next.js development, Android app
                      integration, account and profile access, and
                      meter-simulation workflows.
                    </dd>
                    <dt>Current stage</dt>
                    <dd>
                      A development prototype with a working Android app and
                      simulated energy delivery. Live payments, lending, and
                      peer energy sharing remain outside the current demo.
                    </dd>
                  </dl>
                  <ServiceLink
                    service="Mobile application"
                    className="text-link"
                  >
                    Discuss a connected application <span>↗</span>
                  </ServiceLink>
                </div>
              </details>
            </div>
          </article>
        </div>
        <div className="founder-work-note">
          <span className="small-cross" aria-hidden="true">
            ✳
          </span>
          <p>
            These projects showcase our founder’s development experience. Each
            is presented with its current stage and contribution.
          </p>
          <a
            href="https://personal-website-rho-sandy-79.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View personal portfolio ↗
          </a>
        </div>
        <div className="work-note">
          <span>HAVE A DIFFERENT CHALLENGE?</span>
          <p>
            Your business doesn’t have to fit a template.{" "}
            <a href="#contact">Let’s build around it ↗</a>
          </p>
        </div>
      </div>
    </section>
  );
}
