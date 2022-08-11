import {Routes, Route} from 'react-router-dom'
import s from './LabComponents.module.css'
import Laba4 from './Laba4/Laba4'
import Laba5 from './Laba5/Laba5'
import Laba6 from './Laba6/Laba6'
import Laba7 from './Laba7/Laba7'
import Laba8 from './Laba8/Laba8'
import Laba9 from './Laba9/Laba9'
import Laba10 from './Laba10/Laba10'

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
<Route exact path='/Laba7' element={<Laba7 />}/>
<Route exact path='/Laba8' element={<Laba8 />}/>
<Route exact path='/Laba9' element={<Laba9 />}/>
<Route exact path='/Laba10' element={<Laba10 />}/>
</Routes>
</div>
</div>
        </div>
    )
}
export default LabComponents