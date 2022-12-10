import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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

function App() {
  
  return (
    <>
      <NavBar
      home="Home"
      about="About"
      contactMe="Contact Me"/>
      <SideBar
      email="mission@gmail.com"
      info="Hello world"/>
    </> 
  );
}


export default App