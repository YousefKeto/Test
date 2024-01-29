import React , { Component } from 'react';



import Home from './../Home';
import SocialMedia from './../SocialMedia';
import Work from './../Work';
import Profile from './../Profile';
import Protfolio from './../Protfolio';
import About from './../About';
import Footer from './../Footer';


class Index extends Component {
  render(){
    return(
      <div>
        <Home />
        <Work />
        <Protfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    )
  }
}


export default Index;
