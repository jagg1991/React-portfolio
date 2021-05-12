import React from "react";
// import './components/fontAwesomeIcons'
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact"


function App() {
  return (

    < Router >

      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <About />
          </Route>

          <Route exact path="/portfolio" >
            <Portfolio />
          </Route>
          <Route exact path="/contact" >
            <Contact />

          </Route>
        </ Switch>
      </div >
    </Router >

  );
}

export default App;
