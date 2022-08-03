import Buttons from './Button/Buttons'
import s from './CalendarHead.module.css'
import CurrentMonth from './CurrentMonth/CurrentMonth'
import Weekday from './Weekday/Weekday'


const CalendarHead = (props) =>
{
    return(
        <div className={s.CalendarHead}>
            <CurrentMonth Laba4={props.Laba4} setMonth={props.setMonth}/> <Buttons Laba4={props.Laba4} setMonth={props.setMonth}/> <Weekday />
            
            
        </div>
    )
}
export default CalendarHead