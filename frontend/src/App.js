import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
{/* <Routes>
    <Route path="/home" element={<Home/>} />
</Routes> */}

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route exact path="/dashboard"  element={<Dashboard/>} />
          <Route exact path="/login"  element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
