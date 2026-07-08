import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Occasions from "@/components/Occasions";
import Examples from "@/components/Examples";
import HowItWorks from "@/components/HowItWorks";
import FormSection from "@/components/FormSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Occasions />
        <Examples />
        <HowItWorks />
        <FormSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
