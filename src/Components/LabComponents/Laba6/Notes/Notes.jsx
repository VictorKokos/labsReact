import s from './Notes.module.css'
let Notes = (props) =>
{
   
let onChangeNoteInput = (e) =>
{
    let changeInf ={
        name: e.target.name,
        text: e.target.value,
    }

    props.changeNoteInput(changeInf)
}
let onNoteCreate = (e) =>
{
    e.preventDefault(e)
    props.createNote()
}
let onDelete = (e) =>
{
    let data = e.target.name;
    props.deleteNote(data)
}
return (
    <div className={s.Notes}>
        <div>Заголовок</div>
       <input type="text" value={props.Notes.header} name={"header"} onChange={onChangeNoteInput} />
       <div>Дата</div>
       <input type="date" value={props.Notes.date} name={"date"} onChange={onChangeNoteInput} />
       <textarea value={props.Notes.text} name={"text"} onChange={onChangeNoteInput} > </textarea>
       <button onClick={onNoteCreate}>создать заметку</button>
       {props.Notes.NotesArray.length > 3 ? <div>
        <button onClick={onDelete} name='first'>Удалить первую заметку</button>
         <button onClick={onDelete} name='last'>Удалить последнюю заметку</button>
         </div>
         :null}
       {props.Notes.NotesArray.map((note) => {return ( <div className={s.Note}>
                  
                    <div> {note.header}</div>
                    <div> {note.date}</div>
                    <div> {note.text}</div>


            </div>
       )
       })}
        {props.Notes.unwantedNotesArray.map((note) => {return ( <div className={ s.redNote }>
                  {  <div className={s.warning}>У вас слишком много заметок</div>}
                    <div> {note.header}</div>
                    <div> {note.date}</div>
                    <div> {note.text}</div>


            </div>
       )
       })}
              </div>
    )
}
export default Notes