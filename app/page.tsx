import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import MatchingModes from "./components/MatchingModes";
import HowItWorks from "./components/HowItWorks";
import Community from "./components/Community";
import StatsBand from "./components/StatsBand";
import Faq from "./components/Faq";
import { FinalCta, Footer } from "./components/CtaFooter";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ProductShowcase />
        <Features />
        <MatchingModes />
        <HowItWorks />
        <Community />
        <StatsBand />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
