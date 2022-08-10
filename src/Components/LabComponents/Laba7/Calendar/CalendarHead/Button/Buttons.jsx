import s from './Buttons.module.css'


const Buttons = (props) =>
{
    let handlePrevButtonClick = () =>
    {
       
        const date  = new Date( props.Laba4.selectedDate
            .getFullYear(), props.Laba4.selectedDate.getMonth() -1 )
        props.setMonth(date)

    }
    let handleNextButtonClick = () =>
    {

        const date  = new Date( props.Laba4.selectedDate
            .getFullYear(), props.Laba4.selectedDate.getMonth() +1 )
        props.setMonth(date)
       
        
    }
    return (
        <div className={s.Buttons}>
           <button onClick={handlePrevButtonClick}>Prev</button>
           <button onClick={handleNextButtonClick}>Next</button>
        </div>
    )
}
export default Buttons