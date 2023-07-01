import './footer.css'
import './App.css'
import './You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';

import {Document, Page} from 'react-pdf';
import sampleResume from './YouM_resume_share.pdf';

import axios from 'axios';
import React, {Fragment} from 'react'
import kitties from './lovecats.giff';
import MathHome from './homes/mathhome';
//import ProgHome from './homes/proghome';
import ProgPages from './progpages';
import FutureDirections from './future/future';
import SecretsHome from './homes/secretshome';
import DataHome from './homes/datahome';

import ReactMarkdown from "react-markdown";
import {Accordion} from 'react-bootstrap';
import {Row, Container, Col, Button} from 'reactstrap';


// import mode-<language> , this imports the style and colors for the selected language.
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-github";


import AOS from 'aos';
import 'aos/dist/aos.css';


import file from "./test.md";


import {
  BrowserRouter as Router,
    HashRouter as HRouter,
	Redirect,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


import {login, authFetch, useAuth, logout} from "./auth"
import {useState, useEffect} from 'react';


//Router stuff with the left side menu
<Router>
	<div id="fixLeftPanel" style={{color:"white",backgroundColor:"#333"}}>
			  
		<figure className="quote" style={{color:"SkyBlue",fontSize:"12px", fontFamily:"cursive"}}>
			<blockquote>
				<p>
					“The essence of mathematics is in its freedom.”
				</p>
				<figcaption>
				&mdash; Georg Cantor
				</figcaption>
			</blockquote>
</figure>
		<br></br>
		<h6> Selections(links): </h6>
		<br></br>
			  	
			  <Link style={{color:"red"}} onClick={setShow} to={'/homes/mathhome/backgroundds'}>Dissertation Work </Link>
			  <br></br>

					  <Link style={{color:"red"}} onClick={setShow} to={'/homes/mathhome/set'}>Peeking at Set Theory</Link>
</div>

      <Switch>
	      <Route path="/homes/mathhome/backgroundds">
		<YouPDF/>
		      {console.log(location)}
            </Route>
	      <Route exact path="/homes/mathhome/set">
		      <SetTheory/>
            </Route>

	      </Switch>
</Router>

// The functions for showing or hiding that nav ting

	const [showWelcome, setShowWelcome]=useState(true);

	function setShow(e){
//		e.preventDefault()
    setShowWelcome(!showWelcome)
	}
  const renderWelcome = () => {
      if (showWelcome) {
	      return <ExploreWelcome/>
      } else {
	      return null;
      }
    }//end renderWelcome
	
