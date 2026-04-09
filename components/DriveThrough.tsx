"use client";

const benefits = [
  { icon: "🅿️", title: "No Parking",      desc: "Drive up, get served, drive away"       },
  { icon: "⚡", title: "Fast Service",     desc: "5–10 minutes average"                   },
  { icon: "☔", title: "Rain or Shine",    desc: "Weather never stops your meal"           },
  { icon: "👶", title: "Families",         desc: "Kids stay comfortable in their seats"   },
  { icon: "💼", title: "Busy People",      desc: "Perfect for tight schedules"             },
  { icon: "🌟", title: "Rare in the Area", desc: "One of the only drive-throughs nearby"  },
];

const tips = [
  "📞  Call ahead to pre-order — food ready on arrival",
  "💳  Cash, POS or bank transfer accepted",
  "🍱  Large orders? Please call 30 min ahead",
  "🕙  Open daily until 10:00 PM",
];

export default function DriveThrough() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Hero banner */}
        <div
          className="gold-band"
          style={{
            borderRadius: "var(--radius-xl)",
            padding: "3rem 2rem",
            textAlign: "center",
            color: "#fff",
            marginBottom: "3.5rem",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: ".75rem" }}>🚗</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: ".5rem",
            }}
          >
            Drive-Through Service
          </h2>
          <p style={{ fontSize: "1rem", opacity: .88, marginBottom: "1.75rem" }}>
            Order · Pay · Collect — All From Your Car
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".75rem" }}>
            <a href="tel:+2348051190139" className="btn" style={{ background: "#fff", color: "var(--clr-gold)", fontWeight: 700 }}>
              📞 Call to Pre-Order
            </a>
            <a
              href="https://maps.google.com/?q=Paradise+Bus+Stop+Ishashi+Road+Ojodu+Lagos"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              📍 Find Us
            </a>
          </div>
        </div>

        {/* Why section */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p className="section-label" style={{ marginBottom: ".5rem" }}>Why Use It</p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--clr-charcoal)" }}>
            Why Choose Drive-Through?
          </h3>
          <div className="divider divider-center" style={{ marginTop: ".75rem" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                background: "var(--clr-cream)",
                border: "1px solid var(--clr-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 1rem",
                textAlign: "center",
                transition: "transform .25s, box-shadow .25s",
              }}
              onMouseOver={(e) => {
  e.currentTarget.style.transform = "translateY(-4px)";
  e.currentTarget.style.boxShadow = "var(--shadow-md)";
}}
onMouseOut={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
}} >
              <div style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{b.icon}</div>
              <div style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--clr-brand)", marginBottom: ".25rem" }}>{b.title}</div>
              <div style={{ fontSize: ".78rem", color: "var(--clr-muted)", lineHeight: 1.4 }}>{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Tips panel */}
        <div
          style={{
            background: "var(--clr-brand)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem 2rem",
            color: "#fff",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              color: "#f5c842",
              textAlign: "center",
              marginBottom: "1.25rem",
            }}
          >
            Pro Tips for Drive-Through
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: ".75rem",
            }}
          >
            {tips.map((t) => (
              <div
                key={t}
                style={{
                  background: "rgba(255,255,255,.1)",
                  borderRadius: "var(--radius-md)",
                  padding: ".85rem 1rem",
                  fontSize: ".85rem",
                  color: "rgba(255,255,255,.9)",
                  lineHeight: 1.5,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}