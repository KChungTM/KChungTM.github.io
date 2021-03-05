import './App.css';
import SocialBar from "./components/absolutes/socialsBar/SocialBar";
import LandingPage from "./pages/landingPage/LandingPage";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience"
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <SocialBar/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
