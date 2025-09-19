import "./App.css";
import Header from "./Components/Header";
import { main } from "./mockData";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header data={main} />
      <About data={main} />
      <Resume data={main.resume} />
      <Portfolio data={main.portfolio} />
    </div>
  );
}

export default App;
