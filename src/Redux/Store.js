import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Laba4Reducer from './Laba4Reducer'
import Laba5Reducer from './Laba5Reducer'
import Laba6Reducer from './Laba6Reducer'
import Laba7Reducer from "./Laba7Reducer";
import Laba8Reducer from "./Laba8Reducer";
import Laba9_10Reducer from "./Laba9_10Reducer";
let allReducers = combineReducers(
    {
        Laba4:Laba4Reducer,
        Laba5:Laba5Reducer,
        Laba6:Laba6Reducer,
        Laba7:Laba7Reducer,
        Laba8:Laba8Reducer,
        Laba9:Laba9_10Reducer
    }
)
let store = configureStore(
   { reducer: allReducers},
)

export default store