import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Waves from "./components/Waves";

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Navbar />
          <Route component={Home} exact path="/" />
          <Route component={Projects} exact path="/project" />
          <Route component={About} exact path="/about" />
          <Route component={Contact} exact path="/contact" />
          {/* background waves animation  */}
          <Waves />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
