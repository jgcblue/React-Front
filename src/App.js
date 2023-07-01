import './footer.css'
import './App.css'
import './YOURNAME_styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import LoginWrapper from './Logincw';
import CoverLettersWrapper from './coverLetters';
import {Document, Page} from 'react-pdf';
import sampleResume from './YOURNAMEM_resume_share.pdf';
import mathOne from './testMathArt1.pdf';
import progOne from './testjsArt1.pdf';
import axios from 'axios';
import React, {Fragment} from 'react'
import kitties from './lovecats.giff';
import MathHome from './homes/mathhome';
import ProgPages from './progpages';
import FutureDirections from './future/future';
import SecretsHome from './homes/secretshome';
import DataHome from './homes/datahome';
import {Accordion} from 'react-bootstrap';
import {Row, Container, Col, Button} from 'reactstrap';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-github";
import AOS from 'aos';
import 'aos/dist/aos.css';
import file from "./test.md";
import ReactMarkdown from "react-markdown";

import {
BrowserRouter as Router,
HashRouter as HRouter,
Redirect,
Switch,
Route,
Link
} from "react-router-dom";




export default function App(){
return (

<Fragment>

<NestingExample/>

	<div style={{paddingBottom:"300px"}}>
		
	</div>
</Fragment>
)
};




function NestingExample() {

return (

	<Router>
<div className="topnav">
<Link to="/">Home</Link>
<Link to="/about">About me </Link>
<Link to="/YOURNAMESections">Explore</Link>
	{/*<Link to="/fetchExample">Fetch Play</Link>*/}


<Link to="/coverLetters" style={{color:"#333"}}> CL's </Link>

	<Link to="/login" style={{color:"white", float:"right"}}> Login</Link>
	
	<Link to="/teaching" style={{color:"white", float:"right"}}> Teaching/Mentoring</Link>
</div>


<Switch>
<Route exact path="/">
<Home/>
</Route>
<Route exact path="/">
<Buk poem={<Poem/>} />
</Route>
<Route exact path="/about">
<About/>
</Route>
	<Route path="/YOURNAMESections" component={YOURNAMESections}/>


<Route path="/buk">
<Buk  children={<Poem/>}/>
</Route>


<Route path="/coverLetters">
<CoverLettersWrapper/>
</Route>


	<Route path="/teaching" component={TeachSections}/>
<Route path="/login">
<LoginWrapper/>
</Route>
</Switch>
</Router>
);
}


function YOURNAMESections() {
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

return (
<Fragment>
<Router>
<div className="topnavtwo">

<Link to={`/homes/datahome`} onClick={setShow} >Data Analysis</Link>
<Link to={`/progpages`}>Programming</Link>
<Link to={`/homes/mathhome`}>Math</Link>
<Link to="/future/future" style={{float:"right"}} onClick={setShow}>Future Directions</Link>
<Link to={'/homes/blog'} style={{float:"right", display:"none"}} onClick={setShow}>Blog</Link>

</div>

<Switch>
<Route path="/homes/datahome">
<DataHome/>
</Route>
<Route path="/homes/mathhome">
<MathHome/>
</Route>
<Route path="/progpages">
<ProgPages/>
</Route>

<Route path="/future/future">
<FutureDirections/>
</Route>

<Route path="/homes/blog">
{/*              <Blog/> */}
</Route>
<Route path="/homes/secretshome">
<SecretsHome/>
</Route>
</Switch>
</Router>

{renderWelcome()}
</Fragment>
);
}




function SecretMikaSico (){

return(
<Fragment>
<div>
Gonna try the useEffect here
</div>
<div id="">

<p><span className="first">A</span> nd they stayed and wrapped around each other tighter than before.</p> 			  
<div className="center">
<img src={kitties} style={{width:"60%", height:"80%"}}/>
</div>
<div id="poem">

<p>Insert a Message </p>

</div>
</div>
<div className="codeYOURNAME">
<pre>{`
SHOW SOME CODE:)
`}

</pre> 
</div> 

<div className="center">
where the Deploy object is actually a functional component that will render the props we are passing in. 
which is: 
</div>
<div className="codeYOURNAME">
<pre style={{overflowX:"scroll"}}>
{`
import React from 'react';

export const Deploy = ({prop}) => {
return(<div>{prop.tutorial}</div>)
}

`}
</pre>
</div>


</Fragment>
)
}

function Home() {
useEffect(() => {
AOS.init({
duration : 2000
});
}, []);


useScript('https://www.jdoodle.com/assets/jdoodle-pym.min.js')
return (
<Fragment>
<Container className="textCenter" style={{marginTop:"50px"}}>

<Row style={{paddingBottom:"200px", paddingTop:"100px"}}>
<Col>
<div className="jumbotron" style={{background:"transparent"}}>
<div data-aos="zoom-in">
<div className="center" style={{fontSize:"60px", color:"white"}}>
Welcome to My Webpage
</div>
</div>
</div>
</Col>
</Row>

<Row>

<div className="jumbotron" style={{background:"transparent"}}>
<div data-aos="zoom-in">
<div className="center" style={{fontSize:"40px", color:"white", paddingTop:"100px"}}>
	Welcome Message
</div>
</div>
</div>

</Row>
<Row>
<div id="example">

</div>

</Row>
<Row style={{paddingBottom:"200px", paddingTop:"200px"}}>
<Col>
<div data-aos="zoom-in" style={{fontSize:"40px", color:"white"}}>
<div className="center">
	Accordion message

</div> 
</div>
</Col>
</Row>


<Row style={{paddingBottom:"30px"}}>
<Col>
<div data-aos="zoom-in-right">

<Accordion style={{paddingBottom:"500px"}}>
<Accordion.Item eventKey="0">

<Accordion.Header style={{backgroundColor:"red"}}> Check out some Markdown Notes... </Accordion.Header>
<Accordion.Body>

<MarkdownPlace/>
</Accordion.Body>
</Accordion.Item>
<br></br>
</Accordion>
</div>

</Col>

</Row>

</Container>
<div className="footer-clean" data-aos="fade-up">
<footer>
<div className="container">
<p className="copyright" style={{float:"right"}}>JGCB © </p>
</div>


</footer> 
</div>
</Fragment>
);
}//end of Home
const MarkdownPlace = function () {
const [markdown, setMarkdown] = useState("");

useEffect(() => {
fetch(file)
.then((res) => res.text())
.then((text) => setMarkdown(text));
}, []);

return (
<Fragment>
<p>I rendered</p>
<ReactMarkdown children={markdown} />
<p>Changing the props name to children made the file render...</p>
</Fragment>
);
}






const ApiTestC = () => {
const [theResponse, setResponse] = useState();
useEffect(() => {
axios.get('/api').then(function (d){
}//function (d) End
);
}, []);


return (

<Fragment>
<p>Put something using the state from the backend</p>	
</Fragment>
);
}//App End

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

function onChange(newValue) {
console.log("change", newValue);
}

function AceExample() {
const [code, setCode] = useState(`function hello() {
console.log("Hello World!");
}`)

return (
<AceEditor
mode='javascript'
theme="github"
onChange={onChange}
editorProps={{ $blockScrolling: true }}
/>
)
}


function About (){	useEffect(() => {
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
<div data-aos="zoom-in">
<div className="center" style={{color:"white",fontSize:"25px", paddingTop:"150px"}}>
I graduated with a PhD in mathematical Set Theory with a dissertation <i>Results on Non-Club Isomorphic Aronszajn trees</i> from the University of North Texas in 2020.
<br></br>
<br></br>
Since then I have been bolstering my skills in programming, in particular the languages Python and Javascript. 
<br></br>
<br></br>
In fact, this website itself is comprised of these technologies. 
</div>
</div>
</Col>

</Row>

<Row>
<Col style={{display:"flex", flexDirection:"column",justifyContent:"center", paddingTop:"500px"}}>

<div data-aos ="zoom-in">
<div className="center" style={{fontSize:"25px", color:"white"}}>
Take a look at my resume and let me know if you have any questions.

<br></br>
<br></br>
<br></br>

</div>
</div>

</Col>
</Row>
</Container>

<div data-aos="zoom-in">
<ResumeComponent/>
</div>
</Fragment>
)

}


function DownloadLink(props) {
        return (
            <a href={props.src} download>{props.children}</a>
        )
}

function ResC(){
        return (
            <DownloadLink src="YOURNAMEM_resume_share.pdf">Click Here</DownloadLink>
        )
}
function ResumeComponent () {

return (
  <div>
	  <DLComp/>
<Document file = {sampleResume} style={{width:"100%"}}>
<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
</Document>

  </div>

)

}

function ExploreWelcome(){
return(
<div className="center" style={{color:"white",fontSize:"25px", paddingTop:"150px"}}>
Feel free to explore my math/stats and programming materials by clicking the links above!

</div>

)
}
function Buk(props) {
return(
<Fragment>

<div style={{backgroundImage:"url(https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2019/05/26100219/HCAMXX1.jpg)", backgroundOverflow:"scroll",paddingTop:"100px"}}>
<div className="bukPoem" style={{color:"white",backgroundColor:"rgba(0,0,0,0.5)"}}>
<u> Love is a Dog from Hell </u>	
<br></br>
<br></br>
</div>
</div>


<div style={{paddingBottom:"200px"}}>

{props.children}

</div>
</Fragment>
)
}
function Poem() {
return(
<div>
<div style={{backgroundImage:"url(https://media.istockphoto.com/vectors/texting-phone-cheating-boyfriend-vector-id866103588?k=20&m=866103588&s=612x612&w=0&h=Bsg_OPHDrFQPLJB-MQtGw5Rs2-Ll6ek0tFdVm8y4yPo=)", backgroundRepeat:"no", backgroundOverflow:"scroll",paddingTop:"100px"}}>
<div className="bukPoem" style={{textAlign:"center",backgroundColor:"rgba(0,0,0,0.85)", letterSpacing:"2px"}}>
</div>

</div>
)

}
function aFunctionName() {
return(
<Fragment>

	<div style={{backgroundColor:"DarkBlue", backgroundOverflow:"scroll",paddingTop:"300px", paddingBottom:"300px"}}>
<div className="bukPoem" style={{color:"white",backgroundColor:"rgba(0,0,0,0.5)"}}>

	<div className="center">
		<u> Message</u>
	</div>
	<br></br>
	<br></br>
	<figure className="quote">
		<blockquote>
	<i>“How much more grievous are the consequences of anger than the causes of it.”</i>
			<figcaption>
				&mdash; Marcus Aurelius, <cite>Meditations</cite>
			</figcaption>
		</blockquote>
	</figure>

	<br></br>
Deep down I am sorry and there sits with me

	<br></br>

immense grief for things I said many times over and ignoring you and letting
you go. 

<br></br>
I never expect to meet somone like you.
<br></br>
Its as if I feel every type of love there is, and it rises in me and

<br></br>
<br></br>

fills me in a combination that feels like life itself. 

<br></br>
<br></br>

Please remember that, 

I'm sorry I don't speak this way enough. 

	<figure className="quote">
		<blockquote>
			<i>"Here is a rule to remember in future, when anything tempts you to feel bitter: not 'This is misforture,' but 'To bear this worthily is good forture.'"</i>
			<figcaption>
				&mdash; Marcus Aurelius, <cite>Meditations</cite>
			</figcaption>
		</blockquote>
	</figure>

</div>
</div>

</Fragment>

)

}



function DLMathComp(props){

const viewHandler = async () => {
	console.log("I ran");
    axios({
	    method:'POST',
    		url: 'https://jwebback.herokuapp.com/download${props.filename}', 
	        mode: 'cors',
                headers:{
                'Content-Type': 'application/json'
		},
                responseType: 'blob'
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };
      return (
      <div className="center">
        <button onClick={viewHandler}> View Pdf </button>{" "}
      </div>
    );
}
function DLComp(){

const viewHandler = async () => {
	console.log("I ran");
    axios({
	    method:'POST',
    		url: 'https://jwebback.herokuapp.com/download', 
	        mode: 'cors',
                headers:{
                'Content-Type': 'application/json'
		},
                responseType: 'blob'
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };
      return (
      <div className="center">
        <button onClick={viewHandler}> View Pdf </button>{" "}
      </div>
    );
}




//styles work:

function TeachSections() {

	console.log("TeachSections function fired")
return (
<Fragment>
	{console.log("hash tag me too")}
<Router>
	<div className="topnavtwo">
	
		<Link to={`/teaching/math`} style={{float:"right"}}>Math and Statistics </Link>
		<Link to={`/teaching/prog`} style={{float:"right"}}> Programming</Link>
	
	</div>

		<Switch>

			<Route path="/teaching/math" component={YOURNAMETMath}/>

	{console.log("hash tag me three")}
		
			<Route path="/teaching/prog">
				<YOURNAMETCS/>
		</Route>
		</Switch>

	</Router>
</Fragment>
);
}

function TMess(){
	return (
		<div className="center"> i dont know </div>
	)
}


const Headings = ({ headings, activeId }) => (
  <ul >
    {headings.map((heading) => (
	    <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
	      <a 
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
		    <li style={{color:"white"}}
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);//end Headings 

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = React.useState([]);

  React.useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("main h2, main h3")
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};//end useHeadingsData

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title
      });
    }
  });

  return nestedHeadings;
};//end getNestedHeadings

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = React.useRef({});
  React.useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, { root: document.querySelector("iframe"), rootMargin: "500px" });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

	      return () => observer.disconnect();
  }, [setActiveId]);
};


/**
 * Renders the table of contents.
 */
function TableOfContents () {

  const [activeId, setActiveId] = React.useState();
	//import the custom hook and set it
  const { nestedHeadings } = useHeadingsData();
	
	//recall that useIntersectionObserver is a constant function
  useIntersectionObserver(setActiveId);
	//J: passing in the state Setting function

  return (
	  <nav className="navtoc">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};//end TableOfContents


function YOURNAMETMath () {
	console.log("YOURNAMETMath rendered")
  return (
		  <Container>
			  <Row>
				  <Col xm={2} >
					  <TableOfContents />
				  </Col>
				  <Col id="column2fromYOURNAMEtmath" xm={10} >
					  <main>
	    <h2 id="initial-header" style = {{color:"white"}}>Another Article</h2>

					  <Document file = {mathOne} style={{width:"70%", paddingBottom:"50px"}}>
		<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
		</Document>
				 <br></br> 
				 <br></br> 
					  <h2 id="second-header" style={{color:"white"}}>ArticleOneMath</h2>
					  <Document file = {mathOne} style={{width:"70%", paddingBottom:"50px"}}>
		<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
		</Document>
					  </main>
				  </Col>
				 <br></br> 
				 <br></br> 
			  </Row>

			  </Container>
  );
};



function YOURNAMETCS () {
	console.log("YOURNAME Programming  teaching rendered") 
  return (
		  <Container>
			  <Row>
				  <Col xm={2} >
					  <TableOfContents />
				  </Col>
				  <Col id="column2fromYOURNAMEcomp" xm={10} >
					  <main>
	    <h2 id="initial-headercomp" style = {{color:"white"}}>Another Article</h2>

					  <Document file = {progOne} style={{width:"70%", paddingBottom:"50px"}}>
		<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
		</Document>
				 <br></br> 
				 <br></br> 
				 <br></br> 
				 <br></br> 
				 <br></br> 
				 <br></br> 
					  <h2 id="second-header" style={{color:"white"}}>QuickSort</h2>
					  <Document file = {mathOne} style={{width:"70%", paddingBottom:"50px"}}>
		<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
		</Document>
					  </main>
				  </Col>
				 <br></br> 
				 <br></br> 
			  </Row>

			  </Container>
  );
};




function DLCompMath(){

const viewHandler = async () => {
	console.log("I ran");
    axios({
	    method:'POST',
    		url: 'https://jwebback.herokuapp.com/download', 
	        mode: 'cors',
                headers:{
                'Content-Type': 'application/json'
		},
                responseType: 'blob'
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };
      return (
      <div className="center">
        <button onClick={viewHandler}> View Pdf </button>{" "}
      </div>
    );
}
function DLCompProg(){

const viewHandler = async () => {
	console.log("I ran");
    axios({
	    method:'POST',
    		url: 'https://jwebback.herokuapp.com/download', 
	        mode: 'cors',
                headers:{
                'Content-Type': 'application/json'
		},
                responseType: 'blob'
    })
      .then(response => {
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };
      return (
      <div className="center">
        <button onClick={viewHandler}> View Pdf </button>{" "}
      </div>
    );
}

