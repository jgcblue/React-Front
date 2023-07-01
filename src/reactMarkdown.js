import React from 'react';
import {Fragment} from 'react';

import './App.css';
import './You_styles.css';
import ReactMarkdown from 'react-markdown';

const example="# A heading, \n   * put everything \n *  here? \n  `code is show` ? \n\n What if its liek \n\n ```  \n\n real freaky \n ``` ";

//Returns two divs right now. 
export const MarkdownC = ({ title, content }) => {
	return(
		<Fragment>	
			<div className="center">
            <div style={{color:"white"}}>
		<p> Example of rendering Markdown </p>	
			<strong> Ya see it? </strong>
			<pre>
				{`
		<p> Example of rendering Markdown </p>	
			<strong> Ya see it? </strong>
				`}
			</pre>


	<ReactMarkdown>{example}</ReactMarkdown>
        </div>
				</div>
		</Fragment>	
	)

};
export default MarkdownC;
