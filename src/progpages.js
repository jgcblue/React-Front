//This file's main purpose is carried out by the ProgPages component which renders a navigation bar
//and Routes to the components for the JavaScript page and Python page.
//import the pages:
import PyPage from './progpages/pypage'
import JsPage from './progpages/jspage'
import './footer.css'
import './App.css'
import './You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';

import React, {Fragment} from 'react'
// import mode-<language> , this imports the style and colors for the selected language.

import AOS from 'aos';
import 'aos/dist/aos.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";




//Hooks:
//import {login, authFetch, useAuth, logout} from "./auth"
//import {useState, useEffect} from 'react';


//The function ProgPages will be rendered in another Routing set-up in the file App.js in particular
// <Route path = programming ...
export function ProgPages() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.

  return (
	  <Fragment>
	  <Router>
		  <div className="topnavthree">
          <Link to={`/YouSections/progpages/python`}>Python and Flask </Link>
          <Link to={`/YouSections/progpages/javascript`}> JavaScript and React </Link>
		  </div>

      <Switch>
	      <Route path="/YouSections/progpages/python">
		      <PyPage/>
            </Route>
	      <Route exact path="/YouSections/progpages/javascript">
		      <JsPage/>
            </Route>

	      </Switch>
	  </Router>
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
}


export default ProgPages;

