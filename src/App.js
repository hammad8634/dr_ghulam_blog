import "./App.css";
import About from "./Components/about";
import "./Components/navbar";
import BlogPage from "./Components/navbar";
import Services from "./Components/services";

function App() {
  return (
    <div className="App">
      <BlogPage />
      <About />
      <Services />
    </div>
  );
}

export default App;
