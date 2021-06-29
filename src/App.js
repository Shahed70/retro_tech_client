import React, { useState, createContext } from 'react';
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import Write from './components/AddPost/Write';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

export const CreactUserContext = createContext()
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  //console.log(loggedInUser);
  return (
    <CreactUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
           <Login/>
        </Route>
        <Route exact path="/singlepost/:postId">
          <SinglePost />
        </Route>
        <PrivateRoute exact path="/write">
          <Write />
        </PrivateRoute>
      </Switch>
    </CreactUserContext.Provider>
  )
}

export default App
