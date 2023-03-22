import "./App.css";
import About from "./Components/about";
import ContactUs from "./Components/contactus";
import FAQ from "./Components/faqsection";
import Footer from "./Components/footer";
import "./Components/navbar";
import BlogPage from "./Components/navbar";
import Services from "./Components/services";

function App() {
  return (
    <div className="App">
      <BlogPage />
      <About />
      <Services />
      <ContactUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
