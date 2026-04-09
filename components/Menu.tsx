"use client";
import { useState } from "react";

const categories = [
  {
    id: "rice", icon: "🍛", label: "Rice Dishes", tag: "Best Sellers", from: "₦1,500",
    items: [
      { name: "Jollof Rice",           desc: "Signature smoky jollof"        },
      { name: "Fried Rice",            desc: "Colourful & delicious"         },
      { name: "Coconut Rice",          desc: "Aromatic perfection"           },
      { name: "White Rice",            desc: "With choice of stew"           },
      { name: "Ofada Rice & Ayamase",  desc: "Authentic local taste"         },
      { name: "Party Jollof",          desc: "Firewood-style perfection"     },
    ],
  },
  {
    id: "soups", icon: "🥘", label: "Soups & Swallows", tag: "Authentic", from: "₦2,000",
    items: [
      { name: "Egusi Soup",           desc: "Rich & hearty"                 },
      { name: "Efo Riro",             desc: "Lagos-style spinach stew"      },
      { name: "Ogbono Soup",          desc: "Thick & delicious"             },
      { name: "Okro Soup",            desc: "Classic Nigerian favourite"    },
      { name: "Edikang Ikong",        desc: "Cross River delicacy"          },
      { name: "Pounded Yam / Eba / Amala", desc: "All swallows available"  },
    ],
  },
  {
    id: "proteins", icon: "🍗", label: "Proteins & Grills", tag: "Fresh Daily", from: "₦1,000",
    items: [
      { name: "Fried Chicken",        desc: "Crispy outside, juicy inside"  },
      { name: "Grilled Chicken",      desc: "Perfectly seasoned"            },
      { name: "Turkey",               desc: "Tender & flavourful"           },
      { name: "Fresh Fish",           desc: "Fried or grilled to order"     },
      { name: "Goat Meat / Assorted", desc: "Slow-cooked tenderness"        },
      { name: "Suya",                 desc: "Spicy grilled skewers"         },
    ],
  },
  {
    id: "fastfood", icon: "🌯", label: "Fast Food", tag: "Quick Bites", from: "₦1,200",
    items: [
      { name: "Sharwama",             desc: "Chicken & beef options"        },
      { name: "Burgers",              desc: "Stacked & satisfying"          },
      { name: "Spaghetti",            desc: "Bolognese or jollof style"     },
      { name: "Chicken Wings",        desc: "Saucy & irresistible"          },
      { name: "Sandwiches",           desc: "Fresh & filling"               },
      { name: "Salads",               desc: "Light & refreshing"            },
    ],
  },
  {
    id: "pepper", icon: "🍲", label: "Pepper Soup", tag: "Comfort Food", from: "₦1,500",
    items: [
      { name: "Assorted Pepper Soup", desc: "Mixed meats in spicy broth"   },
      { name: "Fish Pepper Soup",     desc: "Fresh fish, bold spice"        },
      { name: "Goat Meat Pepper Soup",desc: "Tender & deeply spiced"       },
      { name: "Chicken Pepper Soup",  desc: "Comforting & aromatic"        },
    ],
  },
  {
    id: "drinks", icon: "🥤", label: "Drinks", tag: "Refreshing", from: "₦300",
    items: [
      { name: "Soft Drinks",          desc: "Chilled & refreshing"          },
      { name: "Fresh Juices",         desc: "Natural & nutritious"          },
      { name: "Chapman",              desc: "Our special blend"             },
      { name: "Zobo",                 desc: "Traditional hibiscus drink"    },
      { name: "Smoothies",            desc: "Blended fresh daily"           },
      { name: "Water / Wine / Beer",  desc: "All beverages available"       },
    ],
  },
  {
    id: "breakfast", icon: "🥯", label: "Breakfast & Snacks", tag: "Morning Picks", from: "₦500",
    items: [
      { name: "Yam & Egg",            desc: "Classic Nigerian morning"      },
      { name: "Akara & Pap",          desc: "Street food done right"        },
      { name: "Moi Moi",              desc: "Steamed bean pudding"          },
      { name: "Meat Pies & Samosas",  desc: "Crispy golden snacks"          },
      { name: "Spring Rolls",         desc: "Crunchy & savoury"             },
      { name: "Puff Puff",            desc: "Sweet fried dough balls"       },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("rice");
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="menu" style={{ padding: "5rem 1.5rem", background: "var(--clr-cream)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: ".75rem" }}>What We Serve</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--clr-charcoal)", marginBottom: "1rem" }}>
            The Micosa <em>Menu</em>
          </h2>
          <div className="divider divider-center" style={{ marginBottom: "1rem" }} />
          <p style={{ fontSize: ".85rem", color: "var(--clr-muted)" }}>
            Available for Dine-In, Drive-Through & Delivery
          </p>
        </div>

        {/* Tab strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".4rem",
            justifyContent: "center",
            marginBottom: "1.75rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`tab-btn ${active === cat.id ? "active" : ""}`}
            >
              {cat.icon} <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu panel */}
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--clr-border)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {/* Panel header */}
          <div
            style={{
              background: "var(--clr-brand)",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: ".75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "2.5rem" }}>{current.icon}</span>
              <div>
                <h3 style={{ color: "#fff", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.2rem", marginBottom: ".2rem" }}>
                  {current.label}
                </h3>
                <span
                  style={{
                    background: "rgba(255,255,255,.2)",
                    color: "#fff",
                    fontSize: ".7rem", fontWeight: 600,
                    padding: ".15rem .6rem", borderRadius: 99,
                  }}
                >
                  {current.tag}
                </span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.7)", fontWeight: 600 }}>Starting from</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f5c842" }}>{current.from}</div>
            </div>
          </div>

          {/* Items grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {current.items.map((item, i) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".75rem",
                  padding: "1rem 1.25rem",
                  borderBottom: "1px solid var(--clr-border)",
                  borderRight: i % 2 === 0 ? "1px solid var(--clr-border)" : "none",
                  transition: "background .2s",
                }}
               onMouseOver={(e) => {
  e.currentTarget.style.background = "var(--clr-cream)";
}}
onMouseOut={(e) => {
  e.currentTarget.style.background = "#fff";
}}
              >
                <div
                  style={{
                    width: 36, height: 36,
                    borderRadius: "50%",
                    background: "var(--clr-gold-pale)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "1rem",
                  }}
                >
                  {current.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: ".9rem", color: "var(--clr-charcoal)" }}>{item.name}</div>
                  <div style={{ fontSize: ".75rem", color: "var(--clr-muted)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Panel footer */}
          <div
            style={{
              background: "var(--clr-cream)",
              borderTop: "1px solid var(--clr-border)",
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: ".75rem",
            }}
          >
            <p style={{ fontSize: ".82rem", color: "var(--clr-muted)" }}>
              Call for today's specials & current pricing
            </p>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <a href="tel:+2348051190139" className="btn btn-primary" style={{ padding: ".55rem 1.1rem", fontSize: ".78rem" }}>
                📞 Call
              </a>
              <a
                href="https://wa.me/2348051190139?text=Hi%20Micosa!%20I'd%20like%20to%20order."
                target="_blank" rel="noopener noreferrer"
                className="btn btn-green"
                style={{ padding: ".55rem 1.1rem", fontSize: ".78rem" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}