import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Insights } from "@/components/sections/insights";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <WhyUs />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
