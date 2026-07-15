"use client";

import { useState } from "react";

const NAV = [
  { label: "Dental Implants", href: "/dental-implants" },
  { label: "General Dentistry", href: "/general-dentistry" },
  { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
  { label: "Our Team", href: "/our-team" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/logo.png" alt="Jeffrey S. Burns DDS" />
        </a>
        <nav className={"menu" + (open ? " open" : "")}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="nav-phone" href="tel:5407408937">
            540-740-8937
          </a>
          <a className="nav-cta-btn" href="#consult">
            Free Consultation
          </a>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
