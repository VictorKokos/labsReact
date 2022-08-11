import s from "./Comments.module.css"
import ellipse from '../../../../Source/Ellipse.png'
import plus from '../../../../Source/plus.png'
let Comments = (props) =>
{
   let onChangeClick = (e) =>
   {
    
    let changeInf = 
    {
        
        id:e.target.id
    }
   
    props.showInputs(changeInf)
   }
    return(
        <div className={s.Comments}>
            <div className={s.commentCreator}>
        <button className={s.ellipse} ><img onClick={onChangeClick}  id="avatar" src={ellipse} /></button>
        <div className={s.name} onClick={onChangeClick}  id="name">
            {props.Laba8.inputs.isNameInputActive ?<div className={s.inline}>  <input type="text" className={s.nameInput}></input><button>Подтвердить</button></div>:null}</div>
        <div className={s.email} onClick={onChangeClick}  id="email">
        {props.Laba8.inputs.isEmailInputActive ? <div className={s.inline}>  <input type="text" className={s.emailInput}></input><button>Подтвердить</button></div>:null}</div>
        <div className={s.plus}><img src={plus} onClick={onChangeClick}  id="plus" /></div>
        {props.Laba8.inputs.isAvatarInputActive ? <div className={s.avatarChange}></div> : null}
        </div>
        {props.Laba8.inputs.isPlusActive ? <div className={s.newMessage}><textarea></textarea> <button>Отправить</button></div>:null}
        
        </div>
    )
}
export default Comments