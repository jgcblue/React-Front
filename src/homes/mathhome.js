//This can have its own nav bar that comes up as well. 

import React from 'react';
import '../App.css'
import '../You_styles.css'
import {Fragment} from 'react';
import {useState} from 'react';
import {MathJax, MathJaxContext} from 'better-react-mathjax'
import YouPDF from './YouPDF';
import SetTheory from './SetTheory';

//for multiple allowable pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	withRouter,
} from "react-router-dom";
//import {useLocation} from 'react-router-dom';

export default function MathHome(props) {
	const [showWelcome, setShowWelcome]=useState(true);

	function setShow(e){
//		e.preventDefault()
    setShowWelcome(!showWelcome)
	}
  const renderWelcome = () => {
      if (showWelcome) {
	      return <MathIntroComponent/>
      } else {
	      return null;
      }
    }//end renderWelcome
return (
<Fragment>
		{/* THE SIDE MENU (VERTICAL) START*/}
		{/* THE SIDE MENU (VERTICAL) START*/}
		{/* THE SIDE MENU (VERTICAL) START*/}
		{/* THE SIDE MENU (VERTICAL) START*/}
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
		<h6> Learn Some Number Theory!: </h6>
		<h6> Selections From My Previous Set Theory Work(links): </h6>
		<br></br>
			  	
			  <Link style={{color:"red"}} onClick={setShow} to={'/homes/mathhome/backgroundds'}>Dissertation Work </Link>
			  <br></br>

					  <Link style={{color:"red"}} onClick={setShow} to={'/homes/mathhome/set'}>Peeking at Set Theory</Link>
</div>

      <Switch>
	      <Route path="/homes/mathhome/backgroundds">
		<YouPDF/>
            </Route>
	      <Route exact path="/homes/mathhome/set">
		      <SetTheory/>
            </Route>

	      </Switch>
		{/* THE SIDE MENU (VERTICAL) END*/}
		{/* THE SIDE MENU (VERTICAL) END*/}
		{/* THE SIDE MENU (VERTICAL) END*/}
		{/* THE SIDE MENU (VERTICAL) END*/}
</Router>

	{renderWelcome()}


	{/*	<MathPages/>*/}


</Fragment>

);
};

//The pdf dissertation (part of it compnent)

function MathIntroComponent (props) {
	return (
		<div className="center" style={{color:"white", fontSize:"20px"}}>
			<br></br>
			<br></br>


			<br></br>
			Welcome to the quantitive portion of the site. 
			<br></br>
		Browse my content by clicking the links to to left.
			<br></br>
	</div>
	)
}



//function MathIntroComponent (props) {
//	const {location}= props;
//	const locationHere=useLocation();
//	console.log(`The math intro component props ${props}`, props);
//	console.log(`The math intro component locationHere variable contents`, locationHere);
//
//	if ( location.pathname.match('/homes/mathhome/backgroundds') || location.pathname.match('/homes/mathhome/set') ){
//		return null;
//	}
//	return (
//		<div className="center" style={{color:"white", fontSize:"20px"}}>
//			{console.log(`The math intro component locationHere from inside the return statement`, locationHere)}
//			<br></br>
//			<br></br>
//
//
//			<br></br>
//			Welcome to the quantitive portion of the site. 
//			<br></br>
//		Browse my content by clicking the links to to left.
//			<br></br>
//	</div>
//	)
//}
//
//const MathIntro=withRouter(MathIntroComponent);
//
