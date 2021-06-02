import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainPage />
      </Router>
    </div>
  );
}

export default App;
