import { useState } from 'react';
//Comes from Digital Ocean article

export default function useToken() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());//hehe

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
	return {
		setToken: saveToken,
		token
	}
}
