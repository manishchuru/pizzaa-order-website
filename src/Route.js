import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Content from './Pages/Content';
import Not from './Pages/Not';
import Shopping from './Pages/Shopping';
import { CartProvider } from 'react-use-cart';

import './Route.css'
const Navroute = () => {
    return (
        <div>
            
            <Router>
            <Navbar/>
        <div className='routefun'>
            <Switch>
            <Route exact path='/contant' component={Content}></Route> 
            <CartProvider>
            <Route exact path='/' component={About}></Route>
            <Route exact path='/shopping' component={Shopping}></Route>
            </CartProvider>
            <Route component={Not}></Route>    
            </Switch>  
            </div>
            </Router>
            
        </div>
    );
}

export default Navroute;
