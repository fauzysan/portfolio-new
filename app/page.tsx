import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Quotes from "@/components/Quotes"
export default function Home() {
  return (
    <main className="bg-black">
      <div className="text-white">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Quotes />        
        <Footer />

      </div>
    </main>
  );
}
