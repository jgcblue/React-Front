import './App.css'
import './Yourname.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, {Fragment} from 'react'

import {AuthContext} from './Logincw';
import CoverLettersWrapper from './coverLetters';

import {
BrowserRouter as Router,
HashRouter as HRouter,
Redirect,
Switch,
Route,
Link
} from "react-router-dom";

export default function SecretTree(){
	//perhaps its not too much trouble to get a hold of the token if it exists and otherwise
	//redirect the user? 
	//
	const token = React.useContext(AuthContext);

	if (token){
	return(
		<Fragment>
			<div className="center">Welcome to the authenticated portion of the site.</div>	
	<Router>

			<div className="topnav">
			<Link to="/login/buk"> buk </Link>
			<Link to="/login/"> </Link>
        <Link to="/login/coverLetters"> Cover Letters </Link>
			</div>
			
			<Switch>
			<Route exact path="/login/buk">
        <Buk children={<Poem/>}/>
			</Route>
			<Route exact path="/login/">
			</>
			</Route>
        <Route exact path="/login/coverletters">
          <CoverLettersWrapper/>
          </Route>
			
			</Switch>
			</Router>
		</Fragment>
	)
}//first if statement
else{
	return(
		<div>
			You shouln't be here!
		</div>
	)

}
}//end SecretTree

//Move in Buk and 's poem to here. 


function Buk(props) {
return(
<Fragment>

<div style={{backgroundImage:"url(https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2019/05/26100219/HCAMXX1.jpg)", backgroundOverflow:"scroll",paddingTop:"100px"}}>
<div className="bukPoem" style={{color:"white",backgroundColor:"rgba(0,0,0,0.5)"}}>
<u> Love is a Dog from Hell </u>	
<br></br>
<br></br>
There is a loneliness in this world so great <br></br>
that you can see it in the slow movement of <br></br>
the hands of a clock.<br></br>
people so tired<br></br>

mutilated<br></br>
either by love or no love.<br></br>
people just are not good to each other<br></br>

one on one.<br></br>
the rich are not good to the rich<br></br>

the poor are not good to the poor.<br></br>
we are afraid.<br></br>

our ducational system tells us<br></br>

that we can all be<br></br>
big-  winners.<br></br>
it hasn't told us<br></br>

about the gutters<br></br>
or the suicides.<br></br>
or the terror of one person<br></br>

aching in one place<br></br>
alone<br></br>
untouched<br></br>

unspoken to<br></br>
watering a plant.<br></br>

<br></br>
<br></br>
<figcaption><cite><a href=" Poems and  ">Poems !</a></cite>Charles Bukowski</figcaption>

</div>
</div>

{/*
<div>
{props.poem}
</div>
*/}

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
<u> Fallen Angel </u>
<br></br>
<br></br>
</div>
</div>

</div>
)

}
function () {
const [token]=React.useContext(AuthContext);
  console.log(token);

  if (!token) {
    return(
      <div className="center">
        get out
      </div>
    )
  }else{
return(
<Fragment>

	<div style={{backgroundColor:"DarkBlue", backgroundOverflow:"scroll",paddingTop:"300px", paddingBottom:"300px"}}>
<div className="bukPoem" style={{color:"white",backgroundColor:"rgba(0,0,0,0.5)"}}>

	<div className="center">
		<u> To </u>
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
}
