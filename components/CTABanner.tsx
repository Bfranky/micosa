export default function CTABanner() {
  return (
    <section
      style={{
        position: "relative",
        padding: "5.5rem 1.5rem",
        overflow: "hidden",
        backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(92,20,20,.93) 0%, rgba(26,16,8,.85) 60%, rgba(92,20,20,.92) 100%)",
        }}
      />

      <div
        style={{
          position: "relative", zIndex: 10,
          maxWidth: "800px",
          margin: "0 auto",
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
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ color: "#f5c842" }}>★★★★½</span> 4.5 Excellent Rating
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 700,
            marginBottom: ".75rem",
            textShadow: "0 2px 24px rgba(0,0,0,.3)",
          }}
        >
          Experience Organized Service<br />
          <em style={{ color: "#f5c842" }}>&amp; Tasty Food</em>
        </h2>

        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.72)", marginBottom: ".5rem" }}>
          Dine-In · Drive-Through · Delivery
        </p>
        <p style={{ fontSize: ".9rem", color: "#f5c842", fontWeight: 600, marginBottom: "2.25rem" }}>
          Paradise Bus Stop — Ojodu &amp; Ajuwon
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".75rem" }}>
          <a href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20order%20delivery." target="_blank" rel="noopener noreferrer" className="btn btn-green">
            🏍️ Order Delivery
          </a>
          <a href="https://maps.google.com/?q=Paradise+Bus+Stop+Ishashi+Road+Ojodu+Lagos" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            🚗 Use Drive-Through
          </a>
          <a href="#menu" className="btn btn-outline-white">🍛 View Menu</a>
          <a href="tel:+2348051190139" className="btn btn-outline-white">📞 0805 119 0139</a>
        </div>
      </div>
    </section>
  );
}