import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
