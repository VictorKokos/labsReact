import { createReducer, createAction} from '@reduxjs/toolkit';

export let setSelectedDay = createAction('Laba7SetSelectedDay',
 (date) => {return{payload:{date:date}}})

 export let setMonth = createAction('Laba7SetMonth',
 (date) => {return{payload:{date:date}}})

 export let setDoubleClickDay = createAction('Laba7setDoubleClickDay',
 (date) => {return{payload:{date:date}}})

 export const changeInputText = createAction("Laba7ChangeInputText",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const showTable = createAction("Laba7ShowTable")

export const changeBirthDay = createAction("Laba7ChangeBirthday",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const changeBirthMonth = createAction("Laba7changeBirthMonth",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const changeBirthYear = createAction("Laba7SchangeBirthYear",
(changeInf) => {return {payload:{changeInf :changeInf}}})


export const calculateData = createAction("Laba7calculateData",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeNoteInput = createAction("Laba7changeNoteInput",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const createNote = createAction("Laba7createNote")

export const deleteNote = createAction("Laba7deleteNote",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeNote = createAction("Laba7changeNote",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const deleteAll = createAction('Laba7deleteAll')


let initialState = { 
    Notes :
    {
         header:'',
         date:'',
         text:'',
         NotesArray: [],
         unwantedNotesArray:[],
         textInputValue:''
    },
    selectedDate: {},
    selectedDay: {},
    currentDay: "",
    monthName:"",
    year:"",
    doubleClickDay:"",
}


let Laba7Reducer = createReducer(
    initialState,
    {
        [setSelectedDay]:(state, action) =>
        {
           
            state.selectedDay = action.payload.date
        },
        [setMonth]:(state,action) =>
        {
            state.selectedDate = action.payload.date
            switch(action.payload.date.getMonth())
            {
                case 0:
                    {
                        state.monthName = "Январь";
                        break;
                    }
                    case 1:
                    {
                        state.monthName = "Февраль";
                        break;
                    }
                    case 2:
                    {
                        state.monthName = "Март";
                        break;
                    }
                    case 3:
                    {
                        state.monthName = "Апрель";
                        break;
                    }
                    case 4:
                    {
                        state.monthName = "Май";
                        break;
                    }
                    case 5:
                    {
                        state.monthName = "Июнь";
                        break;
                    }
                    case 6:
                    {
                        state.monthName = "Июль";
                        break;
                    }
                    case 7:
                    {
                        state.monthName = "Август";
                        break;
                    }
                    case 8:
                    {
                        state.monthName = "Сентябрь";
                        break;
                    }
                    case 9:
                    {
                        state.monthName = "Октябрь";
                        break;
                    }
                    case 10:
                    {
                        state.monthName = "Ноябрь";
                        break;
                    }
                    case 11:
                    {
                        state.monthName = "Декабрь";
                        break;
                    }
            }
            state.year = action.payload.date.getFullYear()
        },
        [setDoubleClickDay] : (state, action) =>
        {
            
            state. doubleClickDay = action.payload.date
        },
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
                      
                        state.Notes.NotesArray[action.payload.changeInf.name].text = action.payload.changeInf.text
                    
                        break;
                    }
            }
        },
        [createNote] : (state) =>
        {
            
            let newNote = 
            {
                header:state.Notes.header,
                date:String(new Date(state.doubleClickDay)),
                text:state.Notes.text,
                isChanging: false
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
        },
        [deleteAll]: (state) =>
        {
            for (let i=0; i<=50;i++)
            {
               
           if( state.Notes.NotesArray[i] && state.Notes.NotesArray[i].date === String(state.doubleClickDay))
           {
            state.Notes.NotesArray.splice(i,1) 
            i--
           }
            }
        },
        [changeNote] : (state, action) =>
        {
            state.Notes.NotesArray[action.payload.changeInf].isChanging = !state.Notes.NotesArray[action.payload.changeInf].isChanging
        }
    }
    )

export default Laba7Reducer;