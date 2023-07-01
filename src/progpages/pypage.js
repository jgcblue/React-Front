
import '../footer.css'
import '../App.css'
import '../You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';

import React, {Fragment} from 'react'

import ReactMarkdown from "react-markdown";
import {Accordion} from 'react-bootstrap'
import {Row, Container, Col, Button} from 'reactstrap';


// import mode-<language> , this imports the style and colors for the selected language.
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import "ace-builds/src-noconflict/theme-github";


import AOS from 'aos';
import 'aos/dist/aos.css';



export function PyPage() {

	return(
<Fragment>
	<p> Add Python code duh.</p>	
</Fragment>
	)
	}//end PyPage

export default PyPage;




{/*NOW THE COMPONENTS */}
//function ReactCode(){
//
//    return(
//
//        <Fragment>    		
//            <Container>
//                
//            <div class="jumbotron">
//                <h1> More React Ideas</h1>
//            </div>
//            </Container>
//            <div className="center">
//               <a
//                href="https://dev.to/andrewbaisden/creating-react-flask-apps-that-connect-to-postgresql-and-harperdb-1op0"
//            target="_blank"> React and PostgreSQl and/or HarpderDB</a> 
//                <br/>
//                and search bars:
//                <a href="https://www.emgoto.com/react-search-bar/"
//                target="_blank">Search Bar in React</a>
//            </div>
//   <pre>
//       {`
//
//
//       `}
//        </pre> 
//            and Jumbotron stuff
//
//
//
//             <Button color="primary">
//    Click Me
//  </Button>
//            <pre>
//                {`
//import React from "react";
//import { Jumbotron } from "reactstrap";
//const gfg = (props) => {
//	return (
//		<div>
//			<br />
//			<Jumbotron>
//				<h3 className="display-2">
//					GeeksforGeeks!
//				</h3>
//				<hr />
//				<p className="display-3">
//					A Computer Science portal for geeks.
//					It contains well written, well
//					thought and well explained computer
//					science and programming articles,
//					quizzes. A Computer Science portal
//					for geeks. It contains well written,
//					well thought and well explained
//					computer science and programming
//					articles, quizzes.We provide a variety
//					of services for you to learn, thrive
//					and also have fun! Free Tutorials,
//					Millions of Articles, Live, Online and
//					Classroom Courses ,Frequent Coding
//					Competitions ,Webinars by Industry
//					Experts, Internship opportunities
//					and Job Opportunities.
//				</p>
//			</Jumbotron>
//		</div>
//	);
//};
//
//export default gfg;
//
//                `}
//            </pre>
//
//            <ToggleExample/>
//        </Fragment>    
//    )
//}//end of ReactCode component
//
//
