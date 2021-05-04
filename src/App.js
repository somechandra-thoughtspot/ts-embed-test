import { HashRouter } from "react-router-dom";
import Main from "./components/main/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
