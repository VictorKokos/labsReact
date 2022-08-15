import {connect} from 'react-redux'
import {SearchFill} from '../../../../Redux/Laba9_10Reducer'
import Search from './Search'
let mapStateToProps = (state) =>
{
    return{
        Laba10:state.Laba9
    }
}

let SearchContainer = connect(mapStateToProps, {SearchFill}) (Search)
export default SearchContainer