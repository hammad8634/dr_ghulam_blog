import React from "react";
import "./App.css";
import About from "./Components/about";
import ContactUs from "./Components/contactus";
import Faq from "./Components/faqsection";
import Footer from "./Components/footer";
import "./Components/navbar";
import BlogPage from "./Components/navbar";
import ScrollToTopButton from "./Components/scrollScreenUp";
import Services from "./Components/services";

const App = () => {
  return (
    <div className="App">
      <BlogPage />
      <About />
      <br/>
      <Services />
      <ContactUs location="33.67555442868343, 73.06721081039363" />
      <Faq />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
