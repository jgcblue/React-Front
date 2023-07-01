//DESCRIPTION: THIS IS FOR THE MACHINE LEARNING PAGE THERE'S AN ACCCORDION WHERE WE WILL DICUSS
//WHAT'S GOING ON 
//- RENDERED BY MACHINE.JS
import {Accordion, Card, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {Fragment} from 'react';
import {MathComponent} from 'mathjax-react';

const Styles = styled.div`
.card {
color: white
 background-color: rgba(0, 0, 0, 0.2);
}
Button{
margin:auto;
color:white;
}

code {
    background-color:black;
    border-radius: 3px;
    font-family: courier, monospace;
    padding: 0 3px;
    color:white;
}
`;



export const Machinecards=()=> {

  return (
<Fragment>
<Styles>
      <h2 style={{color:"white"}}>React-Bootstrap Accordion Component</h2>
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle  style={{margin:"auto"} }as={Button} 
              variant="link" eventKey="0">
      <h4>See the Code!</h4>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
	  <Card.Body>
 		<Accordion defaultActiveKey="0">
 		       <Card>
 		         <Card.Header>
 		           <Accordion.Toggle as={Button} 
 		             variant="link" eventKey="0">
	  <h4>Outline of the Code</h4>
 		           </Accordion.Toggle>
 		         </Card.Header>
 		         <Accordion.Collapse eventKey="0">
 		           <Card.Body>
				 <pre>
				 <code>{`
				class name (){
				return x}
					 `}
	  			</code>
				
	  </pre>

 		       

 		           </Card.Body>
 		         </Accordion.Collapse>
 		       </Card>
 		     </Accordion>
 		<Accordion defaultActiveKey="1">
 		       <Card>
 		         <Card.Header>
 		           <Accordion.Toggle as={Button} 
 		             variant="link" eventKey="1">
	  			<h4> Some Elementary Mathematics </h4>
 		           </Accordion.Toggle>
 		         </Card.Header>
 		         <Accordion.Collapse eventKey="1">
 		           <Card.Body>
      We decide to get the arrangement of the circles by hand. 
      <MathComponent tex={String.raw`\sum^{k}_{i} x^2\ dx`} />
      <MathComponent tex={String.raw`\sum^{k}_{i} x^2\ dx`} />
 		           </Card.Body>
 		         </Accordion.Collapse>
 		       </Card>
 		     </Accordion>
 		<Accordion defaultActiveKey="2">
 		       <Card>
 		         <Card.Header>
 		           <Accordion.Toggle as={Button} 
 		             variant="link" eventKey="2">
 		             Click Me to Toggle!
 		           </Accordion.Toggle>
 		         </Card.Header>
 		         <Accordion.Collapse eventKey="2">
 		           <Card.Body>
 		            Greetings from GeeksforGeeks
 		           </Card.Body>
 		         </Accordion.Collapse>
 		       </Card>
 		     </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Styles>
	  </Fragment>
  );
}//end of Machinecards


