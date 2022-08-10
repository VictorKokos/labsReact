import { createReducer } from '@reduxjs/toolkit';
import {createAction} from '@reduxjs/toolkit'

export let setSelectedDay = createAction('Laba4SetSelectedDay',
 (date) => {return{payload:{date:date}}})

 export let setMonth = createAction('Laba4SetMonth',
 (date) => {return{payload:{date:date}}})

 export let setDoubleClickDay = createAction('Laba4setDoubleClickDay',
 (date) => {return{payload:{date:date}}})

let initialState = {
    selectedDate: {},
    selectedDay: {},
    currentDay: "",
    monthName:"",
    year:"",
    doubleClickDay:'',
}


let Laba4Reducer = createReducer(
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
    }
}
)

export default Laba4Reducer;