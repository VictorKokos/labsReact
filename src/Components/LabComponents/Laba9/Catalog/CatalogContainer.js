import Catalog from "./Catalog";
import {connect} from 'react-redux'
import {sort, newFirst} from '../../../../Redux/Laba9_10Reducer'
let mapStateToProps = (state) =>
{
    return{
        Laba9:state.Laba9
    }
}

let CatalogContainer = connect(mapStateToProps, {sort, newFirst}) (Catalog)
export default CatalogContainer