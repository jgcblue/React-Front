import React from 'react';


export const AuthContext = React.createContext({
	token:'',
}
)

export const JuthContextProvider = (props) =>{
	const setAuthContextProvider = () =>
	{
		console.log("hi")
	}
}
const useAuth = () => React.useContext(AuthContext);

