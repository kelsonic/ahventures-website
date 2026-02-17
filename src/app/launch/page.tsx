import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import PortfolioCard from "@/src/components/PortfolioCard";
import About from "@/src/components/About";
import Footer from "@/src/components/Footer";

export default function LaunchPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioCard />
        <About />
      </main>
      <Footer />
    </>
  );
}
