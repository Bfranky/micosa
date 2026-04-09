import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import TrustBar        from "@/components/TrustBar";
import About           from "@/components/About";
import Services        from "@/components/Services";
import DriveThrough    from "@/components/DriveThrough";
import Menu            from "@/components/Menu";
import WhyChoose       from "@/components/WhyChoose";
import Reviews         from "@/components/Reviews";
import FAQ             from "@/components/FAQ";
import Location        from "@/components/Location";
import Contact         from "@/components/Contact";
import CTABanner       from "@/components/CTABanner";
import Footer          from "@/components/Footer";


export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <DriveThrough />
        <Menu />
        <WhyChoose />
        <Reviews />
        <FAQ />
        <Location />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}