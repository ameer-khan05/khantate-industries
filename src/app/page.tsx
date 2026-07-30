import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { About } from "@/components/sections/about";
import { Insights } from "@/components/sections/insights";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="site-noise">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <Services />
        <WhyUs />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
