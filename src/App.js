import LabChoiceContainer from './Components/LabChoice/LabChoiceContainer'
import TitleContainer from './Components/Title/TitleContainer'
import LabComponents from './Components/LabComponents/LabComponents'
import s from './App.module.css'


let App = () =>
{
  return(
<div className={s.app}>
<TitleContainer/>
<LabChoiceContainer/>
<LabComponents/>

</div>
  )
  
}

export default App;
