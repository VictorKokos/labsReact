import { connect } from "react-redux";
import Calendar from "./Calendar";
import {setSelectedDay, setMonth, } from "../../../../Redux/Laba4Reducer"

let mapStateToProps = (state) =>
{
    return{
        Laba4:state.Laba4
    }
}
let CalendarContainer = connect(mapStateToProps, {setSelectedDay, setMonth, }) (Calendar)
export default CalendarContainer