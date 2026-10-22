import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SelectedWork } from "@/components/selected-work";
import { Approach } from "@/components/approach";
import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="capability-strip">
          <span>WEB EXPERIENCES</span>
          <i>✳</i>
          <span>BUSINESS SYSTEMS</span>
          <i>✳</i>
          <span>MOBILE APPLICATIONS</span>
          <i>✳</i>
          <span>WORKFLOW AUTOMATION</span>
        </div>
        <Services />
        <SelectedWork />
        <Approach />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
