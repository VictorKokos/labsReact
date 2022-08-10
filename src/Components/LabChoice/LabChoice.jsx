import s from "./LabChoice.module.css"
import {NavLink} from 'react-router-dom'

let LabChoice = () =>
{
    return(
        <div className={s.labChoice}>Выберите лабораторную работу
        <NavLink className={s.lab} to="/">Без компонентов</NavLink>
        <NavLink className={s.lab} to="/Laba4">Лабораторная работа 4</NavLink>
        <NavLink className={s.lab} to="/Laba5">Лабораторная работа 5</NavLink>
        <NavLink className={s.lab} to="/Laba6">Лабораторная работа 6</NavLink>
        <NavLink className={s.lab} to="/Laba7">Лабораторная работа 7</NavLink>
        </div>
    )
}
export default LabChoice