import React, { Component } from 'react';
import moment from 'moment';
import './calender.css';

const week = moment.weekdaysShort();
let divv;

class Calender extends Component {

    state={
        dateContext: moment(),
        today: moment(),
        clickstate: false


    }



    weekdaysShort = moment.weekdaysShort();
    

    year = () =>{
        return this.state.dateContext.format('Y');
    }
    month = () =>{
        return this.state.dateContext.format('MMMM');
    }
    daysInMonth = () =>{
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () =>{
        return this.state.dateContext.get('date');
    }
    currentDay = () =>{
        return this.state.dateContext.format('D');
    }




    firstDayofMonth = () => {
        let dateContext = this.state.dateContext;
        
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }




    onMorningClick = (e, day) =>{
        alert("You Clicked Morning Slot On "+ day);
        if(this.state.clickstate ==true){
           
            this.setState({clickstate:false})

            console.log(this.state.clickstate)
            divv = <div className="square"></div>
           
            // return(<div className="weekday"><div className="square2"></div></div>)
            
        }
        else{
            
            
            this.setState({clickstate:true})
            console.log(this.state.clickstate)
            return(<div key={day}className="square2"></div>)
            
        }
    }
    


    onEveningClick = (e, day) =>{
        alert("You Clicked Evening Slot On "+ day);

    }

    
    changestate = (day) => {
        let stat = this.state.clickstate;
        if(stat === false){
            
        }
        else{
            this.setState({clickstate:false}) 
        }
    }

    render() { 

        
        const checckstate = this.state.clickstate;
        
        

        if(checckstate==true){
            divv = <div className="square2"></div>
        }
        if(checckstate==false){
            divv = <div className="square"></div>
        }
      
        const weekdayMarkup = week.map(day => {
        
            return(
               
                <div key={day}>{day}</div>
                
            )
        });

      
        
        

        let slots = [];
        let slots2 = [];
        let n7days = [];

        for(let i = 1; i<=7; i++){
            let next7= moment().add(i,'days').format('DD-MMMM')
            n7days.push(<div key={i} className="divspace">
            <div >{next7}</div>
        
            </div>)

            slots.push(<div key={i} className="divspace2">
            <div onClick={(e) =>{this.onMorningClick(e,next7)}} >{divv}</div> 
            
            </div>)

            slots2.push(<div key={i} className="divspace2">
            <div onClick={(e) =>{this.onEveningClick(e,next7)}} >{divv}</div>
            </div>)
            
            console.log("Today Is : ", next7)

        }
        


        return (
            <React.Fragment>
          
          <div className="weekday">{n7days}</div>
          <div className="weekday">{slots}</div>
          

          <br/>
         <div className="weekday">{slots2}</div>



      
          
          </React.Fragment>


         );
    }
}

function RedButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function GreyButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
 
export default Calender;