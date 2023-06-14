"use client";

import ClientOnly from "../ClientOnly";
import Hero from "./Hero";
import Features from "./Features";
import FeaturesBlocks from "./FeaturesBlocks";
import Footer from "../footer/Footer";

const Landing = () => {
  return (
    <ClientOnly>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Footer />
    </ClientOnly>
  );
};

export default Landing;
