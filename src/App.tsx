import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Waves from "./components/Waves";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />

      {/* background waves animation  */}
      <Waves />
    </div>
  );
}

export default App;
