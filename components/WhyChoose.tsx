"use client";

const items = [
  {
    icon: "⭐",
    title: "Excellent 4.5★ Rating",
    desc: "Verified by satisfied customers — \"Very organized and tasty food.\" Quality you can rely on every visit.",
    highlight: false,
  },
  {
    icon: "🚗",
    title: "Drive-Through Service",
    desc: "One of the only drive-throughs in the Lagos / Ogun area. Order from your car without parking or stepping out.",
    highlight: true,
    badge: "Unique!",
  },
  {
    icon: "🔀",
    title: "Three Ways to Enjoy",
    desc: "Dine-In for a relaxed sit-down, Drive-Through for a quick pick-up, or Delivery to your doorstep.",
    highlight: false,
  },
  {
    icon: "✅",
    title: "Organized & Professional",
    desc: "\"Very organized\" — a customer's own words. Clean kitchen, efficient service, consistent quality every time.",
    highlight: false,
  },
  {
    icon: "😋",
    title: "Genuinely Tasty Food",
    desc: "\"Tasty food\" — verified. Fresh ingredients, expert Nigerian and continental cooking, every dish done right.",
    highlight: false,
  },
  {
    icon: "📍",
    title: "Easy to Find",
    desc: "Paradise Bus Stop, Ishashi Road — a clear landmark serving Ojodu (Lagos) and Ajuwon / Akute (Ogun State).",
    highlight: false,
  },
];

export default function WhyChoose() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: ".75rem" }}>Our Advantages</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--clr-charcoal)", marginBottom: "1rem" }}>
            The <em>Micosa</em> Advantage
          </h2>
          <div className="divider divider-center" />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.highlight ? "var(--clr-brand)" : "var(--clr-cream)",
                border: item.highlight ? "none" : "1px solid var(--clr-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                position: "relative",
                transition: "transform .25s, box-shadow .25s",
                outline: item.highlight ? "2px solid var(--clr-gold)" : "none",
                outlineOffset: 2,
              }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)"; }}
              onMouseOut={(e)  => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";   (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              {item.badge && (
                <span
                  style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    background: "var(--clr-gold)", color: "#fff",
                    fontSize: ".65rem", fontWeight: 800,
                    padding: ".2rem .55rem", borderRadius: 99,
                  }}
                >
                  {item.badge}
                </span>
              )}
              <div
                style={{
                  fontSize: "1.75rem",
                  marginBottom: "1rem",
                  width: 48, height: 48,
                  background: item.highlight ? "rgba(255,255,255,.15)" : "#fff",
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: item.highlight ? "none" : "1px solid var(--clr-border)",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: item.highlight ? "#fff" : "var(--clr-brand)",
                  marginBottom: ".6rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: ".875rem", color: item.highlight ? "rgba(255,255,255,.8)" : "var(--clr-muted)", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}