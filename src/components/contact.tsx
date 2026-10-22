import { EnquiryForm } from "./enquiry-form";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">
            <span className="status-dot"></span> LET’S MAKE IT HAPPEN
          </div>
          <h2>
            What’s your
            <br />
            <span>next big idea?</span>
          </h2>
          <p>
            A new website, a better workflow, or something that doesn’t exist
            yet. Tell us what you have in mind.
          </p>
          <a className="contact-email" href="mailto:shanonsimon082@gmail.com">
            shanonsimon082@gmail.com <span>↗</span>
          </a>
          <a
            className="whatsapp"
            href="https://wa.me/256771950092?text=Hello%20Shanvexa%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp <span>↗</span>
          </a>
          <span className="contact-location">
            Kampala, Uganda · Open to remote collaboration
          </span>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
