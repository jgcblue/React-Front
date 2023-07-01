import MathJax from "react-mathjax";
import React, {Fragment, Component } from 'react'
import * as d3 from 'd3';

import {Accordion, Card, Button} from 'react-bootstrap';





import '../App.css'
import '../You_styles.css'

//DISSERTATION RENDER TRY
const tex = `
\\alpha
`;

export const DissC=() => {
  return (
	  <Fragment>
		  <p style={{fontSize:"40px"}}> See anything? I'm collecting more ideas here.  </p>

		  <Card style={{marginBottom:"100px"}}>
			  <code>{`
    .card {
        width: 130px;
        height: 195px;
        background: url("images/card-back.jpg") no-repeat;
        display: inline-block;
    }
    .card:hover {
        background: url("images/card-front.jpg") no-repeat;
    }
			  `}</code>
		  </Card>
		  <div className="center">

			  The above was created using:
			  <ul>
				  <li> the code element together with the use of  </li>
				  </ul>


		  </div>



    <div>
      <MathJax.Provider>
	      <div style={{backgroundColor:"red"}}>
		Hehe

Let  <MathJax.Node inline formula={"\\lambda"} /> be a regular cardinal such that  <MathJax.Node inline formula={"\\lambda^{< \\lambda}=\\lambda"} />.
Assume that Diamond holds on cofinality  <MathJax.Node inline formula={"\\lambda"} />. 
Then there exists a  family of  <MathJax.Node inline formula={" \\{ T_i : i < 2^{\\lambda^{+}} \\}"} /> of pairwise not near special  <MathJax.Node inline formula={"\\lambda^{+}"} />-Aronsjzan trees.
          This is an inline math formula:{" "}
          <MathJax.Node inline formula={"a = b"} />
          And a block one:
          <MathJax.Node formula={tex} />
        </div>
      </MathJax.Provider>
    </div>
	  </Fragment>
  );
}


export default DissC;
