import React from 'react';
import '../App.css'
import '../You_styles.css'
import {Fragment} from 'react'

//Not sure if this import will work (its for styling the react-strap stuff)
import 'bootstrap/dist/css/bootstrap.min.css';



//for multiple allowable pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function ProgHome() {
return (

	<Fragment>
		<figure className="quote" style={{color:"SkyBlue",fontSize:"12px", fontFamily:"cursive"}}>
			<blockquote>
				<p>
					“Testing leads to failure, and failure leads to understanding.""
				</p>
				<figcaption>
				&mdash; Burt Rutan
				</figcaption>
			</blockquote>
</figure>
		
	</Fragment>

);
};




function ProgPages() {
  return (
    <Router>
	    <p>From the Programming home</p>
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




