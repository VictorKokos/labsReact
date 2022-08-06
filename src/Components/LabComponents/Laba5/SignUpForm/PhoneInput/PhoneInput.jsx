import s from './PhoneInput.module.css'

let PhoneInput = (props) =>
{

    let onNumberChange = (e) =>
{
    let changeInf = {
        name:e.target.name, 
        value: e.target.value
    }
  
    props.changeNumber(changeInf)
}
    return(
        <div>
            <select name="select" onChange ={onNumberChange}>
            <option value='Выберите код'>Выберите страну</option>
                <option value='+375'>Беларусь</option>
                <option value='+7'>Россия</option>
                <option value='+380'>Украина</option>
                <option value='+48'>Польша</option>
                <option value='+370'>Литва</option>
                <option value='+371'>Латвия</option>
            </select>
            {props.Laba5.phoneInput.isCodeConfirmed 
            ? <input type="text" name="phoneInput"
             value={props.Laba5.phoneInput.currentInputNumber} onChange={onNumberChange} /> 
            : <input type="text" name="phoneCodeInput"
             value={props.Laba5.phoneInput.currentInputNumber} onChange={onNumberChange} /> }

                {(props.Laba5.operators) ? props.Laba5.operators.map(
                    (oper)=>{return (<div className={s.radio}> <input  type="radio" name="oper"/>{oper}</div> )} ) 
                    : <div> </div> }

        </div>
    )
}
export default PhoneInput