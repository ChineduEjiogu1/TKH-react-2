import { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import reactLogo from './assets/react.svg'
import './App.css'


function Signup()
{
  return (

    <div className="form-container">
      <Form className="signup-form">
        <Form.Group>
            <h3>Signup</h3>
                <Form.Control className="name-input" type="text" placeholder="name" name="name"></Form.Control>
                <Form.Control className="username-input" type="text" placeholder="Username" name="Username"></Form.Control>
                <Form.Control className="email-input" type="text" placeholder="email" name="email" ></Form.Control>
                <Form.Control className="password-input" type="password" placeholder="Password" name="password"></Form.Control>
                <Button className="submit-button" value="submit" type="submit">Signup</Button>
                <div>Forgot password?</div>
            </Form.Group>
        </Form>
    </div>
  )
}

function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError ] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if(username == "user123" && password == "password123"){
      console.log("logged in");
      props.setLoginUser(true);
      setError(false);
    } else {
      setError(true);
    }
  }


  return (
    <div>
      {
      error ? 
        <div>That was the wrong username and/or password</div> 
      : 
        <div>Welcome to the app</div>
      }
      <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
        <Form.Control onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username"/>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
        <Button type="submit" >Login</Button>
      </Form>
    </div>
  )
}

function NavBar(props)
{
  return(
    <nav className='nav-bar-container'>
      <ul className='nav-bar-links'>
        <li>
          {props.home}
        </li>
        <li>
          {props.about}
        </li>
        <li>
          {props.contactMe}
        </li>
      </ul>
    </nav>
  ); 
}

function Layout(props) {
  return (
    <div className="layout">
      {props.children}
    </div>
  );
}

function SideBar(props)
{
  <div className='side'>
    <ul className='side-links'>
        <li>
          {props.email}
        </li>
        <li>
          {props.info}
        </li>
      </ul>
  </div>
}

function AuthPage() {
  const [ isUserLoggedIn, setUserLoggedIn ] = useState(false);
  const [ showLogin, setShowLogin ] = useState(true);

  return (
    <div className="app">
      {
        isUserLoggedIn ?
        <>
          <div className="navbar-box">
            <NavBar />
          </div>
          <div className="main-box">
            <SideBar />
            <Layout>
              <h1>Hello world</h1>
            </Layout>
          </div>
        </>
        :
        <>
          {
            showLogin ?
            <Login setLoginUser={setUserLoggedIn} />
            :
            <Signup/>
          }
          <button onClick={() => setShowLogin(!showLogin) }>Toggle Login</button>
        </>
      }
    </div>
  );
}


function App() {
  
  return (
    <>
      
      <AuthPage/>
    </> 
    
  );
}


export default App