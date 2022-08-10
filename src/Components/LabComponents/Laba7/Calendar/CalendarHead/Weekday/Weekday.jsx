import s from './Weekday.module.css'


const Weekday = () =>
{
    return (
        <div className={s.Weekday}>
            <div className={s.oneDay}>пн</div>
            <div className={s.oneDay}>вт</div>
            <div className={s.oneDay}>ср</div>
            <div className={s.oneDay}>чт</div>
            <div className={s.oneDay}>пт</div>
            <div className={s.oneDay}>сб</div>
            <div className={s.oneDay}>вс</div>
            
        </div>
    )
}
export default Weekday