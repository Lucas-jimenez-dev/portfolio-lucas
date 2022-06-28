import React from "react";
import Contact from "../commons/Contact";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import "../../style/Home.css";

function MainLayout(props) {
  const { children } = props;
  return (
    <div className="mainlayout">
      <Header />
      <Contact />
      <main> {children} </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
