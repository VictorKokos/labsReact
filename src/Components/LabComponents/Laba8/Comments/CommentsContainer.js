import Comments from "./Comments";
import {connect} from 'react-redux'
import {showInputs} from '../../../../Redux/Laba8Reducer'
let mapStateToProps = (state) =>
{
    return{
        Laba8:state.Laba8
    }
}

let CommentsContainer = connect(mapStateToProps, {showInputs}) (Comments)
export default CommentsContainer