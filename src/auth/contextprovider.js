import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { createContext, useEffect } from "react";
import useToken from './YouuseToken';
import Login from '../App';
//Now figure out how to use this hook in here...

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AuthContext = createContext({});


/// AUTH PROVIDER FUNCTION START
const AuthProvider = (props) => {

const {token,setToken} = useToken();

const logout = () => {
    sleep(2000).then(() => setToken(null));
  };

 const authContextValue = {
    token,//comes from the custom hook
    logout
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};//AuthProvider END

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };



//export default function Login({ setToken }) {
//
//async function logincreds(credentials) {
//	console.log(credentials)
//	console.log(JSON.stringify(credentials))
//
//	return (
//   fetch('http://localhost:5000/api/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }, body: JSON.stringify(credentials) })
//   .then(data => {
//	   console.log(data);
//}//logincreds
//   )
//	)
//}
//
//  const [username, setUserName] = useState();
//  const [password, setPassword] = useState();
//
//
//setUserName('sicoMika')
//setPassword(' ')
//
//  const handleSubmit = async e => {
//    e.preventDefault();
//    const token = await logincreds({
//	    username,
//	    password
//    });
//    setToken(token);
//  }
//
//  return(
//	  <div style={{paddingTop:"400px",color:"white"}}>{/* was login with className wrapper ... */}
//      <h1>Please Log In</h1>
//      <form onSubmit={handleSubmit}>
//        <label>
//          <p>Username</p>
//          <input type="text" onChange={e => setUserName(e.target.value)} />
//        </label>
//        <label>
//          <p>Password</p>
//          <input type="password" onChange={e => setPassword(e.target.value)} />
//        </label>
//        <div>
//          <button type="submit">Submit</button>
//        </div>
//      </form>
//    </div>
//  )
//}
//
//Login.propTypes = {
//  setToken: PropTypes.func.isRequired
//};
//
//
