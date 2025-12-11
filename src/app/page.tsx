import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Community />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
