"use client";
const items = [
  { icon: "⭐", value: "4.5★",         sub: "Excellent Rating"     },
  { icon: "🚗", value: "Drive-Through", sub: "Unique in the Area"   },
  { icon: "🍽️", value: "3 Services",   sub: "Dine · Drive · Deliver" },
  { icon: "🕙", value: "Until 10 PM",  sub: "Open Daily"            },
  { icon: "📍", value: "Paradise B/S", sub: "Ishashi Road"           },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: "var(--clr-cream)",
        borderTop: "1px solid var(--clr-border)",
        borderBottom: "1px solid var(--clr-border)",
        padding: "1.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Trust items */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem 2.5rem",
            marginBottom: "1.25rem",
          }}
        >
          {items.map((item) => (
            <div key={item.value} style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--clr-brand)" }}>{item.value}</div>
                <div style={{ fontSize: ".72rem", color: "var(--clr-muted)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer quote */}
        <div style={{ textAlign: "center", borderTop: "1px solid var(--clr-border)", paddingTop: "1rem" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontStyle: "italic",
              color: "var(--clr-muted)",
            }}
          >
            "Very organized and tasty food." —{" "}
            <span style={{ color: "var(--clr-brand)", fontStyle: "normal", fontWeight: 600 }}>
              Nancyime Mua, Google Review ★★★★★
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}