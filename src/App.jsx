import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Langauges from "./Components/Langauges";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Tools from "./Components/Tools";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Content />
        <Langauges />
        <Projects />
        <Contact />
        {/* <Tools /> */}
      </div>
    </>
  );
}

export default App;
