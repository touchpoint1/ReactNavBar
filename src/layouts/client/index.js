import Footer from "components/footer";
import Navbar from "components/navbar";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <section className="w-screen h-full min-h-screen relative overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default ClientLayout;
