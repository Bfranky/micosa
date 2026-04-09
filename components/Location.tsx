"use client";
import { useState } from "react";

const areas = ["Ojodu, Lagos", "Ajuwon, Ogun State", "Akute area", "Ishashi Road corridor", "Surrounding communities"];

export default function Location() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("Paradise Bus Stop, Ishashi Road, Ojodu, Lagos");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="location" style={{ padding: "5rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: ".75rem" }}>Find Us</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--clr-charcoal)", marginBottom: "1rem" }}>
            Paradise Bus Stop, <em>Ishashi Road</em>
          </h2>
          <div className="divider divider-center" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "start" }}>

          {/* Map */}
          <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", border: "2px solid var(--clr-border)", boxShadow: "var(--shadow-md)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3!3d6.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sParadise+Bus+Stop+Ishashi+Road+Ojodu!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Micosa Cuisine on Google Maps"
            />
          </div>

          {/* Info panels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Address */}
            <div style={{ background: "var(--clr-cream)", border: "1px solid var(--clr-border)", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--clr-brand)", marginBottom: "1rem" }}>📍 Address</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".6rem", fontSize: ".875rem", color: "var(--clr-charcoal)" }}>
                <li><strong>Primary:</strong> M9CG+289, Ishashi Road, Paradise Bus Stop, Ojodu, Lagos</li>
                <li><strong>Also serves:</strong> Ajuwon / Akute, Ogun State</li>
                <li><strong>Landmark:</strong> Paradise Bus Stop — easy to find</li>
              </ul>
              <button
                onClick={copy}
                style={{
                  marginTop: "1rem",
                  background: "#fff",
                  border: "1px solid var(--clr-border)",
                  borderRadius: 99,
                  padding: ".35rem .9rem",
                  fontSize: ".75rem", fontWeight: 600,
                  color: "var(--clr-gold)",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
              >
                {copied ? "✓ Copied!" : "📋 Copy Address"}
              </button>
            </div>

            {/* Hours */}
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--clr-brand)", marginBottom: "1rem" }}>🕙 Hours</h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: ".875rem", fontWeight: 500 }}>Monday – Sunday</span>
                <span style={{ background: "#dcfce7", color: "#166534", fontSize: ".75rem", fontWeight: 700, padding: ".3rem .75rem", borderRadius: 99 }}>
                  Open All Day · Closes 10 PM
                </span>
              </div>
              <p style={{ marginTop: ".75rem", fontSize: ".8rem", color: "var(--clr-brand)", fontWeight: 600 }}>
                🌙 Perfect for late dinner after work
              </p>
            </div>

            {/* Delivery areas */}
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#166534", marginBottom: ".75rem" }}>📦 Delivery Areas</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {areas.map((a) => (
                  <span key={a} style={{ background: "#fff", border: "1px solid #bbf7d0", color: "#166534", fontSize: ".75rem", fontWeight: 600, padding: ".25rem .65rem", borderRadius: 99 }}>
                    {a}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: ".75rem", fontSize: ".75rem", color: "#166534" }}>* Call to confirm your location</p>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
              <a
                href="https://maps.google.com/?q=M9CG+289+Ishashi+Road+Paradise+Bus+Stop+Ojodu+Lagos"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: "center" }}
              >
                🗺️ Get Directions
              </a>
              <a
                href="https://wa.me/2348051190139?text=Hi%20Micosa!%20Can%20you%20share%20your%20exact%20location?"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-green"
                style={{ flex: 1, justifyContent: "center" }}
              >
                💬 Ask on WhatsApp
              </a>
            </div>
            <a href="tel:+2348051190139" className="btn btn-outline" style={{ justifyContent: "center" }}>
              📞 Call for Directions: 0805 119 0139
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}