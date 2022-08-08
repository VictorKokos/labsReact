import { connect } from "react-redux/es/exports";
import StudentInfo from "./StudentInfo"
import {changeInputText, showTable,changeBirthDay,changeBirthMonth,changeBirthYear,calculateData} from '../../../../Redux/Laba6Reducer'
let mapStateToProps = (state) =>
{
    return {
        Laba6 : state.Laba6
    }
}

let StudentInfoContainer = connect(mapStateToProps,{changeInputText, showTable, changeBirthDay,changeBirthMonth,changeBirthYear,calculateData}) (StudentInfo)
export default StudentInfoContainer