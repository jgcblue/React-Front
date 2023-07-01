import React from 'react';
import '../App.css';
import '../You_styles.css';
import {Fragment} from 'react';
import {useEffect} from 'react';
//import {MathJax, MathJaxContext} from 'better-react-mathjax'
import {Button} from "reactstrap";
import {Row, Container, Col} from 'reactstrap';
import ToggleExample from './toggle_js';

//Not sure if this import will work (its for styling the react-strap stuff)
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {useState} from 'react';
import axios from 'axios';



//for multiple allowable pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function DataHome() {
	useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

//Another useEffect for 

useScript('https://www.jdoodle.com/assets/jdoodle-pym.min.js')
return (
	  <Fragment>
		  <Container>
			  <Row>
				  <Col>
					  {/*

          <Link to={`/YouSections/progpages/python`}>Python and Flask </Link>
          <Link to={`/YouSections/progpages/javascript`}> JavaScript and React </Link>
	  */}
	  <Router>

		  {/* QUOTE:
		   “Torture the data, and it will confess to anything.” – By Ronald Coase */}
		  <div id="fixLeftPanel" style={{backgroundColor:"#333", color:"white"}}>
		<figure className="quote" style={{color:"SkyBlue",fontSize:"12px", fontFamily:"cursive"}}>
			<blockquote>
				<p>
					"Torture the data, and it will confess to anything."
				</p>
				<figcaption>
				&mdash; Ronald Coase 
				</figcaption>
			</blockquote>
</figure>
				   <h6> Selections (links)</h6>
				  <br></br>
			  	
			  <Link style={{color:"red"}} to={'/homes/datahome/backgroundds'}>My Background</Link>
			  <br></br>
					  <Link style={{color:"red"}} to={'/homes/datahome/samplework'}>Sample Work</Link>
</div>

      <Switch>
	      <Route path="/homes/datahome/backgroundds">
		<Backgroundds/>
            </Route>
	      <Route exact path="/homes/datahome/samplework">
		      <SampleWork/>
            </Route>

	      </Switch>
	  </Router>
		  
		  </Col>
		  </Row>
		  </Container>
</Fragment>

);
};




function ProgPages() {
  return (
    <Router>

	    
	    <p>From the Programming honme</p>
      <div>
	      <ul>
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


function ReactCode(){

    return(

        <Fragment>    		
            <Container>
                
            <div className="jumbotron">
                <h1> More React Ideas</h1>
            </div>
            </Container>
            <div className="center">
               <a
                href="https://dev.to/andrewbaisden/creating-react-flask-apps-that-connect-to-postgresql-and-harperdb-1op0"
            target="_blank"> React and PostgreSQl and/or HarpderDB</a> 
                <br/>
                and search bars:
                <a href="https://www.emgoto.com/react-search-bar/"
                target="_blank">Search Bar in React</a>
            </div>
   <pre>
       {`


       `}
        </pre> 
            and Jumbotron stuff



             <Button color="primary">
    Click Me
  </Button>
            <pre>
                {`
import React from "react";
import { Jumbotron } from "reactstrap";
const gfg = (props) => {
	return (
		<div>
			<br />
			<Jumbotron>
				<h3 className="display-2">
					GeeksforGeeks!
				</h3>
				<hr />
				<p className="display-3">
					A Computer Science portal for geeks.
					It contains well written, well
					thought and well explained computer
					science and programming articles,
					quizzes. A Computer Science portal
					for geeks. It contains well written,
					well thought and well explained
					computer science and programming
					articles, quizzes.We provide a variety
					of services for you to learn, thrive
					and also have fun! Free Tutorials,
					Millions of Articles, Live, Online and
					Classroom Courses ,Frequent Coding
					Competitions ,Webinars by Industry
					Experts, Internship opportunities
					and Job Opportunities.
				</p>
			</Jumbotron>
		</div>
	);
};

export default gfg;

                `}
            </pre>

            <ToggleExample/>
        </Fragment>    
    )


}

function Backgroundds() {
  return (
	  <div className="center" style={{color:"white", fontSize:"25px", paddingTop:"100px"}}>
		  I have a PhD in mathematics from the University of North Texas.
		  <br></br>
		  Prior to that I student mathematics at the University
		  of California where I was fortunate to be exposed to both pure and applied mathematical research 
		 experiences.
		  <br></br>
		  I am passionate about the field of Data Science/Analysis which promises (and is often producing) surprising findings
		  framed in the quasi-eternal language of mathematics.
	    
    </div>
  );
}

function SampleWork() {
  return (
	  <Fragment>

		  <div className="center">
		  <div className="jumbotron" style={{color:"red"}}>
			  I am still in the process of transferring details about this project!
			  <br></br>
			  Thank you for your patience:)
		  	
		  </div>
		  </div>
		  
		  
	  <div className="center" style={{fontSize:"25px",paddingTop:"100px",color:"white"}}>
		  <div data-aos="zoom-in" >
			  <div>	
		  <strong>Problem:</strong>
		  </div>
		  Housing prices have skyrocketed in recent years and
		  we all know saving enough money for a home is a tremendous task.
		  <br></br>
		  Some know (hopefully most) that housing prices to tend to take plunges as well, albeit under circumstances that are typically infrequent. 
		  <br></br>
		  With that said, we undertook the development of a model of housing prices, i.e. a mathematical machine capable of estimating the cost of a home at a particular future time. 
	    
    </div>
	  </div>

		  <div data-aos ="zoom-in">

	  <div className="center" style={{fontSize:"25px",paddingTop:"100px",color:"white"}}>
		  <div>
		  <strong>Approach:</strong>
		  </div>
		
		  We use (among others) the Python libraries:
		  <ul>
			  <li> <span>Flask</span></li>
			  <li><span>Numpy</span></li>
			  <li><span>matplotlib</span></li>
			  <li><span>base64</span></li>
		  </ul>
		  <br></br>
		  and JavaScript functionality and libraries:
		  <br></br>
		  <ul>
		  	<li><span>React</span></li>
			  <li><span>hooks and functional components</span></li>
			  <li><span>Axios</span></li>
			  <li>(non JS) HTML, CSS and Bootstrap</li>
		  </ul>
		  along with the 


    </div>
		  </div>
		  <div data-aos = "zoom-in">
		  	
		  </div>

		  {/*Place the image here */}

		  <CrimeFunc/>

		 <div>
		 	Trying to add the new plot url image now
		 </div> 

	  </Fragment>
  );
}
export const CrimeFunc = () => {
    const [thepng, setPng] = useState();
    const [pngRaw, setpngRaw] = useState();//not sure we need pngRaw

	useEffect(() => {
		//live version (below)
		//axios.get('https://jwebback.herokuapp.com/crimeproj').then(function (d){
		//local version (below)
		axios.get('https://jwebback.herokuapp.com/crimeproj').then(function (d){
            setpngRaw(d);
//            console.log(d.data, "You see me buddy?");
//            console.log(typeof d.data, "You see me buddy? From the axios I will print the string of base 64 image data")
            console.log("type of d.data is", typeof d.data)
            console.log("All of d", d)
            console.log("d.data is", d.data)
            setPng(d.data);
        }//function (d) End
        );
    }, []);


	return (

		<Container>
                <Row>
                        <Col>
                                {/* I think that we want single quotes or that symbol and not doublequotes as this way looks the closest to what I would expect */}
        <img width='400' height ='270' src={`data:image/png;base64,${thepng}`+""} alt="" />
                        </Col>
                </Row>
		</Container>
	);
};




const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};
