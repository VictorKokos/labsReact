import CalendarContainer from './Calendar/CalendarContainer'
import s from './Laba4.module.css'

let Laba4 = () =>
{
    return(
        <div className={s.laba4} >
            <div className={s.title}>
            Laba4
            </div >
           <CalendarContainer />
            </div>
    )
}
export default Laba4