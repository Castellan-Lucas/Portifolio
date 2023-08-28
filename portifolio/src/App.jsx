import "./App.sass";
import Header from "./components/Header/index";
import Imgcomp from "./components/Imgcomp/index";
import Title from "./components/Title/index";
import Skills from "./components/skills/index";
import Skil from "./components/skill/index";  
import Learning from "./components/Learning/index";
import Sobremim from "./components/SobreMim/index";
import Projects from "./components/Projects/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <Header />
      <div className="container-banner">
        <Title />
        <Imgcomp />
      </div>
      <Skil />
      <Skills />
      <Learning />
      <Sobremim />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
