import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutEwa from "@/components/AboutEwa";
import VideoSection from "@/components/VideoSection";
import Pillars from "@/components/Pillars";
import Nutrition from "@/components/Nutrition";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Shop from "@/components/Shop";
import CtaBlock from "@/components/CtaBlock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <AboutEwa />
      <VideoSection />
      <Pillars />
      <Nutrition />
      <Studio />
      <Testimonials />
      <Pricing />
      <Shop />
      <CtaBlock />
      <Footer />
    </main>
  );
}
