import { connect } from "react-redux/es/exports";
import Notes from "./Notes"
import {changeNoteInput, createNote, deleteNote} from '../../../../Redux/Laba6Reducer'
let mapStateToProps = (state) =>
{
    return {
        Notes : state.Laba6.Notes
    }
}

let NotesContainer = connect(mapStateToProps, {changeNoteInput, createNote, deleteNote}) (Notes)
export default NotesContainer