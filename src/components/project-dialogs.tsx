import { Modal } from "./modal";
import { ServiceLink } from "./enquiry-context";

export function ProductDetails() {
  return (
    <Modal
      id="product-dialog"
      label="Academic scheduling platform"
      className="button button-dark"
      trigger={
        <>
          Explore the platform <span>↗</span>
        </>
      }
    >
      <div className="eyebrow">FOUNDER’S WORK / ACADEMIC SCHEDULING</div>
      <h2>
        A clearer path
        <br />
        to a workable timetable.
      </h2>
      <p>
        Developed by Shanon Simon Lubega, this platform brings timetable
        preparation, review, and publication into one workflow for universities
        and higher-education institutions.
      </p>
      <div className="case-attribution">
        <b>Contribution</b>
        <span>
          Full-stack development · Scheduling logic · Role-based workflows
        </span>
        <b>Technology</b>
        <span>Laravel · Inertia React · PostgreSQL</span>
        <b>Stage</b>
        <span>Product available for demonstrations</span>
      </div>
      <div className="dialog-features">
        <article>
          <h3>Plan with constraints</h3>
          <p>
            Account for lecturer availability, room capacity, course hours, and
            cohort conflicts.
          </p>
        </article>
        <article>
          <h3>Review before publishing</h3>
          <p>
            Inspect conflicts and make adjustments before sharing a schedule.
          </p>
        </article>
        <article>
          <h3>Keep people connected</h3>
          <p>
            Provide relevant schedule views for administrators, lecturers, and
            students.
          </p>
        </article>
      </div>
      <p className="dialog-note">
        Talk to us about your institution’s needs and arrange a demonstration to
        assess the fit.
      </p>
      <ServiceLink
        service="Academic scheduling demo"
        className="button button-dark"
      >
        Request a demonstration <span>↗</span>
      </ServiceLink>
    </Modal>
  );
}

export function PrivacyDetails() {
  return (
    <Modal
      id="privacy-dialog"
      label="Privacy information"
      className="privacy-button"
      trigger={<>Privacy</>}
    >
      <div className="eyebrow">YOUR INFORMATION</div>
      <h2>
        A simple approach
        <br />
        to privacy.
      </h2>
      <p>
        This website does not store your enquiry in a website database. The
        enquiry form prepares an email on your device; you choose whether to
        send it.
      </p>
      <p>
        If you contact Shanvexa by email or WhatsApp, the information you share
        is used to respond to your enquiry and discuss your project. Avoid
        including passwords, financial details, or sensitive records in an
        initial enquiry.
      </p>
      <p>
        Email, WhatsApp, and this website’s hosting provider may process data
        under their own privacy policies. For questions, contact{" "}
        <a href="mailto:shanonsimon082@gmail.com">shanonsimon082@gmail.com</a>.
      </p>
    </Modal>
  );
}
