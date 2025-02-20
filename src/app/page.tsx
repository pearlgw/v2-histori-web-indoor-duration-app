"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Contribute from "@/components/Contribute";
import { DataTableDemo } from "@/components/DataTableDemo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
      <Hero />
      <Contact />
      <Contribute />
      <DataTableDemo />
      <About />
      <Footer />
    </>
  );
}
