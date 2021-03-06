import React from 'react';
import Navbar from './components/layout/Navbar';
import PostList from './components/posts/PostList';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer'
import CreatePost from './components/posts/CreatePost';
import SignIn from './components/signinup/SignIn';
import SignUp from './components/signinup/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/create'><br /><CreatePost /></Route>
            <Route path='/signin'><br /><SignIn /></Route>
            <Route path='/signup'><br /><SignUp /></Route>
            <div>
              <Route path='/whereabout' exact ><br /><PostList /></Route>
              <Footer />
            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
