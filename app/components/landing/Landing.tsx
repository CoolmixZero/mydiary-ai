"use client";

import { SafeUser } from "@/app/types";
import ClientOnly from "../ClientOnly";
import Hero from "./Hero";
import Features from "./Features";
import FeaturesBlocks from "./FeaturesBlocks";
import { useCallback, useState } from "react";

interface LandingProps {
  currentUser?: SafeUser | null;
}

const Landing: React.FC<LandingProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  if (!currentUser) {
    return (
      <ClientOnly>
        <Hero />
        <Features />
        <FeaturesBlocks />
      </ClientOnly>
    );
  }
  return <div>Hello</div>;
};

export default Landing;
