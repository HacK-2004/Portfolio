import "./styles.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
