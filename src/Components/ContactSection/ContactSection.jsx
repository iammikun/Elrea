import React from "react";
import Hero from "./Hero/Hero";
import Address from "./Address/Address";

const ContactSection = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div>
        <Hero />
        <Address />
      </div>
    </div>
  );
};

export default ContactSection;
