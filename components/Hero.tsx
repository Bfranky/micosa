import { MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "90px",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(92,20,20,.88) 0%, rgba(26,16,8,.78) 60%, rgba(92,20,20,.82) 100%)",
        }}
      />
      {/* Subtle grain texture */}
      <div
        style={{
          position: "absolute", inset: 0, opacity: .04,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        style={{
          position: "relative", zIndex: 10,
          maxWidth: "860px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* Rating pill */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            background: "rgba(255,255,255,.12)",
            border: "1px solid rgba(255,255,255,.25)",
            borderRadius: 99,
            padding: ".4rem 1rem",
            fontSize: ".8rem", fontWeight: 600,
            marginBottom: "1.75rem",
            backdropFilter: "blur(6px)",
          }}
        >
          <span style={{ color: "#f5c842", fontSize: "1rem" }}>★★★★½</span>
          <span>4.5 Excellent Rating</span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 700,
            letterSpacing: "-.01em",
            lineHeight: 1,
            marginBottom: ".25rem",
            textShadow: "0 2px 24px rgba(0,0,0,.3)",
          }}
        >
          Micosa
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(.9rem, 3vw, 1.1rem)",
            fontWeight: 300,
            letterSpacing: ".35em",
            textTransform: "uppercase",
            color: "#f5c842",
            marginBottom: "1.5rem",
          }}
        >
          Cuisine
        </p>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,.88)",
            marginBottom: ".75rem",
          }}
        >
          Organized Service, Tasty Food, Total Convenience
        </p>
        <p
          style={{
            fontSize: ".8rem", fontWeight: 600,
            letterSpacing: ".18em", textTransform: "uppercase",
            color: "rgba(255,255,255,.65)",
            marginBottom: "2.5rem",
          }}
        >
          Dine-In &nbsp;·&nbsp; Drive-Through &nbsp;·&nbsp; Delivery
        </p>

        {/* Drive-through badge */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            background: "var(--clr-gold)",
            borderRadius: 99,
            padding: ".45rem 1.1rem",
            fontSize: ".8rem", fontWeight: 700,
            marginBottom: "2.5rem",
          }}
        >
          🚗 DRIVE-THROUGH Available — First in the Area!
        </div>

        {/* Service badges */}
        <div
          style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { icon: "🍽️", label: "DINE-IN",       sub: "Comfortable seating",  bg: "rgba(124,29,29,.7)"  },
            { icon: "🚗", label: "DRIVE-THROUGH", sub: "Stay in your car",      bg: "rgba(201,146,42,.75)" },
            { icon: "🏍️", label: "DELIVERY",      sub: "We come to you",        bg: "rgba(45,122,79,.7)"   },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: s.bg,
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem 1.5rem",
                display: "flex", flexDirection: "column", alignItems: "center", gap: ".3rem",
                minWidth: "120px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{s.icon}</span>
              <span style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: ".06em" }}>{s.label}</span>
              <span style={{ fontSize: ".68rem", opacity: .75 }}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".75rem", marginBottom: "2.5rem" }}>
          <a
            href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20order%20delivery."
            target="_blank" rel="noopener noreferrer"
            className="btn btn-green"
          >
            🏍️ Order Delivery
          </a>
          <a href="#menu" className="btn btn-gold">🍛 View Menu</a>
          <a
            href="https://maps.google.com/?q=Paradise+Bus+Stop+Ishashi+Road+Ojodu+Lagos"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-outline-white"
          >
            📍 Directions
          </a>
        </div>

        {/* Location & hours strip */}
        <div
          style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "1.5rem",
            fontSize: ".82rem", color: "rgba(255,255,255,.65)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
            <MapPin size={13} /> Paradise Bus Stop, Ishashi Road, Ojodu / Ajuwon
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
            <Clock size={13} /> Open Daily Until 10:00 PM
          </span>
        </div>
      </div>
    </section>
  );
}