import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import Services from "@/components/Services";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Brandify.Inc | Premium Creative Agency - Turning Ideas Into Reality</title>
        <meta
          name="description"
          content="Brandify.Inc is a premium creative agency specializing in brand identity, web development, content creation, and strategic marketing. Transform your vision into an unforgettable brand."
        />
        <meta
          name="keywords"
          content="creative agency, brand identity, web development, graphic design, content creation, product photography, brand promotion, marketing agency"
        />
        <meta property="og:title" content="Brandify.Inc | Premium Creative Agency" />
        <meta
          property="og:description"
          content="Transform your vision into an unforgettable brand. Premium creative services for ambitious businesses."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://brandify.inc" />
      </Helmet>

      <main className="relative overflow-hidden">
        <Navbar />
        <Hero />
        <ClientsMarquee />
        <Services />
        <Portfolio />
        <StatsCounter />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
