import { AnimatePresence, Variants } from "framer-motion";
import { TransitionDefinition } from "framer-motion/types/types";
import { Route, Switch, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Waves from "./components/Waves";

export const pageVariants: Variants = {
  initial: { x: "-100vw", opacity: 0, scale: 1 },
  animate: { x: 0, opacity: 1, zIndex: 5, scale: 1 },
  exit: { x: "100vw", opacity: 0, scale: 2 },
}

export const pageTransition: TransitionDefinition = {
  type: "tween",
  duration: .7,
  ease: "anticipate"
}


const App = () => {

  const location = useLocation()


  return (

    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route component={Home} exact path="/" />
          <Route component={Projects} exact path="/project" />
          <Route component={About} exact path="/about" />
          <Route component={Contact} exact path="/contact" />
        </Switch>
      </AnimatePresence>
      {/* background waves animation  */}
      <Waves />
    </div>
  );
}

export default App;
