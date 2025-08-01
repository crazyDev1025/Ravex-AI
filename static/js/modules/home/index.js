import React from "react";
import Hero from "./features/hero";
import Offers from "./features/offers";
import Feature from "./features/feature";
import Counter from "./features/counter";
import Wallet from "./features/wallet";
import Network from "./features/network";
import Portfolio from "./features/portfolio";
import Footer from "./features/footer";
import Navbar from "./features/navbar";
import { Toaster } from "sonner";
import DemoPreview from "./features/demo";
import TeamSection from "./features/team";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Toaster position="top-right" />

      <Navbar />
      <Hero />
      <div className="relative max-w-[1440px] mx-auto">
        <Network />
        <Offers />
      </div>
      <DemoPreview />
      <div className="relative max-w-[1440px] mx-auto">
        <Counter />
        <Feature />
        <TeamSection />
        <Wallet />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
