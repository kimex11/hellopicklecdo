import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ValueRows from "./components/ValueRows";
import PixelDivider from "./components/PixelDivider";
import LightSteps from "./components/LightSteps";
import LiveReputation from "./components/LiveReputation";
import Faq from "./components/Faq";
import { FinalCta, Footer } from "./components/CtaFooter";
import LiveTicker from "./components/LiveTicker";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Overview />
        <ValueRows />
        <PixelDivider from="#101210" to="#e9e9e6" />
        <LightSteps />
        <PixelDivider from="#e9e9e6" to="#101210" />
        <LiveReputation />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <LiveTicker />
    </>
  );
}
