import { createReducer, createAction} from '@reduxjs/toolkit';

export const changeInputText = createAction("Laba6ChangeInputText",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const showTable = createAction("Laba6ShowTable")

export const changeBirthDay = createAction("Laba6ChangeBirthday",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const changeBirthMonth = createAction("Laba6changeBirthMonth",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const changeBirthYear = createAction("Laba6SchangeBirthYear",
(changeInf) => {return {payload:{changeInf :changeInf}}})


export const calculateData = createAction("Laba6calculateData",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeNoteInput = createAction("Laba6changeNoteInput",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const createNote = createAction("Laba6createNote")

export const deleteNote = createAction("Laba6deleteNote",
(changeInf) => {return {payload:{changeInf :changeInf}}})

let initialState = { 
   studentInfo:
   {
    firstName:'',
    lastName:'',
    patronymic:'',
    birthday:{
        birthDay:'',
        birthYear:'',
        birthMonth:'',
    },
    entrance:'',
    faculty:'',
    group:'',
    speciality:'',
    email:'',
    phoneNumber:''
   },
   studentInfoHandler:
   {
    currentAge:'',
    course:'',
    emailOperator:'',
    phoneOperator:''
   },
   showTable:false,
   Notes :
   {
        header:'',
        date:'',
        text:'',
        NotesArray: [],
        unwantedNotesArray:[]
   }
}


let Laba6Reducer = createReducer(
initialState,
{
    [changeBirthDay] : (state, action) =>
    {
        state.studentInfo.birthday.birthDay = action.payload.changeInf
    },
    [changeBirthMonth] : (state, action) =>
    {
        state.studentInfo.birthday.birthMonth  = action.payload.changeInf
    },
    [changeBirthYear] : (state, action) =>
    {
        state.studentInfo.birthday.birthYear = action.payload.changeInf
    },
  [changeInputText] : (state, action) =>
    {
        
        switch(action.payload.changeInf.name)
        {
            case "firstName" : 
            {
                state.studentInfo.firstName = action.payload.changeInf.text;
                break;
            }
            case "lastName" : 
            {
                state.studentInfo.lastName = action.payload.changeInf.text;
                break;
            }
            case "patronymic" : 
            {
                state.studentInfo.patronymic = action.payload.changeInf.text;
                break;
            }
            case "birthday" : 
            {
                state.studentInfo.birthday = action.payload.changeInf.text;
                break;
            }
            case "entrance" : 
            {
                state.studentInfo.entrance = action.payload.changeInf.text;
                break;
            }
            case "faculty" : 
            {
                state.studentInfo.faculty = action.payload.changeInf.text;
                break;
            }
            case "group" : 
            {
                state.studentInfo.group = action.payload.changeInf.text;
                break;
            }
            case "speciality" : 
            {
                state.studentInfo.speciality = action.payload.changeInf.text;
                break;
            }
            case "email" : 
            {
                state.studentInfo.email = action.payload.changeInf.text;
                break;
            }
            case "phoneNumber" : 
            {
                state.studentInfo.phoneNumber = action.payload.changeInf.text;
                break;
            }
        }
    },
    [showTable] : (state) =>
    {
        
        state.showTable = !state.showTable
    },
    [calculateData] : (state, action) =>
    {
        state.studentInfoHandler.currentAge = action.payload.changeInf.currentAge
        state.studentInfoHandler.course = action.payload.changeInf.course
        let mail = state.studentInfo.email;
        let num =state.studentInfo.phoneNumber;
        
        let mass = mail.split('@')
        state.studentInfoHandler.emailOperator = mass[1]

       if(num.indexOf("+37529") !==-1)
       {
        if (num[6] == '1' || num[6] == '3' || num[6] == '6'|| num[6] == '9')
        { state.studentInfoHandler.phoneOperator = "A1" }
        else if (num[6] == '2' || num[6] == '5' || num[6] == '7'|| num[6] == '8')
        { state.studentInfoHandler.phoneOperator = "МТС" }
       }
       if(num.indexOf("8029") !==-1)
       {
        if (num[4] == '1' || num[4] == '3' || num[4] == '6'|| num[4] == '9')
        { state.studentInfoHandler.phoneOperator = "A1 (velcom)" }
        else if (num[4] == '2' || num[4] == '5' || num[4] == '7'|| num[4] == '8')
        { state.studentInfoHandler.phoneOperator = "МТС" }
       }
       if(num.indexOf("+37544") !==-1 || num.indexOf("8044") !==-1)
       {
        { state.studentInfoHandler.phoneOperator = "A1 (velcom)" }
       }
       if(num.indexOf("+37533") !==-1 || num.indexOf("8033") !==-1)
       {
        { state.studentInfoHandler.phoneOperator = "МТС" }
       }
       if(num.indexOf("+37525") !==-1 || num.indexOf("8025") !==-1)
       {
        { state.studentInfoHandler.phoneOperator = "Life:)" }
       }
       if(num.indexOf("+37517") !==-1 || num.indexOf("8017") !==-1)
       {
        { state.studentInfoHandler.phoneOperator = "Белтелеком(городской)" }
       }
    },
    [changeNoteInput] : (state, action) =>
    {
        switch(action.payload.changeInf.name)
        {
            case "header" : 
            {
                state.Notes.header = action.payload.changeInf.text;
                break;
            }
            case "date" : 
            {
                state.Notes.date = action.payload.changeInf.text;
                break;
            }
            case "text" : 
            {
                state.Notes.text = action.payload.changeInf.text;
                break;
            }
            default:
                {
                    break;
                }
        }
    },
    [createNote] : (state) =>
    {
        let newNote = 
        {
            header:state.Notes.header,
            date:state.Notes.date,
            text:state.Notes.text
        }
        if(state.Notes.NotesArray.length === 7)
        {
            state.Notes.unwantedNotesArray.push(newNote)
        }
        else
        {
            state.Notes.NotesArray.push(newNote)
        }
        state.Notes.header = '';
        state.Notes.date = '';
        state.Notes.text = '';
    },
    [deleteNote] : (state, action) =>
    {
        switch (action.payload.changeInf)
        {
            case 'first':
                {
                     state.Notes.NotesArray.shift()
                   if( state.Notes.unwantedNotesArray.length)
                   {
                    state.Notes.NotesArray.push(state.Notes.unwantedNotesArray[0])
                    state.Notes.unwantedNotesArray.shift()
                   }
                    break;
                }
            case 'last':
                {
                    if( !state.Notes.unwantedNotesArray.length)
                    {state.Notes.NotesArray.pop()}
                    else{{state.Notes.unwantedNotesArray.pop()}}
                    
                        
                        break;
                }
            default: 
            {
                break;
            }
            
        }
    }
    
}
)

export default Laba6Reducer;