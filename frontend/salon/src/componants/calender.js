import React, { Component } from 'react';
import moment from 'moment';

class Calender extends Component {

    state={
        dateContext: moment(),
        today: moment()

    }

    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

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

    render() { 
        let weekdays = this.weekdaysShort.map((day) =>{
            return(
               
                <td key={day}>{day}</td>
                
            )
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr></tr>
                        </thead>
                        <tbody>
                            <td>{"Helloooo" +weekdays}</td>
                        </tbody>
                
                </table>


            </div> 



         );
    }
}
 
export default Calender;