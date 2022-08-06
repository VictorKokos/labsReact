import s from './SignUpForm.module.css'
import { pushYears, pushMonths, pushDays } from './SelectArrays'
import SignUpEmailInput from './SignUpEmailInput/SignUpEmailInput'
import SignUpPasswordInput from './SignUpPasswordInput/SignUpPasswordInput'
import PhoneInput from './PhoneInput/PhoneInput'


const SignUpForm = (props) =>
{
   let changeTextInput = (e) =>
   {
        let changeInf ={
            name: e.target.name,
            text: e.target.value,
        }
    
        props.changeInputText(changeInf)
        
   } 

   let onButtonClick = (e) =>
   {
    e.preventDefault();
    props.letEnter()
   }

   let onRadioChange = (e) =>
   {
      props.changeGender(e.target.value)
   }
   let onSelectBirthYear = (e) =>
   {
      props.changeBirthYear(e.target.value)
   }
   let onSelectBirthMonth = (e) =>
   {
      props.changeBirthMonth(e.target.value)
   }
   let onSelectBirthDay = (e) =>
   {
      props.changeBirthDay(e.target.value)
   }






   let YearsArray =[];
   let MonthsArray = [];
   let DaysArray = [];
   
   pushYears(YearsArray)
   pushMonths(MonthsArray)
   pushDays(DaysArray)

    return(
        <div>
            <form className={s.form}>
          <div>Имя</div>  <input type="text" name="firstName" onChange={changeTextInput} value={props.Laba5.firstName}/>
          <div>Фамилия</div>  <input type="text" name="lastName" onChange={changeTextInput}  value={props.Laba5.lastName}/>
          <div>Отчество</div>  <input type="text" name="patronymic" onChange={changeTextInput}  value={props.Laba5.patronymic}/>
          <div>Пол</div>  <div>Мужской<input onChange={onRadioChange} type="radio" name="gender" value="male"/>Женский
          <input onChange={onRadioChange} type="radio" name="gender" value="female"/></div>
          <div>Дата рождения</div>
          <div>Год<select onChange={onSelectBirthYear}> 
          {YearsArray.map((year) => {return(<option value={year} >{year}</option>)} )}
          </select>Месяц<select onChange={onSelectBirthMonth} > 
          {MonthsArray.map((month) => {return(<option value={month} >{month}</option>)} )}
          </select>День<select onChange={onSelectBirthDay}>
         {DaysArray.map((day) => {return(<option value={day} >{day}</option >)} )}</select></div>
          <div>Адрес Эл. почты</div>  <SignUpEmailInput Laba5={props.Laba5} changeTextInput={changeTextInput}/>
        <SignUpPasswordInput Laba5={props.Laba5} changeTextInput={changeTextInput} />
          <div>Номер телефона</div>  <PhoneInput changeNumber = {props.changeNumber} Laba5 = {props.Laba5} />
          <button onClick = {onButtonClick} className={s.button}>Отправить</button>
          {(props.Laba5.letEnter===undefined) ? 
          <div></div>
          : props.Laba5.letEnter ? 
          <div className={s.success}>Вы успешно зарегистрировались!</div> 
          : <div className={s.fail}>Данные введены неверно!</div>}
            </form>
        </div>
    )
}
export default SignUpForm