
import './App.css';
import {BrowserRouter as Main, Routes, Route} from "react-router-dom";
import Join from "./component/Join/Join";

function App() {
  return (
    <div className="App">
    <Main>
    <Routes>

      <Route path="/" element={<Join/>} exact />
      <Route path="/chat"/>

    </Routes>
    </Main>  
    </div>
  );
}

export default App;

