import {Routes, Route} from 'react-router-dom'
import s from './LabComponents.module.css'
import Laba4Container from './Laba4/Laba4Container'

let LabComponents = () =>
{
    return(
        <div className={s.labComponents}>
    <div className={s.border}>
    <div className={s.inside}>
<Routes>
<Route path='/Laba4' element={<Laba4Container />}/>

</Routes>
</div>
</div>
        </div>
    )
}
export default LabComponents