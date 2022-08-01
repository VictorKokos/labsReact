import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Laba4Reducer from './Laba4Reducer'
let allReducers = combineReducers(
    {Laba4:Laba4Reducer}
)
let store = configureStore(
   { reducer: allReducers}
)

export default store