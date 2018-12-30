import React, { Component } from 'react';
import './Home.css'
import Footer from '../componants/footer'
import { Link } from "react-router-dom";


class Home extends Component {
    state = {  }

  
    render() { 
        return ( 
            <div>
             <div class="container bk">
            <img src={require('../img/Home.jpg')} id="bg" alt=""></img> 
            <div class="content display-2 font-weight-normal">
                <p>Get it done with a freelancer</p>
                <h5>Grow Your Business Through The Top Freelancer. Hire Talent Stylist.</h5>
                <Link to="/search">
                <button type="button" class="btn btn-outline-light btn-lg"  >Get Started</button>
              
                </Link>
                
            </div>
            <Footer/>
            
            </div> 
           

           
            
            </div>      
         );
    }
}
 
export default Home;