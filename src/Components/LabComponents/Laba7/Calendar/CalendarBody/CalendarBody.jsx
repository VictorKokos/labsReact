import s from './CalendarBody.module.css'
import React from 'react'
import * as CalendarFunctions from './CalendarFunctions'
import classNames from 'classnames';


class CalendarBody extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    state = {
        currentDate:new Date,
        selectedDate:null
    }

    handleDayClick = (date) =>
    {
        
        this.setState({selectedDate:date})
            
        this.props.setSelectedDay(date)
    }

     onDoubleClick = (date) =>
    {
        
        this.props.setDoubleClickDay(date)
    }
     
     
 render(){
    let storeDate = this.props.Laba4.selectedDate;
    let {currentDate, selectedDate} = this.state;
   let monthData = CalendarFunctions.getMonthData(storeDate.getFullYear(), storeDate.getMonth() )
    return(
        <div className={s.CalendarBody}>
           
            {monthData.map((week, index) => <tr className={s.week} key={index}>

            {week.map((date, index) => date 
            ?<td 
            key={index} 
             onClick={() => {this.handleDayClick(date)}} 
             onDoubleClick={() => {this.onDoubleClick(date)}}
             className={classNames(
            s.date, {
            [s.today]: CalendarFunctions.areDaysEqual(date, currentDate),
            [s.selected]: CalendarFunctions.areDaysEqual(date, selectedDate),
            [s.note]: this.props.Notes.NotesArray.some(note => note.date == date)
            } )}>{date.getDate()}
            </td> 
            :<td 
            key={index} 
            className={s.dateNotThisMonth}></td> )}

            </tr>)}
          
            
        </div>
    )
            }
}
export default CalendarBody