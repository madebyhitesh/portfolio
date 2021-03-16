import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Waves from "./components/Waves";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* background waves animation  */}
      <Waves />
    </div>
  );
}

export default App;
