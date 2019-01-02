import React, { Component } from 'react';



class Navbar extends Component {
    state = { 
        logstate:'LOG IN'
     }

     componentWillMount(){

        if(localStorage.getItem('UserID')===true){
           
            this.setSate({lostate:'LOG OUT'})
        }
        if(localStorage.getItem('UserID')===false){
            this.setSate({lostate:'LOG IN'})
        }

     }
    render() {
       // console.log("Result wassss :",this.props.authenticate) 
        return (
             
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">S A L O N e</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/loginn">Stylist</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/loginn">Salon</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <span className="navbar-text">
                    <a className="nav-link" href="/loginn">LOG IN</a> 
                        </span>
                        <span className="navbar-text">
                    <a className="nav-link" href="/signupfirst">SIGN UP</a> 
                        </span>
                    
                        </form>
                   
                </div>
</nav>
         );
    }
}
 
export default Navbar;
