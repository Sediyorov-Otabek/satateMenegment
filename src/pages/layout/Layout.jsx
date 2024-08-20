import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <h2>Layout</h2>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
