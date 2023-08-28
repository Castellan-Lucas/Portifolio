import "./App.sass";
import Header from "./components/Header";
import Imgcomp from "./components/Imgcomp";
import Title from "./components/Title";
import Skills from "./components/skills";
import Skill from "./components/Skill";  
import Learning from "./components/Learning";
import Sobremim from "./components/SobreMim";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container-banner">
        <Title />
        <Imgcomp />
      </div>
      <Skill />
      <Skills />
      <Learning />
      <Sobremim />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
