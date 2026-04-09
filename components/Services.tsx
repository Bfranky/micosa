"use client";
const services = [
  {
    icon: "🍽️",
    title: "Dine-In",
    subtitle: "Full restaurant experience",
    color: "var(--clr-brand)",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    features: [
      "Comfortable, spacious seating",
      "Full menu available",
      "Attentive table service",
      "Clean, organized atmosphere",
      "Family & business-friendly",
      "Open until 10 PM daily",
    ],
    primaryCta:   { label: "Reserve a Table",  href: "https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20reserve%20a%20table." },
    secondaryCta: { label: "Get Directions",   href: "https://maps.google.com/?q=Paradise+Bus+Stop+Ishashi+Road+Ojodu+Lagos" },
    primaryClass: "btn-primary",
  },
  {
    icon: "🚗",
    title: "Drive-Through",
    subtitle: "Order from your car — no parking needed",
    color: "var(--clr-gold)",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badge: "Unique in the Area!",
    steps: ["Pull up to order point", "Place your order", "Pay at the window", "Collect hot food & go"],
    features: [
      "No parking required",
      "Full menu available",
      "5–10 minute service",
      "Call ahead to pre-order",
      "Kids stay in car seats",
      "Rain or shine — always open",
    ],
    primaryCta:   { label: "Call to Pre-Order",   href: "tel:+2348051190139" },
    secondaryCta: { label: "WhatsApp Pre-Order",  href: "https://wa.me/2348051190139?text=Hello!%20I'd%20like%20to%20pre-order%20for%20drive-through." },
    primaryClass: "btn-gold",
  },
  {
    icon: "🏍️",
    title: "Delivery",
    subtitle: "Hot food delivered to your door",
    color: "#2d7a4f",
    img: "https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=600&q=80",
    features: [
      "Ojodu, Lagos",
      "Ajuwon / Akute, Ogun State",
      "Ishashi Road corridor",
      "Food arrives hot & fresh",
      "Cash or bank transfer",
      "Call to confirm your area",
    ],
    primaryCta:   { label: "Order via WhatsApp",  href: "https://wa.me/2348051190139?text=Hi!%20I'd%20like%20delivery.%20My%20order:%20" },
    secondaryCta: { label: "Call to Order",       href: "tel:+2348051190139" },
    primaryClass: "btn-green",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "5rem 1.5rem", background: "var(--clr-cream)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: ".75rem" }}>How We Serve You</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--clr-charcoal)", marginBottom: "1rem" }}>
            Enjoy Micosa <em>Your Way</em>
          </h2>
          <div className="divider divider-center" />
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {services.map((s) => (
            <article
              key={s.title}
              className="card"
              style={{ display: "flex", flexDirection: "column", position: "relative" }}
            >
              {/* Badge */}
              {s.badge && (
                <div
                  style={{
                    position: "absolute", top: "1rem", right: "1rem", zIndex: 2,
                    background: "var(--clr-gold)", color: "#fff",
                    fontSize: ".68rem", fontWeight: 700,
                    padding: ".25rem .6rem", borderRadius: 99,
                    boxShadow: "0 2px 8px rgba(0,0,0,.2)",
                  }}
                >
                  ★ {s.badge}
                </div>
              )}

              {/* Image */}
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={s.img} alt={s.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s ease" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                  onMouseOut={(e)  => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>

              {/* Header bar */}
              <div style={{ background: s.color, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: ".75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>{s.icon}</span>
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.1rem", fontFamily: "var(--font-body)", fontWeight: 700, marginBottom: ".1rem" }}>{s.title}</h3>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".75rem" }}>{s.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* Steps (drive-through only) */}
                {s.steps && (
                  <div style={{ background: "var(--clr-cream)", borderRadius: "var(--radius-md)", padding: ".9rem 1rem" }}>
                    <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--clr-gold)", marginBottom: ".5rem" }}>How It Works</p>
                    {s.steps.map((step, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: ".3rem" }}>
                        <span
                          style={{
                            width: 20, height: 20, borderRadius: "50%",
                            background: "var(--clr-gold)", color: "#fff",
                            fontSize: ".65rem", fontWeight: 800,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >{i + 1}</span>
                        <span style={{ fontSize: ".8rem", color: "var(--clr-charcoal)" }}>{step}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".4rem" }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: ".5rem", fontSize: ".85rem", color: "var(--clr-charcoal)" }}>
                      <span style={{ color: "#2d7a4f", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  <a
                    href={s.primaryCta.href}
                    target="_blank" rel="noopener noreferrer"
                    className={`btn ${s.primaryClass}`}
                    style={{ justifyContent: "center" }}
                  >
                    {s.primaryCta.label}
                  </a>
                  <a
                    href={s.secondaryCta.href}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ justifyContent: "center" }}
                  >
                    {s.secondaryCta.label}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}