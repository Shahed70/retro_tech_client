import React from 'react';

import TopHeader from './components/Header/TopHeader';
import TopNavbar from './components/Header/TopNavbar';
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import TopBanner from './components/TopBanner/TopBanner';
import Write from './components/AddPost/Write';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom';
const App = () => {
  const user = false;
  return (
    <div>

      {/* <TopHeader/>
        <TopNavbar/>
         <TopBanner/> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/login">
          {user ? <Home/>: <Login />}
        </Route>
        <Route  path="/singlepost/:postId">
          <SinglePost />
        </Route>
        <Route  path="/write">
        <Write/>
        </Route>
      </Switch>


      {/* <SinglePost/> */}
      {/*  */}
      {/* <Login/> */}
    </div>
  )
}

export default App
