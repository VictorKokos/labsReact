import CalendarBody from "./CalendarBody/CalendarBody"
import CalendarHead from "./CalendarHead/CalendarHead"
import s from "./Calendar.module.css"

const Calendar = (props) =>
{
    
    return(
        <div className={s.Calendar}>
<CalendarHead setMonth ={props.setMonth} Laba4={props.Laba4}/>
<CalendarBody setSelectedDay ={props.setSelectedDay} setMonth={props.setMonth} Laba4={props.Laba4}/>
        
        </div>
    )
}
export default Calendar