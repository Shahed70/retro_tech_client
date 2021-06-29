import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { CreactUserContext } from "./App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(CreactUserContext);
  return (
    <div>
       <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    <p className="sr-only">{setLoggedInUser}</p>
    </div>
  );
};

export default PrivateRoute;
