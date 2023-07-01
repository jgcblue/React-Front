import React from 'react';
import '../App.css'
import '../You_styles.css'
import YouPDF from './YouPDF';
import SetTheory from './SetTheory';

//for multiple allowable pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export function LeftNavigation(){

return(
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
		{/* THE SIDE MENU (VERTICAL) END*/}
		{/* THE SIDE MENU (VERTICAL) END*/}
		{/* THE SIDE MENU (VERTICAL) END*/}
		{/* THE SIDE MENU (VERTICAL) END*/}
</Router>
)
}

export default LeftNavigation;
