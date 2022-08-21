import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './styles/app.css';

import Header from './header';
import Footer from './footer';
import Home from './home';
import Earthday from './earthday';
import Events from './events';
import County from './county';
import Pledge from './pledge';
import Success from './success';




const page_00 = () => (
  <Home /> 
  )

const page_01 = () => (
  <Earthday /> 
  )

const page_02 = () => (
  <Events />
  )

const page_03 = () => (
  <County />
  )






class App extends Component {

 state = {
  loading: true
};

componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }
  
  render() {
   const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
  }

  return (
    <div className="App">
    <Router>
    <div>
    <Header />

    <Route exact path="/" component={page_00}/>
    <Route path="/earthday" component={page_01}/>
    <Route path="/events" component={page_02}/>
    <Route path="/county" component={page_03}/>
    <Route path="/pledge" component= {Pledge}/>
    <Route path="/success" component={Success}/>
    <Footer />
    </div>
    </Router>
    </div>
    )
}
}

export default App
