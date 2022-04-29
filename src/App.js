import Navbar from "./Navbar";
import Home from "./Home";
import DraftNavbar from "./DraftNavbar";
import DraftContent from "./DraftContent";
import DraftFooter from "./DraftFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <DraftNavbar />
        <DraftContent />
        <DraftFooter />
      </div>
    </div>
  );
}

export default App;
