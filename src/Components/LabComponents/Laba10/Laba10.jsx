import CheckPropTypesContainer from './CheckPropTypes/CheckPropTypesContainer'
import s from './Laba10.module.css'
import SearchContainer from './Search/SearchContainer'





let Laba10 = () =>
{
    return(
        <div className={s.laba4} >
            <div className={s.title}>
            Laba10
            </div >
         <CheckPropTypesContainer />
         <SearchContainer />
            </div>
    )
}
export default Laba10