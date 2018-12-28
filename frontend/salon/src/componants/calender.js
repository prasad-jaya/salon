import React, { Component } from 'react';
import moment from 'moment';
import './calender.css';
import Profile from './Profile';
import { Route } from "react-router-dom";



let divv1,divv2,divv3,divv4,divv5,divv6,divv7;
let divvEV1,divvEV2,divvEV3,divvEV4,divvEV5,divvEV6,divvEV7;
let time = 6;



class Calender extends Component {

    constructor(props){
        super(props)
    this.state={
        dateContext: moment(),
        today: moment(),
        clickstate: false,
        clickstate1: false,
        clickstate2: false,
        clickstate3: false,
        clickstate4: false,
        clickstate5: false,
        clickstate6: false,
        clickstate7: false,

        clickstateEvning1: false,
        clickstateEvning2: false,
        clickstateEvning3: false,
        clickstateEvning4: false,
        clickstateEvning5: false,
        clickstateEvning6: false,
        clickstateEvning7: false,

        Datacollection : [],
        TimeSlot : []
        
        
    }

    this.senddate = this.senddate.bind(this)
}



    weekdaysShort = moment.weekdaysShort();
    
//Morning Time Slot Handle Fuction
    onMorningClick = (e, day,id) =>{
        alert("You Clicked Morning Slot On "+ day);
       
       

            if(this.state.clickstate1 === false && id===1 ){
                this.setState({clickstate1:true})
               
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})


            } 
            if(this.state.clickstate1 === true && id===1 ){
                this.setState({clickstate1:false}) 
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
                }




            if(this.state.clickstate2 === false && id===2){
                this.setState({clickstate2:true}) 
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
               
            } 
            if(this.state.clickstate2 === true && id===2){
                this.setState({clickstate2:false})  
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
                }

            


            if(this.state.clickstate3 === false && id===3){
                this.setState({clickstate3:true}) 
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
            } 

            if(this.state.clickstate3 === true && id===3){
                this.setState({clickstate3:false}) 
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
            }
            




            if(this.state.clickstate4 === false && id===4){
                this.setState({clickstate4:true}) 
               var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
               
            } 
            if(this.state.clickstate4 === true && id===4){
                this.setState({clickstate4:false})
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
            }




            
            if(this.state.clickstate5 === false && id===5){
                this.setState({clickstate5:true}) 
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
               
            } 
            if(this.state.clickstate5 === true && id===5){
                this.setState({clickstate5:false}) 
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
            }




            
            if(this.state.clickstate6 === false && id===6){
                this.setState({clickstate6:true}) 
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
               
            } 
            if(this.state.clickstate6 === true && id===6){
                this.setState({clickstate6:false})
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
            }




            
            if(this.state.clickstate7 === false && id===7){
                this.setState({clickstate7:true}) 
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Morning");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
               
            } 
            if(this.state.clickstate7 === true && id===7){
                this.setState({clickstate7:false}) 
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Morning" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
            }
           
            


           

            console.log(this.state.clickstate)
            //divv = <div className="square"></div>
           
            // return(<div className="weekday"><div className="square2"></div></div>)
            
        
      
            
            
            this.setState({clickstate:true})
            console.log(this.state.clickstate)

            let senddate = this.senddate
            setTimeout(function(){
                senddate()
            },2000)

            return(<div key={day}></div>)
            
       
    }
    

//Evening Time Slot Handle Fuction
    onEveningClick = (e, day,id) =>{
        // alert("You Clicked Evening Slot On "+ day);
        
        if(this.state.clickstateEvning1 === false && id===1){
            this.setState({clickstateEvning1:true}) 
            var newArray = this.state.Datacollection.slice();
            var newArray2 = this.state.TimeSlot.slice();
            newArray.push(day);
            newArray2.push("Evening");     
            this.setState({Datacollection:newArray})
            this.setState({TimeSlot:newArray2})
            
        } 
        if(this.state.clickstateEvning1 === true && id===1){
            this.setState({clickstateEvning1:false}) 
            var array = [...this.state.Datacollection];
            var array2 = [...this.state.TimeSlot];
            var index = array.indexOf(day)
            var index2 = array.indexOf( "Evening" )
            array.splice(index, 1);
            array2.splice(index2, 1);
            this.setState({Datacollection: array});
            this.setState({TimeSlot: array2});
            }




        if(this.state.clickstateEvning2 === false && id===2){
            this.setState({clickstateEvning2:true}) 
            var newArray = this.state.Datacollection.slice();
            var newArray2 = this.state.TimeSlot.slice();
            newArray.push(day);
            newArray2.push("Evening");     
            this.setState({Datacollection:newArray})
            this.setState({TimeSlot:newArray2})
                
            } 
        if(this.state.clickstateEvning2 === true && id===2){
            this.setState({clickstateEvning2:false})  
            var array = [...this.state.Datacollection];
            var array2 = [...this.state.TimeSlot];
            var index = array.indexOf(day)
            var index2 = array.indexOf( "Evening" )
            array.splice(index, 1);
            array2.splice(index2, 1);
            this.setState({Datacollection: array});
            this.setState({TimeSlot: array2});
            }



        if(this.state.clickstateEvning3 === false && id===3){
            this.setState({clickstateEvning3:true})
            var newArray = this.state.Datacollection.slice();
            var newArray2 = this.state.TimeSlot.slice();
            newArray.push(day);
            newArray2.push("Evening");     
            this.setState({Datacollection:newArray})
            this.setState({TimeSlot:newArray2})
                    
            } 
        if(this.state.clickstateEvning3 === true && id===3){
            this.setState({clickstateEvning3:false})
            var array = [...this.state.Datacollection];
            var array2 = [...this.state.TimeSlot];
            var index = array.indexOf(day)
            var index2 = array.indexOf( "Evening" )
            array.splice(index, 1);
            array2.splice(index2, 1);
            this.setState({Datacollection: array});
            this.setState({TimeSlot: array2});  
            }




            if(this.state.clickstateEvning4 === false && id===4){
                this.setState({clickstateEvning4:true}) 
                var newArray = this.state.Datacollection.slice();
            var newArray2 = this.state.TimeSlot.slice();
            newArray.push(day);
            newArray2.push("Evening");     
            this.setState({Datacollection:newArray})
            this.setState({TimeSlot:newArray2})
                        
                } 
            if(this.state.clickstateEvning4 === true && id===4){
                this.setState({clickstateEvning4:false}) 
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Evening" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});  
            }



            if(this.state.clickstateEvning5 === false && id===5){
                this.setState({clickstateEvning5:true}) 
                var newArray = this.state.Datacollection.slice();
                var newArray2 = this.state.TimeSlot.slice();
                newArray.push(day);
                newArray2.push("Evening");     
                this.setState({Datacollection:newArray})
                this.setState({TimeSlot:newArray2})
                } 
            if(this.state.clickstateEvning5 === true && id===5){
                this.setState({clickstateEvning5:false}) 
                var array = [...this.state.Datacollection];
                var array2 = [...this.state.TimeSlot];
                var index = array.indexOf(day)
                var index2 = array.indexOf( "Evening" )
                array.splice(index, 1);
                array2.splice(index2, 1);
                this.setState({Datacollection: array});
                this.setState({TimeSlot: array2});
                }



        if(this.state.clickstateEvning6 === false && id===6){
            this.setState({clickstateEvning6:true})
            var newArray = this.state.Datacollection.slice();
            var newArray2 = this.state.TimeSlot.slice();
            newArray.push(day);
            newArray2.push("Evening");     
            this.setState({Datacollection:newArray})
            this.setState({TimeSlot:newArray2})
                                
            } 
        if(this.state.clickstateEvning6 === true && id===6){
            this.setState({clickstateEvning6:false})  
            var array = [...this.state.Datacollection];
            var array2 = [...this.state.TimeSlot];
            var index = array.indexOf(day)
            var index2 = array.indexOf( "Evening" )
            array.splice(index, 1);
            array2.splice(index2, 1);
            this.setState({Datacollection: array});
            this.setState({TimeSlot: array2}); 
            }



        if(this.state.clickstateEvning7 === false && id===7){
            this.setState({clickstateEvning7:true}) 
            var newArray = this.state.Datacollection.slice();
            var newArray2 = this.state.TimeSlot.slice();
            newArray.push(day);
            newArray2.push("Evening");     
            this.setState({Datacollection:newArray})
            this.setState({TimeSlot:newArray2})
                                    
            } 
        if(this.state.clickstateEvning7 === true && id===7){
             this.setState({clickstateEvning7:false}) 
             var array = [...this.state.Datacollection];
             var array2 = [...this.state.TimeSlot];
             var index = array.indexOf(day)
             var index2 = array.indexOf( "Evening" )
             array.splice(index, 1);
             array2.splice(index2, 1);
             this.setState({Datacollection: array});
             this.setState({TimeSlot: array2}); 
            }
    
            let senddate = this.senddate
            setTimeout(function(){
                senddate()
            },2000)
            

    }


    senddate(){
        this.props.getdate(this.state.Datacollection,this.state.TimeSlot);
    }
  
    render() { 

        
       
        const checkstate1 = this.state.clickstate1;
        const checkstate2 = this.state.clickstate2;
        const checkstate3 = this.state.clickstate3;
        const checkstate4 = this.state.clickstate4;
        const checkstate5 = this.state.clickstate5;
        const checkstate6 = this.state.clickstate6;
        const checkstate7 = this.state.clickstate7;


        const checkstateEve1 = this.state.clickstateEvning1;
        const checkstateEve2 = this.state.clickstateEvning2;
        const checkstateEve3 = this.state.clickstateEvning3;
        const checkstateEve4 = this.state.clickstateEvning4;
        const checkstateEve5 = this.state.clickstateEvning5;
        const checkstateEve6 = this.state.clickstateEvning6;
        const checkstateEve7 = this.state.clickstateEvning7;
      
        
        

        if(checkstate1===true){
            divv1 = <div className="square2"></div>
        }
        else{
            divv1 = <div className="square"></div>
        }


        if(checkstate2===true){
            divv2 = <div className="square2"></div>
        }
        else{
            divv2 = <div className="square"></div>
        }



        if(checkstate3===true){
            divv3 = <div className="square2"></div>
        }
        else{
            divv3 = <div className="square"></div>
        }

        if(checkstate4===true){
            divv4 = <div className="square2"></div>
        }
        else{
            divv4 = <div className="square"></div>
        }

        if(checkstate5===true){
            divv5 = <div className="square2"></div>
        }
        else{
            divv5 = <div className="square"></div>
        }


        if(checkstate6===true){
            divv6 = <div className="square2"></div>
        }
        else{
            divv6 = <div className="square"></div>
        }

        if(checkstate7===true){
            divv7 = <div className="square2"></div>
        }
        else{
            divv7 = <div className="square"></div>
        }





        
        if(checkstateEve1===true){
            divvEV1 = <div className="square2"></div>
        }
        else{
            divvEV1 = <div className="square"></div>
        }


        if(checkstateEve2===true){
            divvEV2 = <div className="square2"></div>
        }
        else{
            divvEV2 = <div className="square"></div>
        }


        if(checkstateEve3===true){
            divvEV3 = <div className="square2"></div>
        }
        else{
            divvEV3 = <div className="square"></div>
        }


        
        if(checkstateEve4===true){
            divvEV4 = <div className="square2"></div>
        }
        else{
            divvEV4 = <div className="square"></div>
        }


        if(checkstateEve5===true){
            divvEV5 = <div className="square2"></div>
        }
        else{
            divvEV5 = <div className="square"></div>
        }

        if(checkstateEve6===true){
            divvEV6 = <div className="square2"></div>
        }
        else{
            divvEV6 = <div className="square"></div>
        }

        if(checkstateEve7===true){
            divvEV7 = <div className="square2"></div>
        }
        else{
            divvEV7 = <div className="square"></div>
        }


       
       
       
      
        
        

        
        let slots1 = [];
        let slotsEve1 = [];
        let n7days = [];

        for(let i = 1; i<=7; i++){
            let next7= moment().add(i,'days').format('DD-MMMM')
            let dateformat = moment().add(i,'days').format("YYYY-MM-DD")
            n7days.push(<div key={i} className="col-md-1 Evening">
            <div >{next7}</div>
        
            </div>)
            


            if(i===1){
                slots1.push(<div key={i} className="col-md-1 Evening" id={i}>
                <div onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv1}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV1}</div> 
                </div>)
            }
             

            if(i===2){
                slots1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv2}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV2}</div> 
                </div>)
            }

            if(i===3){
                slots1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv3}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV3}</div> 
                </div>)
            }


            if(i===4){
                slots1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv4}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV4}</div> 
                </div>)
            }

            if(i===5){
                slots1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv5}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV5}</div> 
                </div>)

            }


            
            if(i===6){
                slots1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv6}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV6}</div> 
                </div>)
            }

            if(i===7){
                slots1.push(<div key={i} className="col-md-1 Evening">
                <div  onClick={(e) =>{this.onMorningClick(e,dateformat,i)}} >{divv7}</div> 
                </div>)

                slotsEve1.push(<div key={i} className="col-md-1 Evening">
                <div onClick={(e) =>{this.onEveningClick(e,dateformat,i)}} >{divvEV7}</div> 
                </div>)
            }




        }
        
        console.log("Detailssss",this.state.Datacollection)

        return (
            <React.Fragment>
          <div className="row">
          <div className="col-md-11 offset-md-1"><div className="weekday1">{n7days}</div></div>
          </div>
          <div className="row">         
          <div className="col-md-1 Evening2">Morning</div><div className="col-md-11"><div className="weekday" >{slots1}</div></div>
          </div>
          <div className="row">         
         
         <div className="col-md-1 Evening2">Evening</div><div className="col-md-11"><div className="weekday">{slotsEve1}</div></div>
          

         
          </div>
         
      
          
          </React.Fragment>


         );
    }
}


 
export default Calender;