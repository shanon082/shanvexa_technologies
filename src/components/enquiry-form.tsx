"use client";

import { useRef, useState, type FormEvent } from "react";
import { services, site, type Service } from "@/lib/site";
import { useEnquiry } from "./enquiry-context";

export function EnquiryForm() {
  const { service, setService } = useEnquiry();
  const [error, setError] = useState("");
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const fallback = useRef<HTMLTextAreaElement>(null);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || message.length < 20) {
      setError(!name
        ? "Please enter your name."
        : "Please describe your project in at least 20 characters so we can understand what you need.");
      const field = event.currentTarget.elements.namedItem(!name ? "name" : "message");
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setError("");
    const timeline = String(data.get("timeline") ?? "").trim();
    const text = `Hello ${site.name},\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nTimeline: ${timeline || "To be discussed"}\n\nProject details:\n${message}\n\nThank you.`;
    setBrief(text);
    setCopied(false);
    setShowFallback(false);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry: ${service}`)}&body=${encodeURIComponent(text)}`;
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setShowFallback(false);
    } catch {
      setShowFallback(true);
    }
  }

  return (
    <form
      id="enquiry-form"
      className="enquiry-form"
      onSubmit={prepareEnquiry}
      onChange={() => { setBrief(""); setError(""); }}
    >
      <h3>A good project starts with a conversation.</h3>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            pattern=".*\S.*"
            title="Please enter your name, rather than spaces."
            placeholder="Jane Apio"
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="jane@company.com"
            maxLength={254}
          />
        </label>
      </div>
      <label>
        What can we help you with?
        <select
          name="service"
          id="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value as Service)}
        >
          <option value="">Select a service</option>
          {services.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Tell us about your project
        <textarea
          name="message"
          required
          rows={4}
          minLength={20}
          aria-describedby="project-help form-error"
          placeholder="What needs to improve, who will use it, and what should the software help them do?"
          maxLength={4000}
        />
      </label>
      <p id="project-help" className="form-note">At least 20 characters. A short outline is enough to start.</p>
      <label>
        Preferred timeline (optional)
        <input name="timeline" maxLength={120} placeholder="For example, next term or flexible" />
      </label>
      <p id="form-error" role="alert" className="form-error">{error}</p>
      <button className="button button-dark" type="submit">
        Prepare my enquiry <span>↗</span>
      </button>
      <p className="form-note">
        Opens your email app with your project brief. Nothing is sent until you
        send it.
      </p>
      {brief && (
        <div id="form-result" role="status">
          <p>
            Your enquiry is ready. If your email app didn’t open, copy the brief
            and email it to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <button type="button" id="copy-brief" onClick={copyBrief}>
            {copied
              ? "Brief copied ✓"
              : showFallback
                ? "Select and copy the brief below"
                : "Copy project brief"}
          </button>
          {showFallback && (
            <textarea
              id="brief-fallback"
              ref={fallback}
              aria-label="Prepared project brief"
              readOnly
              value={brief}
              onFocus={(e) => e.currentTarget.select()}
            />
          )}
        </div>
      )}
    </form>
  );
}
