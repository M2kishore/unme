import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
