import React , { Component } from 'react';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';



import Navbar from './component/Navbar';
import Index from './component/index';
import  Portfolio  from './component/Protfolio';
import Contact from './component/Contact';

class App extends Component {
  render(){


    return(

        <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='*' element={<Contact />} />
        </Routes>
        </BrowserRouter>
    )
  }
}


export default App;
