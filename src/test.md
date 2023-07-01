

The code here is taken from the React course on Udemy by Maximilian Schwarzmüller. 
The code is on his github as well as our downloads. 
The github page is (its a branch):<https://github.com/academind/react-complete-guide-code/tree/22-authentication>

# React Authorization, Logging in and Context


## React Context


There's a method that is assigned to the React object called

```javascript
React.createContext({
...
		})
```

is the command  that accepts key-value pairs. 
These key-value pairs are a record of state that can be used in oother components.

## Our required example of Context 

Here's an example where we create an *AuthContext* which serves as something like a wrapper to other
components, components that you want to have accesss to the "state" of AuthContext.

```javascript
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

```
## AuthContextProvider

This is a function that will 
```
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
}
}, []);

```

## App() and using context via *useContext*


First let's take a look at the necessary imports:

```javascript
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react􏰀router􏰀dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth􏰀context';
```
```javascript
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
</Layout> );
}
```

## AuthForm.js

```javascript
import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // optional: Add validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=A
IzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDout.txt                                                                       Page 2
exE9BhcJbGxnZ4DiRlrCN9xe24';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content􏰀Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
} })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
}); };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
/> </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
);
}//end of authForm;
```


```javascript
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
}
}, []);
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
};
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
); };
export default AuthContext;


```


## index.js

This is (finally) where we wrap up the thing.
```javascript

```


# Heroku pushing

11-19-21

There's been some issues. I have discovered now (around 3pm) that the main one was probably the
order I was uploading parts of the two component app ( Flask backend and React frontend ).

This time I have first done the Python part by itself by running:
> git add app.py database.db requirements.txt Procfile

and then pushing things with:

```bash
heroku git:remote -a jgcweb

git push heroku master

```

Here's the URL for the API:

<t https://jgcweb.herokuapp.com/>
and for the git Heroku git url:
<https://git.heroku.com/jgcweb.git>

Recall that we need to have our React application send requests there (the URL for the API), in particular the proxy
setting in the package.json file needs to be adjusted. 






# 11 21 21:

More on createContext.
This example from <https://reactjs.org/docs/context.html>
is better in that it is simpler.


```javascript
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

```

*The API*

Let's try and use the language of documentation and coders more. 


1. React.createContext
2. Context.Provider
3. Class.contextType
4. Context.Consumer
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

Requires a function as a child. 
The function receives the current context value and returns a React node.
The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, 
the value argument will be equal to the defaultValue that was passed to createContext().

##
useContext

const value = useContext(MyContext); Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest above the calling component in the tree.

When the nearest above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.

Also from React Docs:

<https://reactjs.org/docs/context.html>

Context.Consumer

```javascript
<MyContext.Consumer>
 {value => /* render something based on the context value */}
</MyContext.Consumer>
A React component that subscribes to context changes. This lets you subscribe to a context within a function component.
```

UPDATE:

From:< http://brianyang.com/react-hooks-a-deeper-dive-featuring-usecontext-and-usereducer/>

The new useContext hook to consume context does not change the concepts surrounding context, hence the plunge above. This context hook only gives us an extra, much prettier, way to consume context. It's amazingly helpful when applying it to components consuming multiple contexts.


cbdeveloper
17.8k1212 gold badges8282 silver badges175175 bronze badges
Thanks. So if both subscribes to the context, what is the basic difference? Not regarding syntax. – 
Henok Tesfaye
 Jun 29 '19 at 11:41
This article might help: I'll add it to the answer. brianyang.com/… – 
cbdeveloper
 Jun 29 '19 at 12:04 
33
One thing to keep in mind, useContext will cause a rerender when any item in the context is changed regardless of what is destructured off of it. with context.consumer, you can pass selected properties from values into your component and it will only rerender when those selected items change. – 
Bastiat
\@Bastiat Isn't first one is for Class component and 2nd one is for functional component ? – 
vikramvi


Three steps:

1. creating the context
2.  Providing the context
3. Consuming the context

Q: How do you consume context?


## React website information is good too

<https://reactjs.org/docs/context.html>


Q: 

A: All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

Changes are determined by comparing the new and old values using the same algorithm as Object.is.


### Dynamic Content (subheading from the reactjs page)

```javascript
A more complex example with dynamic values for the theme:

theme-context.js

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
themed-button.js

import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
app.js

import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.root);
```


# Heroku Database (Postgres)

Here's some information we'll need to use. 

```
ADMINISTRATION
Database Credentials
Get credentials for manual connections to this database.

Cancel
Please note that these credentials are not permanent.

Heroku rotates credentials periodically and updates applications where this database is attached.

Host
ec2-34-236-136-215.compute-1.amazonaws.com
Database
dd2h7kjeac4463
User
matlnruwkphojo
Port
5432
Password
0852c13c1a7ca8990beca4c7194ee6f14d9ca6c39d4cb1bfc4a5ae78a8d48c1d
URI
postgres://matlnruwkphojo:0852c13c1a7ca8990beca4c7194ee6f14d9ca6c39d4cb1bfc4a5ae78a8d48c1d@ec2-34-236-136-215.compute-1.amazonaws.com:5432/dd2h7kjeac4463
Heroku CLI
heroku pg:psql postgresql-regular-35996 --app jgcweb


```


# 11-23-21  More on JWT and Shit

## Generators and JavaScript and Python

```

function *fibonacci(n) {
  const infinite = !n && n !== 0;
  let current = 0;
  let next = 1;
  
  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}


//A Python version (Python 3)
//
a = int(input('Give amount: '))

def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fib(a)))



```



## JWT and React

The youtuber Lama Dev has a pretty good tutorial and includes code. 
The main thing my lazy   has been looking for is how to create tokens and
use them properly.


```javascript


import "./app.css";
import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { username, password });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete("/users/" + id, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="container">
      {user ? (
        <div className="home">
          <span>
            Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b> dashboard{" "}
            <b>{user.username}</b>.
          </span>
          <span>Delete Users:</span>
          <button className="deleteButton" onClick={() => handleDelete(1)}>
            Delete John
          </button>
          <button className="deleteButton" onClick={() => handleDelete(2)}>
            Delete Jane
          </button>
          {error && (
            <span className="error">
              You are not allowed to delete this user!
            </span>
          )}
          {success && (
            <span className="success">
              User has been deleted successfully...
            </span>
          )}
        </div>
      ) : (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <span className="formTitle">Lama Login</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

```


### The server code

Here's code from the server side. 
I have been avoiding learning any express. 
However, looking at some of its code... it looks so much like vanilla JS why
not?

I actually just downloaded a short pdf on express. It look really easy to learn
since I already have learned react and I can already see similarities. 

```javascript
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  {
    id: "1",
    username: "john",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "Jane0908",
    isAdmin: false,
  },
];

let refreshTokens = [];

app.post("/api/refresh", (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });

  //if everything is ok, create new access token, refresh token and send to user
});

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "5s",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    //Generate an access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400).json("Username or password incorrect!");
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("User has been deleted.");
  } else {
    res.status(403).json("You are not allowed to delete this user!");
  }
});

app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
});

app.listen(5000, () => console.log("Backend server is running!"));

```


### Async, await and (older historically) promises

```javascript
function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
  return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
  // ...
```

is equivalent to:

```javascript
async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
```

#### On promises
The pyramid of doom was significantly mitigated with the introduction of Promises. However, we still 
had to rely on callbacks that are passed on to .then and .catch methods of a Promise.

Promises paved the way to one of the coolest improvements in JavaScript. 
ECMAScript 2017 brought in syntactic sugar on top of Promises in JavaScript in the form of async and await statements.

They allow us to write Promise-based code as if it were synchronous, but without blocking the main thread,
as this code sample demostrates:

```javascript
const verifyUser = async function(username, password){
   try {
       const userInfo = await dataBase.verifyUser(username, password);
       const rolesInfo = await dataBase.getRoles(userInfo);
       const logStatus = await dataBase.logAccess(userInfo);
       return userInfo;
   }catch (e){
       //handle errors as needed
   }
};
```
Awaiting Promise to resolve is allowed only within async functions which means
that verifyUser had to be defined using async function.

However, once this small change is made you can await any Promise without additional changes in other methods.

Async - A Long Awaited Resolution of a Promise
Async functions are the next logical step in the evolution of asynchronous programming in JavaScript.
They will make your code much cleaner and easier to maintain. Declaring a function as async will
ensure that it always returns a Promise so you don’t have to worry about that anymore.

Why should you start using the JavaScript async function today?

The resulting code is much cleaner.
Error handling is much simpler and it relies on try/catch just like in any other synchronous code.
Debugging is much simpler. Setting a breakpoint inside a .then block will not move to the next 
.then because it only steps through synchronous code. But, you can step through await calls as if they were synchronous calls.

### Axios

#### Axios and Config

This article explains what the config thing is. Its not actually a keyword but it shows up because
it makes sense (as a string for the object implied)

<https://zetcode.com/javascript/axios/>

The official docs aren't bad either:

<https://axios-http.com/docs/api_intro>



## On Functional Programming

Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
Functional programming is declarative rather than imperative,
and application state flows through pure functions.
Contrast with object oriented programming, 
where application state is usually shared and colocated with methods in objects.
Functional programming is a programming paradigm, meaning that it is a way of thinking
about software construction based on some fundamental,
defining principles (listed above).
Other examples of programming paradigms include object oriented
programming and procedural programming.
Functional code tends to be more concise, more predictable, and easier to test than
imperative or object oriented code — but if you’re unfamiliar with it and the common patterns associated with it,
functional code can also seem a lot more dense, and the related literature can be impenetrable to newcomers.
If you start googling functional programming terms, you’re going to quickly hit a brick wall
of academic lingo that can be very intimidating for beginners.
To say it has a learning curve is a serious understatement.
But if you’ve been programming in JavaScript for a while, chances are good that you’ve
used a lot of functional programming concepts & utilities in your real software.



# Importing a full markdown file into React

```javascript
import React, { Component } from 'react';
import AppMarkdown from './App.md';
import ReactMarkdown from 'react-markdown';

class App extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} />;
  }
}

export default App;
```

How about without  class components?...
Recall that a useEffect will run as soon as the component is mounted. 
```javascript
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import file from "./md/posts.md";

export default function () {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <ReactMarkdown source={markdown} />
    </>
  );
}
```


