import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Micosa Cuisine | 4.5★ Dine-In · Drive-Through · Delivery — Ojodu / Ajuwon",
  description:
    "Excellent 4.5★ restaurant at Paradise Bus Stop, Ishashi Road. Unique Drive-Through service, Dine-In & Delivery. Ojodu Lagos & Ajuwon Ogun State. Open daily until 10 PM. Call 0805 119 0139.",
  keywords:
    "Micosa Cuisine, drive-through Lagos, Paradise Bus Stop restaurant, Ojodu food, Ajuwon restaurant, delivery Akute, Ishashi Road, Nigerian food",
  openGraph: {
    title: "Micosa Cuisine — Organized Service, Tasty Food",
    description: "4.5★ rated restaurant. Drive-Through · Dine-In · Delivery. Paradise Bus Stop, Lagos.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}