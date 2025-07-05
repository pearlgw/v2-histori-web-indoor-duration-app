"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Contribute from "@/components/Contribute";
import DataTableDemo from "@/components/Table/DataTableDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <Contribute />
      <div className="mx-4 xl:mx-14">
        <DataTableDemo title subtitle refreshSignal={0}/>
      </div>
      <About />
      <Footer />
    </>
  );
}
