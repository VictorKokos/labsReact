import s from "./Title.module.css"
import alerting from '../../Source/alert.png'

let Title = () =>
{
    return(
        <div className={s.title}>
        <div className={s.topTitle}>React.js</div>
      <div className={s.bottomTitle}><img className = {s.alerting}src={alerting} />Недосданные лабы Костюкевича <img className = {s.alerting} src={alerting}/></div>
        </div>
    )
}
export default Title