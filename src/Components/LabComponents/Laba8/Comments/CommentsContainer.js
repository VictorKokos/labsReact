import Comments from "./Comments";
import {connect} from 'react-redux'
import {showInputs, changeTextInput,changeComment, deleteComment} from '../../../../Redux/Laba8Reducer'
let mapStateToProps = (state) =>
{
    return{
        Laba8:state.Laba8
    }
}

let CommentsContainer = connect(mapStateToProps, {showInputs, changeTextInput,changeComment, deleteComment}) (Comments)
export default CommentsContainer