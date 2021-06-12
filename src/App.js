import './App.css';
import Navbar from './components/layout/Navbar';
import PostList from './components/posts/PostList';
import FriendList from './components/whereabout/FriendList';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' exact ><br /><PostList /></Route>
            <Route path='/whereabout' exact ><br /><FriendList /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
