"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home",     href: "#home" },
  { label: "Menu",     href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "#fff" : "transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,.08)" : "none",
        transition: "background .3s, box-shadow .3s",
      }}
    >
      {/* Announcement strip */}
      <div
        style={{
          background: "var(--clr-brand)",
          color: "#fff",
          fontSize: ".75rem",
          padding: ".35rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <span style={{ color: "#f5c842" }}>★★★★½</span>
          <span>4.5 Excellent Rating · Open Daily Until 10 PM</span>
        </span>
        <a
          href="tel:+2348051190139"
          style={{
            display: "flex", alignItems: "center", gap: ".35rem",
            color: "#fff", textDecoration: "none", fontWeight: 600,
            flexShrink: 0,
          }}
        >
          <Phone size={11} /> 0805 119 0139
        </a>
      </div>

      {/* Main bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: ".85rem 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".75rem" }}>
          <div
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "var(--clr-brand)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: "var(--font-display)", color: "#f5c842", fontSize: "1.25rem", fontWeight: 700 }}>M</span>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--clr-brand)", lineHeight: 1 }}>
              Micosa
            </div>
            <div style={{ fontSize: ".65rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--clr-gold)" }}>
              Cuisine
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: "2rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: ".75rem" }}>
          <div style={{ display: "flex", gap: ".4rem" }}>
            {[
              { label: "Dine-In",      bg: "#fef2f2", color: "#991b1b" },
              { label: "Drive-Thru",   bg: "#fffbeb", color: "#92400e" },
              { label: "Delivery",     bg: "#f0fdf4", color: "#166534" },
            ].map((s) => (
              <span
                key={s.label}
                style={{
                  background: s.bg, color: s.color,
                  fontSize: ".7rem", fontWeight: 700,
                  padding: ".25rem .65rem", borderRadius: 99,
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
          <a
            href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20order."
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: ".55rem 1.25rem", fontSize: ".8rem" }}
          >
            Order Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--clr-brand)", padding: ".25rem" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          background: "#fff",
          borderTop: "1px solid var(--clr-border)",
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height .35s ease",
        }}
      >
        <nav style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: ".75rem" }}>
          {links.map((l) => (
            <a
              key={l.href} href={l.href}
              className="nav-link"
              style={{ padding: ".5rem 0", borderBottom: "1px solid var(--clr-border)", fontSize: "1rem" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: ".5rem" }}>
            {["🍽 Dine-In","🚗 Drive-Thru","🏍 Delivery"].map((s) => (
              <span key={s} style={{ background: "var(--clr-cream)", border: "1px solid var(--clr-border)", fontSize: ".75rem", fontWeight: 600, padding: ".3rem .75rem", borderRadius: 99, color: "var(--clr-charcoal)" }}>{s}</span>
            ))}
          </div>
          <a
            href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20order."
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textAlign: "center", justifyContent: "center", marginTop: ".25rem" }}
          >
            Order via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}