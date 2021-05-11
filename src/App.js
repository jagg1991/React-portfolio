import Navbar from "./components/navbar"
import './App.css';
import Card from "./components/card";
import Project from "./components/projects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Card>
        <Project
          style={{ margin: "20px" }}
          header="Hello world"

          body="hello world this is the best thing about coding. I can pretty much make what I want"
          href="#"
          link="go somewhere"

        />
      </Card>

    </div>
  );
}

export default App;
