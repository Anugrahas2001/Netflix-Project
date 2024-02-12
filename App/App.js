/*eslint-disable*/
import React from 'react'
import {BrowserRouter as Router,Route, Routes,Link } from 'react-router-dom';
import './App.css'
import Home from './Home/Home'
import NetflixShow from './NetflixShow';
import SignNet from './SignNet/SignNet';
function App() {
  return (
    <div>
      
      <Router>
      
       <Link to='/'></Link>
       <Link to='/netflix-show'></Link>
       <Link to='/sign-in'></Link>

        <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/sign-in" exact Component={SignNet}/>
        <Route path="/netflix-show" exact Component={NetflixShow}/>
        </Routes>
        
      </Router>

      
    </div>
  )
}

export default App
