import "./App.css";
import About from "./Components/about";
import "./Components/navbar";
import BlogPage from "./Components/navbar";
import Services from "./Components/services";
import ContactUs from "./Components/contactus";

function App() {
  return (
    <div className="App">
      <BlogPage />
      <About />
      <Services />
      <ContactUs/>
    </div>
  );
}

export default App;
