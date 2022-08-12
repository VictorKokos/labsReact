import s from "./Comments.module.css"
import ellipse from '../../../../Source/Ellipse.png'
import pen from '../../../../Source/Pen.png'
import trash from '../../../../Source/trash.png'
import i from '../../../../Source/i.png'
import plus from '../../../../Source/plus.png'
import { useState } from "react"

let СommentsInfo = (props) =>
{
    

    return(
        
<div>
Пользователь: {props.username} <br />
      Email:  {props.email}<br />
      Дата изменения: {String(props.changeDate.getDate())}.
      { String(props.changeDate.getMonth() + 1)}.
      { String(props.changeDate.getFullYear())} {String(props.changeDate.getHours())}:
      { String(props.changeDate.getMinutes())}:
      { String(props.changeDate.getSeconds())} 

</div>
    )
}
let СommentsEdit = (props) =>
{
    let onCommentChange = () =>
    {
    let changeInf =
    {
        index:props.index,
    }
    props.changeComment(changeInf)
    }

    return(
<div>
Пользователь: {props.username} <br />
      Email:  {props.email}<br />
      Дата изменения:  
      {String(props.changeDate.getDate())}.
      { String(props.changeDate.getMonth() + 1)}.
      { String(props.changeDate.getFullYear())} {String(props.changeDate.getHours())}:
      { String(props.changeDate.getMinutes())}:
      { String(props.changeDate.getSeconds())} 
<input type="text" name="changeComment"
 value={props.Laba8.inputs.changeComment} 
 onChange={props.onChangeTextInput} /> <button onClick={onCommentChange}>готово</button>

</div>
    )
}
let СommentsDel = (props) =>
{
    let onCommentDel = () =>
    {
    let changeInf =
    {
        index:props.index,
    }
    props.deleteComment(changeInf)
    }
    return(
<div> 
    Введите в текстовое поле следующий текст: 
    <br />
    {props.Laba8.deleteConfirmCode}
    <input type= "text" value={props.Laba8.inputs.deleteComment} name="deleteComment" onChange={props.onChangeTextInput}/>
    <button onClick={onCommentDel}>Удалить</button>
</div>
    )
}



let AvatarChoose = (props) =>
{
    let onPicClick = (e) =>
    {
      
        let changeInf =
        {
            id:e.target.id
        }
        props.showInputs(changeInf)
    }
    return (
        <div>
 {props.Laba8.inputs.isAvatarInputActive ? 
 
 <div className={s.avatarChange}>

<ul>
    <li id="ocean" onClick={onPicClick}>ocean</li>
    <li id="space" onClick={onPicClick}>space</li>
    <li id="tiger" onClick={onPicClick}>tiger</li>
</ul>
    {props.Laba8.prevImg ? <img className={s.prevImg} id= "prevImg" onClick={onPicClick} src={props.Laba8.prevImg}/> : null}
 </div> : null}

        </div>
    )
}

let CommentsList = (props) =>
{
    
    let [showInf, setShowInf] = useState({id: "", index: undefined, letShow:false});
    
    let letEdit = (e, index) =>
    {
        let changeInf =
        {
            id:e.target.id,
            index:index
        }
        props.showInputs(changeInf)
    }
    let letDelete = (e, index) =>
    {
        let changeInf =
        {
            id:e.target.id,
            index:index,
        }
        props.showInputs(changeInf)
    }
    return(
        <div className={s.commentsList}>
            {props.Laba8.messages.map((comment, index)=> {
                return (
                <div className={s.commentWrapper}> 
                <div className={s.commentUsername}> Автор: {comment.username} </div>
                <div className={s.commentText}> {comment.text} </div>

                <img id="inf" index={index}  src={i} onClick ={() => setShowInf({id:"inf", index: index, letShow:!showInf.letShow})} />
                <img id="change"  src={pen} onClick={(e) => {setShowInf({id:"change", index: index, letShow:!showInf.letShow}); letEdit(e, index)}} />
                <img id="delete"  src={trash} onClick={(e) => {setShowInf({id:"delete", index: index, letShow:!showInf.letShow}); letDelete(e, index)}} />
                    {showInf.id== "inf" && index == showInf.index && showInf.letShow  ? 
                    <СommentsInfo index={index} Laba8 = {props.Laba8} username={comment.username}
                     email={comment.email} changeDate = {comment.changeDate}  /> : null }

                    {showInf.id== "change" && index == showInf.index && showInf.letShow  ?
                     <СommentsEdit changeDate = {comment.changeDate} email={comment.email} username={comment.username} changeComment={props.changeComment} onChangeTextInput={props.onChangeTextInput} index={index} Laba8 = {props.Laba8} /> : null}

                    {showInf.id== "delete" && index == showInf.index && showInf.letShow  ?
                     <СommentsDel onChangeTextInput={props.onChangeTextInput} deleteComment={props.deleteComment} index={index} Laba8 = {props.Laba8}/> : null}


                </div>)})}
        </div>
    )

}




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

   let onChangeTextInput = (e) =>
   {
   
    
    let changeInf = 
    {
        text: e.target.value,
        id:e.target.name
    }
props.changeTextInput(changeInf)
   }
    return(
        <div className={s.Comments}>
            <div className={s.commentCreator}>
        <button className={s.ellipse} ><img onClick={onChangeClick} 
         id="avatar" src={props.Laba8.avatar ? props.Laba8.avatar : ellipse } /></button>
       <div className={s.nameText}> Имя</div><div className={s.name} onClick={onChangeClick}  id="name"> {props.Laba8.username}
            {props.Laba8.inputs.isNameInputActive ?<div className={s.inline}> 
             <input type="text" value={props.Laba8.username} name="nameInput"
              onChange={onChangeTextInput} className={s.nameInput}></input><button id="name" >Подтвердить</button></div>:null}</div>
       <div className={s.emailText}> Email</div> <div className={s.email} onClick={onChangeClick}  id="email">{props.Laba8.email}
        {props.Laba8.inputs.isEmailInputActive ? <div className={s.inline}> 
        <input type="email" value={props.Laba8.email} name="emailInput"
          onChange={onChangeTextInput} className={s.emailInput}></input><button id="email" >Подтвердить</button></div>:null}</div>
        <div className={s.plus}><img src={plus} onClick={onChangeClick}  id="plus" /></div>
        <AvatarChoose showInputs={props.showInputs} Laba8 = {props.Laba8} />
       
        </div>
        
        {props.Laba8.inputs.isPlusActive ? <div className={s.newMessage}><textarea name="comment"
         value={props.Laba8.currentComment} onChange={onChangeTextInput} className={s.textarea}></textarea> 
         <button onClick={onChangeClick} id="confirm" className={s.confirm}>Отправить</button></div>:null}
         <CommentsList deleteComment = {props.deleteComment} changeComment={props.changeComment} onChangeTextInput={onChangeTextInput} showInputs = {props.showInputs} Laba8 = {props.Laba8} />
        </div>
    )
}
export default Comments