import { createReducer, createAction} from '@reduxjs/toolkit';

export const showInputs = createAction("Laba8showAvatars",
(changeInf) => {return {payload:{changeInf :changeInf}}})


let initialState = { 
    username:'',
    email:'',
    avatar:'',
    newMessage:
    {
        MessageName:'',
        MessageEmail:'',
        MessageText:'',
        MessageChangeDate:'',
    },
    messages:[],
    secretWord:'',
    inputs:
    {
        isNameInputActive:false,
        isEmailInputActive:false,
        isAvatarInputActive:false,
        isPlusActive:false,
    }
}


let Laba8Reducer = createReducer(
    initialState,
    {
        [showInputs] : (state, action) =>
        {
            debugger
            switch (action.payload.changeInf.id)
            {
                case "avatar" :{state.inputs.isAvatarInputActive = ! state.inputs.isAvatarInputActive; break;}
                case "name" :{state.inputs.isNameInputActive = ! state.inputs.isNameInputActive; break;}
                case "email" :{state.inputs.isEmailInputActive = ! state.inputs.isEmailInputActive; break;}
                case "plus" :{state.inputs.isPlusActive = ! state.inputs.isPlusActive; break;}
                
                default:
                    {
                        
                    }
            }
            
        }
           
    }
    )

export default Laba8Reducer;