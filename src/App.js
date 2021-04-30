import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Components/Routes/routes";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
