import './App.css';
import Navbar from './components/layout/Navbar';
import Post from './components/posts/Post';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' exact ><br /><Post/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
