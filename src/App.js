import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';


import NavBar from './components/NavBar';
import Footer from './components/Footer';

//react-router

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './components/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';


const App = () => {

  

  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      <Footer />
      </Router>

   
  </>  
  );
}

export default App;
