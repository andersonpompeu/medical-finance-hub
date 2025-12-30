import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <Services />
        <WhyChoose />
        <HowItWorks />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
