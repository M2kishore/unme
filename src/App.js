import Navbar from './components/layout/Navbar';
import PostList from './components/posts/PostList';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer'
import WhereAbout from './components/whereabout/WhereAbout';
import CreatePost from './components/posts/CreatePost';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' exact ><br /><PostList /></Route>
            <Route path='/whereabout' exact ><br /><WhereAbout /></Route>
            <Route path='/create' exact ><br /><CreatePost /></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
