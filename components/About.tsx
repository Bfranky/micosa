const stats = [
  { value: "4.5★",  label: "Google Rating",   note: "Excellent"       },
  { value: "3",     label: "Ways to Enjoy",    note: "Dine/Drive/Deliver" },
  { value: "10 PM", label: "Closes Daily",     note: "Late dining"     },
  { value: "2+",    label: "Years Operating",  note: "Trusted"         },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Text column */}
          <div>
            <p className="section-label" style={{ marginBottom: ".75rem" }}>Our Story</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 2.75rem)",
                color: "var(--clr-brand)",
                marginBottom: "1rem",
              }}
            >
              Welcome to<br />Micosa Cuisine
            </h2>
            <div className="divider" style={{ marginBottom: "1.5rem" }} />

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "var(--clr-muted)",
                marginBottom: "1.5rem",
              }}
            >
              "Where Organization Meets Delicious Taste"
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--clr-charcoal)", lineHeight: 1.75, fontSize: ".95rem" }}>
              <p>
                Micosa Cuisine is the premier food destination serving{" "}
                <strong>Ojodu, Lagos</strong> and{" "}
                <strong>Ajuwon / Akute, Ogun State</strong> — proudly rated{" "}
                <span style={{ color: "var(--clr-gold)", fontWeight: 700 }}>4.5★ Excellent</span> on Google.
              </p>
              <p>
                Our customers put it perfectly:{" "}
                <em style={{ color: "var(--clr-brand)", fontWeight: 600 }}>"Very organized and tasty food."</em>{" "}
                That commitment to quality drives everything we do.
              </p>
              <p>
                What sets us apart is our{" "}
                <strong>three-way convenience model</strong> — sit down and dine, pull up to our{" "}
                <span
                  style={{
                    background: "#fffbeb",
                    color: "#92400e",
                    padding: ".1rem .4rem",
                    borderRadius: 4,
                    fontWeight: 700,
                  }}
                >
                  Drive-Through
                </span>{" "}
                (one of very few in the area!), or get it{" "}
                <strong>delivered to your door</strong>.
              </p>
              <p>
                Find us at <strong>Paradise Bus Stop, Ishashi Road</strong> — easy to reach, open every day until{" "}
                <strong>10:00 PM</strong>.
              </p>
            </div>

            {/* Quoted review block */}
            <blockquote
              style={{
                margin: "2rem 0 0",
                paddingLeft: "1.25rem",
                borderLeft: "3px solid var(--clr-brand)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  color: "var(--clr-brand)",
                  marginBottom: ".35rem",
                }}
              >
                "Very organized and tasty food."
              </p>
              <cite style={{ fontSize: ".8rem", color: "var(--clr-muted)", fontStyle: "normal" }}>
                — Nancyime Mua, Google Review ★★★★★
              </cite>
            </blockquote>
          </div>

          {/* Image + stats column */}
          <div>
            <div style={{ position: "relative", marginBottom: "2rem" }}>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85"
                alt="Delicious food at Micosa Cuisine"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: "var(--radius-xl)",
                  display: "block",
                  boxShadow: "var(--shadow-xl)",
                }}
              />
              {/* Floating rating badge */}
              <div
                style={{
                  position: "absolute", bottom: "-1rem", left: "-1rem",
                  background: "var(--clr-brand)",
                  color: "#fff",
                  borderRadius: "var(--radius-md)",
                  padding: ".75rem 1.1rem",
                  boxShadow: "var(--shadow-lg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#f5c842" }}>4.5★</div>
                <div style={{ fontSize: ".68rem", fontWeight: 600, opacity: .85 }}>Excellent Rating</div>
              </div>
              {/* Drive-through badge */}
              <div
                style={{
                  position: "absolute", top: "-1rem", right: "-1rem",
                  background: "var(--clr-gold)",
                  color: "#fff",
                  borderRadius: "var(--radius-md)",
                  padding: ".65rem .9rem",
                  boxShadow: "var(--shadow-lg)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.4rem" }}>🚗</div>
                <div style={{ fontSize: ".68rem", fontWeight: 700 }}>Drive-Through</div>
                <div style={{ fontSize: ".62rem", opacity: .85 }}>Available!</div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--clr-cream)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.1rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--clr-brand)" }}>{s.value}</div>
                  <div style={{ fontSize: ".8rem", fontWeight: 600, color: "var(--clr-charcoal)", marginTop: ".15rem" }}>{s.label}</div>
                  <div style={{ fontSize: ".7rem", color: "var(--clr-muted)" }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}