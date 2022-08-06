import { connect } from "react-redux/es/exports";
import SignUpForm from "./SignUpForm";
import {changeInputText, letEnter, changeGender, changeBirthDay, changeBirthMonth, changeBirthYear, changeNumber} from '../../../../Redux/Laba5Reducer'
let mapStateToProps = (state) =>
{
    return {
        Laba5 : state.Laba5
    }
}

let SignUpFormContainer = connect(mapStateToProps, {changeInputText, letEnter, changeGender, changeBirthDay, changeBirthMonth, changeBirthYear, changeNumber}) (SignUpForm)
export default SignUpFormContainer