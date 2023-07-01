import React from 'react';
import {useState, useContext} from 'react'
import SecretTree from './secrettree';

import './footer.css'
import './App.css'
import './You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';


//This is the context file


export const AuthContext = React.createContext([]);

export default function LoginWrapper (){
	const [token, setToken, localToken, setLocalToken, authHeader, setAuthHeader]= useState('');


	//J INC: array notation above and json/object below? Is that right? 
	return(
		<AuthContext.Provider value = {[token, setToken, localToken, setLocalToken, authHeader, setAuthHeader]}>
			<Login/>
      <div className="center">
        I rendered. 
      </div>
		</AuthContext.Provider>

	)

}//end LoginWrapper


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


	//destructure the context
  const [token, setToken, localToken, setLocalToken] = useContext(AuthContext);
  //const [token, setToken, localToken, setLocalToken, authHeader, setAuthHeader] = useContext(AuthContext);

//Later we can take in a function from context to set global state
	//J: Since we are in a component that will render as a child of the provider we can do the
function authFetch (){
  const localStore = (token) =>{
  localStorage.setItem("Token stored locally", token);
  }
	const cred = {"username": username, "password":password};
  console.log(cred);
	const myHeaders = new Headers();
	const myRequest = new Request('https://git.heroku.com/jwebback.git/login', {
		method: 'POST',
		body: JSON.stringify(cred),
                headers:{
       	        'Access-Control-Allow-Origin': '*',
                 'Content-Type': 'application/json'
                }
	       })

	const handleHeaders = (token) => {
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('Authorization', token);
	}

  console.log(myRequest);
	fetch('https://jwebback.herokuapp.com/login', {
		method: 'POST',
		mode:'cors',
		headers:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(cred),
	       }).then(r => r.json())
		.then(token =>{
		if (token.access_token){
		setToken(token);
		localStore(token);
		handleHeaders(token);
		//now for setting the headers with the token
		}
	else{
		console.log("Wrong credentials");
	}
		}

	)
//FETCH END
}//end of the authFetch
  const onSubmitClick = (e)=>{
    e.preventDefault();
	  authFetch();//don't need 
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

	//Maybe we can use a big (complicated looking conditional render)
	//

	if (!token){
  return (
          <div style={{color:"white"}}>
		  Hi Josico!
      <h2>Login</h2>
      <form action="#">
        <div>
          <input type="text" 
            placeholder="Username" 
            onChange={handleUsernameChange}
            value={username} 
            autoComplete="on"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            autoComplete="on"
          />
        </div>
        <button onClick={onSubmitClick} type="submit">
          Login Now
        </button>
      </form>
    </div>
  )
		
}// first if statement
else {
	return (
		<SecretTree/>
	)
}
}//end of Login Component

//commented out stuff
//
//
//
//
//
//
//
// FETCH  START
	//fetch('http://localhost:5003/login', {
	//	method: 'POST',
	//	body: JSON.stringify(cred),
        //        headers:{'Content-Type': 'application/json'}
	//       }).then(r => r.json())
	//	.then(token =>{
	//	if (token.access_token){
	//	setToken(token);
	//	localStore(token);
	//	handleHeaders(token);
	//	//now for setting the headers with the token
	//	}
	//else{
	//	console.log("Wrong credentials");
	//}
	//	}

	//)
