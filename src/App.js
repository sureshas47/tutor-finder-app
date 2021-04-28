import logo from './logo.svg';
import './App.css';
import LoginForm from "./Components/Authentication/Login/Login";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Components/Routes/routes";


function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
