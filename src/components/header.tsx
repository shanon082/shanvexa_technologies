"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <header className="header">
      <a className="brand" href="#" aria-label="Shanvexa Technologies home">
        <svg className="brand-symbol" viewBox="0 0 40 40" aria-hidden="true">
          <path d="M8 7h24L18 20h14L8 34l12-13H8z" fill="currentColor" />
        </svg>
        <span>
          shanvexa<span className="brand-sub">TECHNOLOGIES</span>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#approach">Our approach</a>
        <a href="#about">About us</a>
      </nav>
      <a href="#contact" className="button nav-cta">
        Let’s talk <span>↗</span>
      </a>
      <button
        className="menu-button"
        aria-controls="mobile-nav"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span></span>
        <span></span>
      </button>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onClick={() => setOpen(false)}
      >
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#approach">Our approach</a>
        <a href="#about">About us</a>
        <a href="#contact">Let’s talk ↗</a>
      </nav>
    </header>
  );
}
