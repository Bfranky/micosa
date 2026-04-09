"use client";
const year = new Date().getFullYear();

const serviceLinks = [
  { label: "🍽️ Dine-In",      href: "#services" },
  { label: "🚗 Drive-Through", href: "#services" },
  { label: "🏍️ Delivery",     href: "#services" },
  { label: "📦 Takeaway",      href: "#services" },
  { label: "🎉 Catering",      href: "#contact"  },
];

const quickLinks = [
  { label: "Home",      href: "#home"     },
  { label: "Menu",      href: "#menu"     },
  { label: "About",     href: "#about"    },
  { label: "Services",  href: "#services" },
  { label: "Reviews",   href: "#reviews"  },
  { label: "Contact",   href: "#contact"  },
];

export default function Footer() {
  const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: ".6rem" };
  const link: React.CSSProperties = { color: "rgba(255,255,255,.55)", fontSize: ".875rem", textDecoration: "none", transition: "color .2s" };
  const heading: React.CSSProperties = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--clr-gold)", marginBottom: ".75rem" };

  return (
    <footer style={{ background: "#111", color: "#fff" }}>
      {/* Main grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--clr-brand)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", color: "#f5c842", fontSize: "1.3rem", fontWeight: 700 }}>M</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", lineHeight: 1 }}>Micosa</div>
                <div style={{ fontSize: ".65rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--clr-gold)" }}>Cuisine</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".82rem", lineHeight: 1.65, marginBottom: "1rem" }}>
              Organized Service, Tasty Food, Total Convenience — serving Ojodu Lagos &amp; Ajuwon Ogun State.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 99, padding: ".35rem .85rem" }}>
              <span style={{ color: "#f5c842" }}>★★★★½</span>
              <span style={{ fontSize: ".75rem", fontWeight: 600, color: "rgba(255,255,255,.7)" }}>4.5 Excellent</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={heading}>Our Services</p>
            <div style={col}>
              {serviceLinks.map((l) => (
                <a key={l.label} href={l.href} style={link} onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--clr-gold)"; }} onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.55)"; }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={heading}>Quick Links</p>
            <div style={col}>
              {quickLinks.map((l) => (
                <a key={l.label} href={l.href} style={link} onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--clr-gold)"; }} onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.55)"; }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={heading}>Contact</p>
            <div style={col}>
              <span style={{ ...link, color: "rgba(255,255,255,.55)" }}>📍 Paradise Bus Stop, Ishashi Road, Ojodu / Ajuwon</span>
              <a href="tel:+2348051190139" style={link} onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--clr-gold)"; }} onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.55)"; }}>📞 0805 119 0139</a>
              <a href="https://wa.me/2348051190139" target="_blank" rel="noopener noreferrer" style={link} onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4ade80"; }} onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.55)"; }}>💬 WhatsApp Us</a>
              <span style={{ ...link, color: "rgba(255,255,255,.55)" }}>🕙 Open Daily Until 10:00 PM</span>
            </div>
            <a
              href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20place%20an%20order."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-green"
              style={{ marginTop: "1.1rem", fontSize: ".8rem", padding: ".6rem 1.1rem" }}
            >
              📱 Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "1rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: ".75rem",
            fontSize: ".75rem", color: "rgba(255,255,255,.35)",
          }}
        >
          <span>© {year} Micosa Cuisine. All rights reserved.</span>
          <span style={{ fontStyle: "italic" }}>"Organized Service, Tasty Food, Total Convenience"</span>
          <div style={{ display: "flex", gap: "1rem" }}>
            {["🍽️ Dine-In", "🚗 Drive-Through", "🏍️ Delivery"].map((s) => (
              <span key={s} style={{ color: "var(--clr-gold)" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}