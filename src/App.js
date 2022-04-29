import Navbar from "./Navbar";
import Home from "./Home";
import Draft from "./Draft";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Draft />
      </div>
    </div>
  );
}

export default App;
