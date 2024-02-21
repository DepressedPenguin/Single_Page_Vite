import './App.css'
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Langauges from './Components/Langauges';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <Content/>
      <Langauges/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
