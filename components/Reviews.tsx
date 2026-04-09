const reviews = [
  {
    name:     "Nancyime Mua",
    handle:   "Google Review",
    rating:   5,
    ago:      "2 years ago",
    type:     "Dine-In",
    text:     "Very organized and tasty food. I had a great dine-in experience. The service was professional and the food was delicious. Highly recommend!",
    verified: true,
  },
  {
    name:     "Emryzz Porsch",
    handle:   "Local Guide · 20 reviews",
    rating:   4,
    ago:      "10 months ago",
    type:     "Dine-In",
    text:     "Great spot at Paradise Bus Stop. Solid food and a good experience overall. The organized operations truly stand out.",
    verified: true,
    isGuide:  true,
  },
  {
    name:     "Busy Professional",
    handle:   "Drive-Through Customer",
    rating:   5,
    ago:      "Recent",
    type:     "Drive-Through",
    text:     "The drive-through is a game changer. I grab lunch without leaving my car — food is always hot and freshly made. Micosa is my regular spot.",
    verified: false,
  },
  {
    name:     "Family Customer",
    handle:   "Delivery Order",
    rating:   5,
    ago:      "Recent",
    type:     "Delivery",
    text:     "We order delivery regularly. Food always arrives hot, well-packaged and delicious. Very organized service — the kids love the jollof rice!",
    verified: false,
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  "Dine-In":      { bg: "#fef2f2", text: "#991b1b" },
  "Drive-Through":{ bg: "#fffbeb", text: "#92400e" },
  "Delivery":     { bg: "#f0fdf4", text: "#166534" },
};

function Stars({ n }: { n: number }) {
  return (
    <span>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < n ? "#f5c842" : "#ddd" }}>★</span>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: "5rem 1.5rem", background: "var(--clr-brand)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: ".75rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#f5c842", marginBottom: ".75rem" }}>
            Customer Testimonials
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#fff", marginBottom: "1.5rem" }}>
            What Our Customers Say
          </h2>

          {/* Rating block */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.2)",
              borderRadius: "var(--radius-lg)",
              padding: "1.25rem 2rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800, color: "#f5c842", lineHeight: 1 }}>4.5</div>
              <div style={{ marginTop: ".25rem", fontSize: "1.1rem" }}><Stars n={4} /><span style={{ color: "#f5c842" }}>½</span></div>
            </div>
            <div style={{ borderLeft: "1px solid rgba(255,255,255,.2)", paddingLeft: "1.25rem", textAlign: "left" }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem" }}>Excellent</div>
              <div style={{ color: "rgba(255,255,255,.6)", fontSize: ".82rem" }}>Google Reviews</div>
              <div style={{ color: "#f5c842", fontSize: ".75rem", fontWeight: 600, marginTop: ".25rem" }}>
                "Organized & Tasty" — Verified
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {reviews.map((r) => {
            const tc = typeColors[r.type] ?? typeColors["Dine-In"];
            return (
              <div
                key={r.name}
                style={{
                  background: "rgba(255,255,255,.07)",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  position: "relative",
                }}
              >
                {/* Big quote mark */}
                <span style={{ position: "absolute", top: ".75rem", right: "1rem", fontSize: "4rem", color: "rgba(255,255,255,.08)", fontFamily: "Georgia, serif", lineHeight: 1, userSelect: "none" }}>"</span>

                {/* Reviewer row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem", gap: ".5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: "var(--clr-gold)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.1rem", fontWeight: 800, color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: ".9rem" }}>{r.name}</div>
                      <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".73rem" }}>{r.handle}</div>
                      {r.isGuide && <div style={{ color: "#f5c842", fontSize: ".7rem", fontWeight: 600 }}>📍 Local Guide</div>}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <Stars n={r.rating} />
                    <div style={{ color: "rgba(255,255,255,.4)", fontSize: ".7rem", marginTop: ".15rem" }}>{r.ago}</div>
                  </div>
                </div>

                {/* Review text */}
                <p style={{ color: "rgba(255,255,255,.8)", fontSize: ".875rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1rem" }}>
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ background: tc.bg, color: tc.text, fontSize: ".7rem", fontWeight: 700, padding: ".25rem .6rem", borderRadius: 99 }}>
                    {r.type === "Drive-Through" ? "🚗" : r.type === "Delivery" ? "🏍️" : "🍽️"} {r.type}
                  </span>
                  {r.verified && (
                    <span style={{ color: "#4ade80", fontSize: ".72rem", fontWeight: 600 }}>✓ Verified</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".85rem", marginBottom: "1rem" }}>
            Enjoyed your meal? Share your experience!
          </p>
          <a
            href="https://g.page/r/micosa-cuisine"
            target="_blank" rel="noopener noreferrer"
            className="btn"
            style={{ background: "#f5c842", color: "var(--clr-brand)", fontWeight: 700 }}
          >
            ⭐ Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}