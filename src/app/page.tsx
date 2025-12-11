import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import PainPoints from "@/components/PainPoints";
import ThreeSteps from "@/components/ThreeSteps";
import Guarantee from "@/components/Guarantee";
import System from "@/components/System";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MapSection />
        <PainPoints />
        <ThreeSteps />
        <Guarantee />
        <System />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
