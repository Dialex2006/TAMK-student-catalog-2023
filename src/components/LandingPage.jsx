import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Analytics from "./Analytics";
import Newsletter from "./Company";
import Footer from "./Footer";
import InfoSection from "./InfoSection"; // Import the new component

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Analytics />
      <Newsletter />
      <InfoSection /> {/* Include the new InfoSection component here */}
      <Footer />
    </>
  );
};

export default LandingPage;