"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What makes Micosa Cuisine special?",           a: "A verified 4.5★ rating, 'very organized and tasty food,' and three service options: Dine-In, Drive-Through & Delivery. We're among the very few restaurants in this area with a working drive-through." },
  { q: "Do you have a drive-through?",                 a: "Yes! One of the very few drive-throughs in the Lagos / Ogun area. Simply drive up, place your order, pay at the window and collect your hot food — no need to park or step out." },
  { q: "What are your operating hours?",               a: "We're open every day and close at 10:00 PM. Perfect for lunch, dinner, and those late-evening meals after a busy day." },
  { q: "Do you deliver?",                              a: "Yes! We deliver to Ojodu, Ajuwon, Akute and surrounding areas. Call or WhatsApp 0805 119 0139 to place your order." },
  { q: "Where exactly are you located?",               a: "Paradise Bus Stop on Ishashi Road — serving both Ojodu (Lagos) and Ajuwon / Akute (Ogun State). It's a clear, well-known landmark." },
  { q: "What type of food do you serve?",              a: "Nigerian favourites (jollof rice, soups, swallows, proteins), fast food, continental dishes, grills, pepper soup, breakfast and snacks — a full, diverse menu." },
  { q: "How fast is drive-through service?",           a: "Typically 5–10 minutes. Call ahead to pre-order and your food will be ready the moment you arrive." },
  { q: "What payment methods do you accept?",          a: "Cash, POS (card), and bank transfer. We've made payment as flexible as possible." },
  { q: "What's your most popular dish?",               a: "Jollof rice tops the list! Grilled chicken, pepper soup, and sharwama are close behind. Call for today's specials." },
  { q: "Can I reserve a table?",                       a: "Yes, especially for groups. Call 0805 119 0139 to book your table in advance." },
  { q: "How much does delivery cost?",                 a: "Delivery fees vary by area. Call 0805 119 0139 to confirm the fee for your location. A minimum order may apply." },
  { q: "Can I pre-order for drive-through?",           a: "Absolutely — it's encouraged. Call 0805 119 0139 and your meal will be hot and packaged when you pull up." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: "5rem 1.5rem", background: "var(--clr-cream)" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: ".75rem" }}>Got Questions?</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--clr-charcoal)", marginBottom: "1rem" }}>
            Frequently Asked <em>Questions</em>
          </h2>
          <div className="divider divider-center" />
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid var(--clr-border)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: ".9rem", color: "var(--clr-charcoal)", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "var(--clr-brand)",
                    flexShrink: 0,
                    transform: open === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform .3s ease",
                  }}
                />
              </button>
              <div
                className={`accordion-body ${open === i ? "open" : ""}`}
              >
                <div
                  style={{
                    padding: ".25rem 1.25rem 1rem",
                    fontSize: ".875rem",
                    color: "var(--clr-muted)",
                    lineHeight: 1.7,
                    borderTop: "1px solid var(--clr-border)",
                    paddingTop: ".75rem",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div style={{ textAlign: "center", marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".75rem" }}>
          <a href="tel:+2348051190139" className="btn btn-primary">📞 Call Us</a>
          <a href="https://wa.me/2348051190139" target="_blank" rel="noopener noreferrer" className="btn btn-green">💬 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}