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
let onDeleteAll = () =>{
    props.deleteAll()
}
let onNoteChange = (e) =>
{

    props.changeNote(e.target.name)
    
}
return (
    <div className={s.Notes}>
        {props.Laba4.doubleClickDay ? <div>
            {props.Laba4.doubleClickDay.getDate()}  "{props.Laba4.doubleClickDay.getMonth()}" {props.Laba4.doubleClickDay.getFullYear()} заметка</div>:null}

       <div>Текст</div>
       <textarea value={props.Notes.text} name={"text"} onChange={onChangeNoteInput} > </textarea>
       <button onClick={onNoteCreate}>создать заметку</button>
       <button onClick={onDeleteAll}>Удалить все заметки этого дня</button>
       { props.Notes.NotesArray.length > 3 ? <div>
        <button onClick={onDelete} name='first'>Удалить первую заметку</button>
         <button onClick={onDelete} name='last'>Удалить последнюю заметку</button>
         </div>
         :null}
         
         
    
        { props.Notes.NotesArray.filter(note=>note.date == props.Laba4.doubleClickDay).map((note, id) => {return ( <div className={s.Note}>
                  
                    
                    <div> {note.text}</div>
                    {props.Notes.NotesArray[id].isChanging ? <button name={id} onClick={onNoteChange}>готово</button>:<button name={id} onClick={onNoteChange}>Изменить</button>}   
                    {props.Notes.NotesArray[id].isChanging ? <input value={props.Notes.NotesArray[id].text} name={id} onChange={onChangeNoteInput} type='text' />:null}

            </div>
       )
       })}
        
     

              </div>
    )
}
export default Notes