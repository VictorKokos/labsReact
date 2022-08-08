import s from './StudentInfo.module.css'
import { pushYears, pushMonths, pushDays } from '../../Laba5/SignUpForm/SelectArrays'
import { useEffect } from 'react';
let StudentInfoHandler = (props) =>
{
    let inf =props.Laba6.studentInfo;
    let handler = props.Laba6.studentInfoHandler
   
    let now = new Date(); 
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
    let birthday = new Date(inf.birthday.birthYear, inf.birthday.birthMonth-1, inf.birthday.birthDay); 
    let dobnow = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    let currentAge; 
    currentAge = today.getFullYear() - birthday.getFullYear();
    if (today < dobnow) {
        currentAge = currentAge-1;
    }
// age - текущий возраст

let entranceDate =  new Date(inf.entrance, 8, 1);
let entranceNow = new Date(today.getFullYear, entranceDate.getMonth, entranceDate.getDay)
let course;
course = today.getFullYear() - entranceDate.getFullYear();
if(today<entranceNow)
{
    course = course-1
}
// cource - курс студента

let infObject =
{
    currentAge:currentAge,
    course:course,
}
useEffect(()=> {props.calculateData(infObject)}, [])



return (
    <div>
        <table className={s.table}>
            <tr className={s.tr}><td className={s.td}>фио</td> <td className={s.td}> {inf.lastName} {inf.firstName} {inf.patronymic} </td></tr>
            <tr className={s.tr}><td className={s.td}>текущий возраст студента</td> <td className={s.td}>{handler.currentAge}</td></tr>
            <tr className={s.tr}><td className={s.td}>факультет, курс, группа</td> <td className={s.td}>{inf.faculty}, {handler.course}, {inf.group}</td></tr>
            <tr className={s.tr}><td className={s.td}>специальность</td> <td className={s.td}>{inf.speciality}</td></tr>
            <tr className={s.tr}><td className={s.td}>электронная почта</td> <td className={s.td}>{inf.email}</td></tr>
            <tr className={s.tr}><td className={s.td}>оператор услуг электронной почты</td> <td className={s.td}>{handler.emailOperator}</td></tr>
            <tr className={s.tr}><td className={s.td}>номер телефона</td> <td className={s.td}>{inf.phoneNumber}</td></tr>
            <tr className={s.tr}><td className={s.td}>оператора услуг мобильной связи</td> <td className={s.td}>{handler.phoneOperator}</td></tr>
        </table>
    </div>
)

}




let StudentInfo = (props) =>
{
    let YearsArray =[];
    let MonthsArray = [];
    let DaysArray = [];
    
    pushYears(YearsArray)
    pushMonths(MonthsArray)
    pushDays(DaysArray)

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
 





    let changeTextInput = (e) =>
    {
         let changeInf ={
             name: e.target.name,
             text: e.target.value,
         }
     
         props.changeInputText(changeInf)
         
    } 
    let showTable = () =>
    {
       
        props.showTable()
    }

    return(
        <div className={s.studentInfo} >
            <div className={s.inputs}>
        <div>Имя</div>    <input type="text" name='firstName' value={props.Laba6.firstName} onChange={changeTextInput}/>
        <div>Фамилия</div>   <input type="text" name='lastName' value={props.Laba6.lastName} onChange={changeTextInput}/>
        <div>Отчество</div>   <input type="text" name='patronymic' value={props.Laba6.patronymic} onChange={changeTextInput}/>
        <div>Дата рождения</div>  <div> <div>Год<select onChange={onSelectBirthYear}> 
          {YearsArray.map((year) => {return(<option value={year} >{year}</option>)} )}
          </select>Месяц<select onChange={onSelectBirthMonth} > 
          {MonthsArray.map((month) => {return(<option value={month} >{month}</option>)} )}
          </select>День<select onChange={onSelectBirthDay}>
         {DaysArray.map((day) => {return(<option value={day} >{day}</option >)} )}</select></div></div>
        <div>год поступления в университет</div>   <input type="text" name='entrance' value={props.Laba6.entrance} onChange={changeTextInput}/>
        <div>факультет</div>   <input type="text" name='faculty' value={props.Laba6.faculty} onChange={changeTextInput}/>
        <div>группа</div>   <input type="text" name='group' value={props.Laba6.group} onChange={changeTextInput}/>
        <div>специальность</div>   <input type="text" name='speciality' value={props.Laba6.speciality} onChange={changeTextInput}/>
        <div>электронная почта</div>   <input type="text" name='email' value={props.Laba6.email} onChange={changeTextInput}/>
        <div>номер телефона</div>   <input type="text" name='phoneNumber' value={props.Laba6.phoneNumber} onChange={changeTextInput}/>
        <div><button onClick={showTable}>Создать табличку</button></div>
            </div>
        {  props.Laba6.showTable ?  <StudentInfoHandler Laba6={props.Laba6} calculateData={props.calculateData} /> : null }
            </div>
    )
}
export default StudentInfo