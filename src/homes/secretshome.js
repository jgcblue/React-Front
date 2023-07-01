//This can have its own nav bar that comes up as well. 
import React from 'react';
import '../App.css'
import '../You_styles.css'
import {Fragment} from 'react'
import {MathJax, MathJaxContext} from 'better-react-mathjax'

//for multiple allowable pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
//Export default so you don't need braces in the parent components yada yada.
//
export default function SecretsHome() {
return (

<Fragment>
        <p>A secrete for you to read...</p>
        <h1>User clicks the link to api/protected or</h1>
        <ul>
                <li> authFetch checks to see if there's a token in local storage, in particular there's a useAuth hook that it is
                "watching for" in essence</li>
                <li>if there's not token then the user is directed to the login component </li>
                <ul>
                        <li>if they can entere the right credentials they are signed in </li>
                </ul>

        </ul>


</Fragment>

);
};




function MathPages() {
  return (
    <Router>

	    
	    <p>From the math honme</p>
      <div> <ul>
          <li>
            <Link to="./homes/mathhome">Home</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

