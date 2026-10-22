import { PrivacyDetails } from "./project-dialogs";

export function Footer() {
  return (
    <footer className="section-shell footer">
      <div className="footer-top">
        <a className="brand" href="#">
          <svg className="brand-symbol" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M8 7h24L18 20h14L8 34l12-13H8z" fill="currentColor" />
          </svg>
          <span>
            shanvexa<span className="brand-sub">TECHNOLOGIES</span>
          </span>
        </a>
        <p>Engineering What’s Next.</p>
        <a href="#main">Back to top ↑</a>
      </div>
      <div className="footer-bottom">
        <span>
          © <span>{new Date().getFullYear()}</span> Shanvexa Technologies. All
          rights reserved.
        </span>
        <div>
          <PrivacyDetails />
          <a
            href="https://github.com/shanon082"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/shanon-simon-595281309/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
