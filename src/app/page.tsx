import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlueBand from "@/components/BlueBand";
import MapSection from "@/components/MapSection";
import PainPoints, { TransitionText } from "@/components/PainPoints";
import ThreeSteps from "@/components/ThreeSteps";
import Guarantee from "@/components/Guarantee";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BlueBand />
        <MapSection />
        <PainPoints />
        <TransitionText />
        <ThreeSteps />
        <Guarantee />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
