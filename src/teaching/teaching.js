import React, {Fragment} from 'react'
import '../footer.css'
import '../App.css'
import '../You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Document, Page} from 'react-pdf';
import axios from 'axios';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";





//local files to import mathOne and progOne
import mathOne from './testMathArt1.pdf';
import progOne from './testjsArt1.pdf';


//styles work:

export default function TeachSections() {

return (
<Fragment>
<Router>
	<div className="topnavtwo">
	
		<Link to='./teaching/math' >Math and Statistics </Link>
		<Link to='./teaching/prog'> Programming</Link>
	
	</div>

	<Router>
		<Switch>

			<Route path='/teaching/math'>
				<YouTMath/>
		</Route>
		
			<Route path='/teaching/prog'>
		<YouTCS/>
		</Route>
		</Switch>
	</Router>

	</Router>
</Fragment>
);
}




const Headings = ({ headings, activeId }) => (
  <ul>
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
              <li
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

	      return () =>{ observer.disconnect();  headingElementsRef.current = {};}, [setActiveId]});

};//end intersection observer

/**
 * Renders the table of contents.
 */
const TableOfContents = () => {

//const myBody={
//  font-family: sans-serif,
//  line-height: 1.6,
//  background-color: #1F2233,
//  color: #D8DEE9
//}
//	
//
//const myContainer={
//  max-width: "1050px";
//  margin: "0 auto";
//  display: flex;
//}
//
//
//const myNav={
//  width: 220px,
//  min-width: 220px,
//  padding: 16px,
//  margin: 8px,
//  align-self: flex-start,
//  position: -webkit-sticky, /* Safari */
//  position: sticky,
//  top: 48px,
//  max-height: calc(100vh - 70px),
//  overflow: auto,
//}
//
//@media screen and (max-width: 900px) {
//  nav {
//    display: none,
//  }
//}
//const myA={
//  color: #A6ACC9,
//  textDecoration: "none"
//}
//
//li.active > a {
//  color: white,
//}
//
//li > a:hover {
//  color: white,
//}
//
///*  Gives a little bit of buffer when header isnavigated to */
//const myhtwohthree{
//paddingTop: 16px,
//    marginTop: -16px,
//} 
  const [activeId, setActiveId] = React.useState();
	//import the custom hook and set it
  const { nestedHeadings } = useHeadingsData();
	
	//recall that useIntersectionObserver is a constant function
  useIntersectionObserver(setActiveId);
	//J: passing in the state Setting function

  return (
    <nav aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};//end TableOfContents


const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const YouTMath = () => {
	console.log("YouTMath rendered")
  return (
    <div className="container">
	    <main>
	    <div className="center" style={{color:"white"}}>
		    I show up? 
	    </div>
	    <h2 id="initial-header" style = {{color:"white"}}>Math and Statistics </h2>
        <h2 id="second-header">ArticleOneMath</h2>
	        <DLCompMath/>
		<Document file = {mathOne} style={{width:"70%"}}>
		<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
		</Document>
    </main>
      <TableOfContents />
    </div>
  );
};


const YouTCS = () => {
  return (
    <div className="container">
	    <main>
        <h2 id="initial-header">Programming</h2>

	      <p>Welcome</p>
	      <div className="center">
	      Explore brief articles on programming. 	
	      </div>
        <h2 id="second-header">Progrmaming Article One</h2>

	  <DLCompProg/>
		<Document file = {progOne} style={{width:"70%"}}>
		<Page pageNumber ={1} style={{marginLeft:"auto",marginRight:"auto"}} />
		</Document>
    </main>
	    <TableOfContents style={{color:"white"}} />
    </div>
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


