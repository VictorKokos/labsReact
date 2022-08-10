import { connect } from "react-redux";
import {setSelectedDay, setMonth, setDoubleClickDay} from "../../../../Redux/Laba7Reducer"
import {changeNoteInput, createNote, deleteNote, deleteAll, changeNote} from '../../../../Redux/Laba7Reducer'
import Calendar from "../Calendar/Calendar"
import withNotes from './withNotes'
import Notes from '../Notes/Notes'
let mapStateToProps = (state) =>
{
    return{
        Laba4:state.Laba7,
        Notes : state.Laba7.Notes
    }
}
let Scheduler = connect(mapStateToProps, {setSelectedDay, setMonth,
     setDoubleClickDay, changeNoteInput,createNote, deleteNote, deleteAll, changeNote}) (withNotes(Calendar, Notes))
export default Scheduler