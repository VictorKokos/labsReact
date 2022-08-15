import { connect } from "react-redux/es/exports";
import {SomeFunction} from '../../../../Redux/Laba9_10Reducer'
import CheckPropTypes from './CheckPropTypes'
let mapStateToProps = (state) =>
{
    return {
        Laba10 : state.Laba9
    }
}

let CheckPropTypesContainer = connect(mapStateToProps, {SomeFunction}) (CheckPropTypes)
export default CheckPropTypesContainer