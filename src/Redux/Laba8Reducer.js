import { createReducer, createAction} from '@reduxjs/toolkit';

export const showInputs = createAction("Laba8showAvatars",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeTextInput = createAction("Laba8changeTextInput",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeComment = createAction("Laba8changeComment",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const deleteComment = createAction("Laba8deleteComment",
(changeInf) => {return {payload:{changeInf :changeInf}}})


let initialState = { 
    username:'',
    email:'',
    avatar:'',
    prevImg:'',
    currentComment:'',
    deleteConfirmCode:'',
    messages:[],
    secretWord:'',
    inputs:
    {
        isNameInputActive:false,
        isEmailInputActive:false,
        isAvatarInputActive:false,
        isPlusActive:false,
        changeComment:'',
        deleteComment:'',
    }
}


let Laba8Reducer = createReducer(
    initialState,
    {
        [showInputs] : (state, action) =>
        {
         
            switch (action.payload.changeInf.id)
            {
                case "avatar" :{state.inputs.isAvatarInputActive = ! state.inputs.isAvatarInputActive; break;}
                case "name" :{state.inputs.isNameInputActive = ! state.inputs.isNameInputActive; break;}
                case "email" :{state.inputs.isEmailInputActive = ! state.inputs.isEmailInputActive; break;}
                case "plus" :{state.inputs.isPlusActive = ! state.inputs.isPlusActive; break;}
                case "ocean" :{state.prevImg = '/ocean.jpg'; break;}
                case "space" :{state.prevImg = '/space.jpg'; break;}
                case "tiger" :{state.prevImg = '/tiger.jpg'; break;}
                case "prevImg" :
                    {
                        switch(state.prevImg)
                        {
                            case '/ocean.jpg':
                                {state.avatar = '/oceanAvatar.png'
                                break;
                                }
                                case '/space.jpg':
                                {state.avatar = '/spaceAvatar.png'
                                break;
                                }
                                case '/tiger.jpg':
                                {state.avatar = '/tigerAvatar.png'
                                break;
                                }
                                default:
                                {
                                    break;
                                }
                        }
                        break;
                }
                case "confirm" :
                    {
                        let Comment = 
                        {
                            id: state.messages.length,
                            username: state.username,
                            email:state.email,
                            text:state.currentComment,
                            changeDate: new Date(),
                        }
                        state.messages.push(Comment)
                        state.currentComment =""
                    break;}
                    case "change" :{state.inputs.changeComment = state.messages[action.payload.changeInf.index].text}; break;
                    case "delete" :{state.deleteConfirmCode = `Удалить комментарий с индексом ${action.payload.changeInf.index}`}; break;
                default:
                    {
                        
                    }
            }
            
        },
        [changeTextInput] : (state, action) =>
        {
     
            switch(action.payload.changeInf.id)
            {
                case "nameInput" :
                {
                    state.username = action.payload.changeInf.text;
                    break;
                }
                case "emailInput" :
                {
                    state.email = action.payload.changeInf.text;
                    break;
                }
                case "comment" :
                {
                    state.currentComment = action.payload.changeInf.text;
                    break;
                }
                case "changeComment" :
                {
                    state.inputs.changeComment = action.payload.changeInf.text;
                    break;
                }
                case "deleteComment" :
                {
                    state.inputs.deleteComment = action.payload.changeInf.text;
                    break;
                }
                    
                default:
                    {
                        break;
                    }
            }
        },
        [changeComment] : (state, action) =>
        {
            state.messages[action.payload.changeInf.index].text = state.inputs.changeComment
            state.messages[action.payload.changeInf.index].changeDate = new Date()
        },
        [deleteComment] : (state, action) =>
        {
            if(state.inputs.deleteComment == state.deleteConfirmCode)
            {
                state.messages.splice(action.payload.changeInf.index, 1)
            }
        }
           
    }
    )

export default Laba8Reducer;