import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import PostList from './components/posts/PostList';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer'
import WhereAbout from './components/whereabout/WhereAbout';
import CreatePost from './components/posts/CreatePost';
import SignIn from './components/signinup/SignIn';
import SignUp from './components/signinup/SignUp';


function App() {
  const [isFooterPresent, setIsFooterPresent] = useState(true)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' exact ><br /><PostList /></Route>
            <Route path='/whereabout'><br /><WhereAbout setIsFooterPresent = {setIsFooterPresent}/></Route>
            <Route path='/create'><br /><CreatePost /></Route>
            <Route path='/signin'><br /><SignIn /></Route>
            <Route path='/signup'><br /><SignUp /></Route>
          </Switch>
        </div>
        {isFooterPresent && <Footer />}
      </div>
    </Router>
  );
}

export default App;
