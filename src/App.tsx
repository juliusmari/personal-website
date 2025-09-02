import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Collaboration from "./components/Collaboration";
import TrailingCursor from "./components/Cursor";

function App() {
  return (
    <div className="select-none dark:bg-[#222831] dark:text-[#EEEEEE] bg-[#EEEEEE]">
      <NavBar />
      <Home />
      <About />
      <Collaboration />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
      <TrailingCursor />
    </div>
  );
}

export default App;
