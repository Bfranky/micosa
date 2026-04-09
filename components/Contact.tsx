"use client";
import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  service: string;
  time: string;
  order: string;
};

const waTemplates = [
  { label: "🍽️ Dine-In Table",   msg: "Hi Micosa! I'd like to reserve a table for ____ people at ____." },
  { label: "🚗 Drive-Through",   msg: "Hello! I'd like to pre-order for drive-through. My order: ____" },
  { label: "🏍️ Delivery",        msg: "Hi! I'd like delivery to ____. My order: ____. What's the fee?" },
];

export default function Contact() {
  const [form, setForm]         = useState<FormState>({ name: "", phone: "", service: "", time: "", order: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hi Micosa!\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nTime: ${form.time}\nOrder: ${form.order}`
    );
    setTimeout(() => window.open(`https://wa.me/2348051190139?text=${msg}`, "_blank"), 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid var(--clr-border)",
    borderRadius: "var(--radius-md)",
    padding: ".7rem 1rem",
    fontSize: ".875rem",
    fontFamily: "var(--font-body)",
    color: "var(--clr-charcoal)",
    outline: "none",
    transition: "border-color .2s",
    background: "#fff",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: ".72rem",
    fontWeight: 700,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "var(--clr-muted)",
    marginBottom: ".4rem",
  };

  return (
    <section id="contact" style={{ padding: "5rem 1.5rem", background: "var(--clr-cream)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: ".75rem" }}>Get In Touch</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--clr-charcoal)", marginBottom: "1rem" }}>
            Ready for <em>Organized, Tasty Food?</em>
          </h2>
          <div className="divider divider-center" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem" }}>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "#fff", border: "1px solid var(--clr-border)", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--clr-brand)", marginBottom: "1rem" }}>
                🍽️ Micosa Cuisine
              </h3>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--clr-muted)", fontSize: ".9rem", marginBottom: "1.25rem" }}>
                "Organized Service, Tasty Food, Total Convenience"
              </p>
              {[
                { icon: "📍", text: "Paradise Bus Stop, Ishashi Road, Ojodu / Ajuwon" },
                { icon: "📞", text: "0805 119 0139", href: "tel:+2348051190139" },
                { icon: "💬", text: "WhatsApp: 0805 119 0139", href: "https://wa.me/2348051190139" },
                { icon: "🕙", text: "Open Daily Until 10:00 PM" },
                { icon: "⭐", text: "4.5★ Excellent Rating" },
              ].map((row) => (
                <div key={row.text} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", marginBottom: ".65rem" }}>
                  <span style={{ flexShrink: 0 }}>{row.icon}</span>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ color: "var(--clr-brand)", fontWeight: 600, fontSize: ".875rem", textDecoration: "none" }}>
                      {row.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: ".875rem", color: "var(--clr-charcoal)" }}>{row.text}</span>
                  )}
                </div>
              ))}
            </div>

            <a href="tel:+2348051190139" className="btn btn-primary" style={{ justifyContent: "center" }}>📞 Call: 0805 119 0139</a>
            <a href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20order." target="_blank" rel="noopener noreferrer" className="btn btn-green" style={{ justifyContent: "center" }}>💬 WhatsApp Order</a>
            <a href="https://maps.google.com/?q=Paradise+Bus+Stop+Ishashi+Road+Ojodu+Lagos" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent: "center" }}>🗺️ Get Directions</a>
          </div>

          {/* Order form */}
          <div style={{ background: "#fff", border: "1px solid var(--clr-border)", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--clr-brand)", marginBottom: "1.5rem" }}>
              📋 Quick Order Inquiry
            </h3>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
                <h4 style={{ color: "#166534", fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: ".5rem" }}>Order Received!</h4>
                <p style={{ color: "var(--clr-muted)", fontSize: ".875rem" }}>Opening WhatsApp to confirm your order…</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input name="name" required value={form.name} onChange={update} placeholder="Full name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input name="phone" type="tel" required value={form.phone} onChange={update} placeholder="e.g. 0805 119 0139" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Service Type</label>
                  <select name="service" value={form.service} onChange={update} style={inputStyle}>
                    <option value="">Select a service…</option>
                    <option value="Dine-In Reservation">🍽️ Dine-In Reservation</option>
                    <option value="Drive-Through Pre-Order">🚗 Drive-Through Pre-Order</option>
                    <option value="Delivery Order">🏍️ Delivery Order</option>
                    <option value="General Inquiry">💬 General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Preferred Time</label>
                  <input name="time" value={form.time} onChange={update} placeholder="e.g. 7 PM today" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Your Order / Message</label>
                  <textarea name="order" value={form.order} onChange={update} rows={3}
                    placeholder="e.g. Jollof rice ×2, grilled chicken ×1, delivery to Ajuwon…"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn btn-primary" style={{ justifyContent: "center", opacity: loading ? .6 : 1 }}>
                  {loading ? "Sending…" : "🚀 Submit Inquiry"}
                </button>
                <div style={{ textAlign: "center", fontSize: ".78rem", color: "var(--clr-muted)" }}>— or —</div>
                <a href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="btn btn-green" style={{ justifyContent: "center" }}>
                  💬 Order Directly via WhatsApp
                </a>
              </form>
            )}
          </div>

          {/* WhatsApp shortcuts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "var(--clr-brand)", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", color: "#f5c842", fontSize: "1.1rem", marginBottom: "1rem" }}>⭐ Why Order From Us?</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".6rem" }}>
                {["⭐ Excellent 4.5★ rating", "✅ Very organized service", "😋 Tasty, quality food", "🔀 Three service options", "📍 Easy Paradise B/S location", "🕙 Open until 10 PM"].map((item) => (
                  <li key={item} style={{ fontSize: ".875rem", color: "rgba(255,255,255,.85)" }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: "#fff", border: "1px solid var(--clr-border)", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--clr-brand)", marginBottom: "1rem" }}>💬 Quick WhatsApp Starters</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                {waTemplates.map((t) => (
                  <a
                    key={t.label}
                    href={`https://wa.me/2348051190139?text=${encodeURIComponent(t.msg)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      border: "1px solid #bbf7d0",
                      color: "#166534",
                      background: "#f0fdf4",
                      borderRadius: "var(--radius-md)",
                      padding: ".7rem",
                      fontSize: ".8rem", fontWeight: 600,
                      textDecoration: "none",
                      transition: "background .2s",
                    }}
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}