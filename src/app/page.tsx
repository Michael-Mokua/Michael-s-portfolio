import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
