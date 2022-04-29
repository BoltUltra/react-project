import Navbar from "./Navbar";
import Home from "./Home";
import Draft from "../Draft";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Draft />
    </div>
  );
}

export default App;
