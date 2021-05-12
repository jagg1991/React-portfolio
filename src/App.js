import Navbar from "./components/navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";



function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Route exact path="/" component={About}></Route>
        <Route exact path="home" component={About}></Route>
        <Route exact path="portfolio" component={Portfolio} />

      </div>
    </Router>
  );
}

export default App;
