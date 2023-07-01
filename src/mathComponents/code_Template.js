//This contains boiler plate for putting a code component
//import MathJax from "react-mathjax";
import React, {Fragment, Component } from 'react'

import {Card}  from 'react-bootstrap';





import '../App.css'
import '../You_styles.css'

//DISSERTATION RENDER TRY
const tex = `
\\alpha
`;

export const CodeT=() => {
  return (
	  <Fragment>
		  <p style={{fontSize:"40px"}}> See anything? I'm collecting more ideas here.  </p>

		  <Card style={{marginBottom:"100px"}}>
			  <code>{`

			  `}</code>
		  </Card>
	  </Fragment>
  );
}


export default CodeT;
