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
	//Your message
	
	

</div>

</div>
)

}

function DataAnalyst() {

return(

// Your  message 
)

}
export default CoverLettersWrapper;
