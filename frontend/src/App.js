import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Travel from './Components/TravelDetailsPage/Travel';
{/* <Routes>
    <Route path="/home" element={<Home/>} />
</Routes> */}

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/travel/:id" element={<Travel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
