import SortTable from "./SortTable";
import {connect} from 'react-redux'
import {sort} from '../../../../Redux/Laba9Reducer'
let mapStateToProps = (state) =>
{
    return{
        Laba9:state.Laba9
    }
}

let SortTableContainer = connect(mapStateToProps, {sort}) (SortTable)
export default SortTableContainer