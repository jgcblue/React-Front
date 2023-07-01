
import '../footer.css'
import '../App.css'
import '../You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';


import React, {Fragment} from 'react'

import {useEffect} from 'react';

import {Row, Container, Col, Button} from 'reactstrap';
import MarkdownC from '../reactMarkdown';
import {CodeT} from '../callExample';
import ToggleExample from '../homes/toggle_js';


import AOS from 'aos';
import 'aos/dist/aos.css';


export function JsPage() {

	useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

//Another useEffect for 

useScript('https://www.jdoodle.com/assets/jdoodle-pym.min.js')
	return(
<Fragment>
	<Container>
		<div data-aos="zoom-in" style={{color:"white",paddingTop:"75px"}}>
		<Row>
			<Col>
				Check out code snippets and then try them out!
				<br></br>
				Or you can experiment yourself. 
				<br></br>
				Shout out to <a href="https://replit.com/" target="_blank">Replit</a>
				for providing this window to test code on!
				
			</Col>
			<Col>
				{/* Don't forget how we got this rendering: the ?embed = true line */}
					<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@YouChavez8/MuddyWindingWheel?embed=true"></iframe>
			</Col>
	</Row>
			      </div>
	</Container>
	<MarkdownC/>

	<CodeT/>

	<ToggleExample/>

</Fragment>
	)
	}//end PyPage

export default JsPage;
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

