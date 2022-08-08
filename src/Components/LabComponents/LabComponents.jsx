import {Routes, Route} from 'react-router-dom'
import s from './LabComponents.module.css'
import Laba4 from './Laba4/Laba4'
import Laba5 from './Laba5/Laba5'
import Laba6 from './Laba6/Laba6'

let LabComponents = () =>
{
    return(
        <div className={s.labComponents}>
    <div className={s.border}>
    <div className={s.inside}>
<Routes>
<Route exact path='/Laba4' element={<Laba4 />}/>
<Route exact path='/Laba5' element={<Laba5 />}/>
<Route exact path='/Laba6' element={<Laba6 />}/>
</Routes>
</div>
</div>
        </div>
    )
}
export default LabComponents