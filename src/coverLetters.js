import React from 'react';
import {AuthContext} from './Logincw';


export const theComponents =[<DataAnalyst/>,<TutorCoverLetter/>, <DataScientist/>]


//121421: Stuck trying to figure out 
export const CoverLettersWrapper= ()=> {
        const [token]= React.useContext(AuthContext);
        console.log(token);
        if (token){
                        	return (
                        	<div>
                        		<CoverLetters children={theComponents}/>
                        	</div>
                        	)
                                }else{
                                        return(
                                                <div className="center" style={{color:"white"}}>
                                              Sorry you aren't allowed... 
                                       </div> 
                                        )
                                }
}

export const CoverLetters= ({children}) => {
	return(
children && (<div>{React.Children.map(children, child => React.cloneElement(child,{style:{...child.props.style}})
		)}
	</div>
	)
	)
}//end CoverLettersWrapper


// WORKING AS OF 12 14 21 START
//export const CoverLettersWrapper= ({children})=> {
//	return (
//	<div>
//		<CoverLetters children={theComponents}/>
//	</div>
//	)
//}
//
//export const CoverLetters= ({children}) => {
//	return(
//children && (<div>{React.Children.map(children, child => React.cloneElement(child,{style:{...child.props.style}})
//		)}
//	</div>
//	)
//	)
//}//end CoverLettersWrapper
// WORKING AS OF 12 14 21 START
//export const CoverLettersWrapper= ({children})=> {

function TutorCoverLetter ()  {

return (

<div className="CoverLetter" style={{textAlign:"center",backgroundColor:"rgba(0,0,0,0.85)", letterSpacing:"2px"}}>

</div>

)
}


function DataScientist () {

return(


<div style={{backgroundImage:"url(Lion)", backgroundRepeat:"no", backgroundOverflow:"scroll",paddingTop:"100px"}}>
	<div className="CoverLetter border border-primary" style={{color:"white", backgroundColor:"rgba(0,0,0,0.6)", letterSpacing:"2px"}}>


	<div className="center">
		
		<strong>Data Scientist</strong>
	</div>
		<br></br>
	My name is   Chavez and I am excited to apply for the position of data scientist research programmer at RAND corporation. I have many years of mathematical and statistical training which culminated in the completion of my mathematics PhD. The chance to employ and expand upon these skills while helping RAND in its mission to offer societies powerful, even life saving analytical solutions to questions of public policy.
		<br></br>
		<br></br>
		

	I have a deep interest in analytics, statistics, mathematics and programming. My interest in these areas developed as a young adult and was initially piqued by and centered on mathematics. Near the end of my research work in mathematics I solidified my decision to develop my programming skills, as to employ and further enhance my quantitative background in real-world settings. Data science is the perfect field for me in this career goal.
<br></br>

		Since completing my graduate work I have been diligently working through the fundamentals of programming in the languages Python and JavaScript. In particular, I have developed full-stack web applications which incorporate a so-called REST API (a portion of the program/application reserved for the calculation and distribution of machine learning models and related materials, graphs, values, etc). These projects required familiarity and facility with: Python (Numpy and Matplotlib), JavaScript (React and D3), SQL, machine learning algorithms (Linear Regression),  HTML and CSS. 
		<br></br>
		<br></br>

		While still early in my data science career, I feel that my progress, strong quantitative foundations, personality, general problem solving skills and love of programming indicate a candidate likely to be contribute substantially toward the goals of RAND. 
		<br></br>
		<br></br>

		Thank you for your time in reading this message. Please feel free to contact me at (805) 367-1107 and/or  .gj.chavez@gmail.com. Also feel free to visit my webpage to learn a little more about me at ZZZ. I eagerly await an opportunity to learn more about this position. 

		<br></br>
		<br></br>

With gratitude,

		<br></br>
		<br></br>
  G. Chavez

	
	

</div>

</div>
)

}

function DataAnalyst() {

return(

	<div style={{backgroundRepeat:"no",paddingTop:"100px"}}>
		<div className="CoverLetter border border-danger" style={{letterSpacing:"2px", backgroundColor:"rgba(0,0,0,0.6)"}}>

	<div className="center">
		
		<strong>Data Analyst</strong>
	</div>

		<br></br>
		<br></br>
	
I am passionate about mathematics/statistics and how they reveal otherwise
unnoted and/or underutilized trends in the business world. As such I am excited to apply for the position of Data Analyst at XX.

	<br></br>
	<br></br>

I have followed a vigorous path through mathematics and statistics which culminated in a
PhD in the field of mathematics in 2020. 
Through my recent work in Python and JavaScript and SQL (in particular with a Python web application)I have cemented my understanding database management systems, data analysis tools, and how to these technologies may be modularized and maintained within a single user friendly and insightful interface. These experiences have resulted in solid quantitative and analytical skills and they demanded that I be very self-motivated and methodical in my work and mindset.

	<br></br>
	<br></br>
In my estimation my quantitative background, self-initiative, organizational skills, high level of attention to details and burgeoning data analysis skills make me a good potential candidate. 

	I would love the opportunity to discuss the position in more depth as well as address any questions. While early on in this career I feel primed to contribute substantially.

		<br></br>	
		<br></br>	

	Thank you for reading. Please feel free to contact me at (805) 367-1107 or  .gj.chavez@gmail.com. Also feel free to peruse my website if interested at https://jgcweb.herokuapp.com/. 

		<br></br>	
		<br></br>	

With gratitude,

		<br></br>	
		<br></br>	
  G. Chavez


Sincerely,

		<br></br>
		<br></br>
  G. Chavez

</div>

</div>
)

}
export default CoverLettersWrapper;
