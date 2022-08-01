import Title from "./Title";
import {connect} from 'react-redux'
let mapStateToProps = (state) =>
{
    return{

    }
}

let TitleContainer = connect(mapStateToProps) (Title)
export default TitleContainer