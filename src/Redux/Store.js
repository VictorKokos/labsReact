import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Laba4Reducer from './Laba4Reducer'
import Laba5Reducer from './Laba5Reducer'
let allReducers = combineReducers(
    {
        Laba4:Laba4Reducer,
        Laba5:Laba5Reducer
    }
)
let store = configureStore(
   { reducer: allReducers},
)

export default store