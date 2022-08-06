import { createReducer, createAction } from '@reduxjs/toolkit';


export const changeInputText = createAction("Laba5ChangeInputText",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const letEnter = createAction('Laba5LetEnter')
export const changeGender = createAction("Laba5ChangeGender",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeBirthDay = createAction("Laba5ChangeBirthday",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const changeBirthMonth = createAction("Laba5changeBirthMonth",
(changeInf) => {return {payload:{changeInf :changeInf}}})
export const changeBirthYear = createAction("Laba5changeBirthYear",
(changeInf) => {return {payload:{changeInf :changeInf}}})

export const changeNumber = createAction ('Laba5changeNumber',
(changeInf) => {return {payload:{changeInf :changeInf}}})

let initialState = { 
        firstName:'',
        lastName:'',
        patronymic:'',
        gender:'',
        birthYear:'',
        birthMonth:'',
        birthDay:'',
        email:'',
        isEmailCorrect:false,
        password:'',
        passwordDifficulty:
        {
            moreThan1:false,
            upperAndLower:false,
            moreThan8:false,
        },
        security:0,
        passwordCheck:'',
        arePasswordsCorrect:false,
        phoneInput:
        {
            code:'',
            isCodeConfirmed:'',
            currentInputNumber:""
        },
        operators:undefined,
        letEnter:undefined
}


let Laba5Reducer = createReducer(
initialState,
{
    [changeInputText] : (state, action) =>
    {
        
        switch(action.payload.changeInf.name)
        {
            case "firstName" : 
            {
                state.firstName = action.payload.changeInf.text;
                break;
            }
            case "lastName" : 
            {
                state.lastName = action.payload.changeInf.text;
                break;
            }
            case "patronymic" : 
            {
                state.patronymic = action.payload.changeInf.text;
                break;
            }
            case "email" : 
            {
                state.email = action.payload.changeInf.text;
                const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
                const result = pattern.test(state.email);
                if(result)
                {
                 state.isEmailCorrect = true;
                }
                else
                {
                 state.isEmailCorrect = false;
                }
                break;
            }
            case "password" : 
            {
                state.password = action.payload.changeInf.text;

           




                if(state.password.length >=1 && !state.passwordDifficulty.moreThan1  )
                {
                    state.passwordDifficulty.moreThan1 = true
                    state.security++;
                    
                }
               
                else if(state.password.length >=8 && !state.passwordDifficulty.moreThan8 )
                {
                    state.passwordDifficulty.moreThan8 =true
                    state.security++;
                }
               
               else if(state.password.match(/[a-z]/) && state.password.match(/[A-Z]/) && !state.passwordDifficulty.upperAndLower )
                {
                    state.passwordDifficulty.upperAndLower =true
                    state.security++;
                 
                }
                else if(!(state.password.match(/[a-z]/) && state.password.match(/[A-Z]/)) && state.passwordDifficulty.upperAndLower )
                {
                    state.passwordDifficulty.upperAndLower =false
                    state.security--;
                }
                else if(state.password.length <8 && state.passwordDifficulty.moreThan8 )
                {
                    state.passwordDifficulty.moreThan8 =false
                    state.security--;
                }
                else if(state.password.length ==0 && state.passwordDifficulty.moreThan1 )
                {
                    state.passwordDifficulty.moreThan1 =false
                    state.security--;
                }
            
                
                
                
               
                
                break;
            }
            case "passwordCheck" : 
            {
                state.passwordCheck = action.payload.changeInf.text;
                if(state.passwordCheck == state.password && state.security==3)
                {
                    state.arePasswordsCorrect = true;
                }
                else{
                    state.arePasswordsCorrect = false;
                }
                break;
            }
        }
    },
    [letEnter] : (state) =>
    {
        if(state.arePasswordsCorrect && state.firstName && state.lastName && state.patronymic
            && state.isEmailCorrect && state.gender && state.birthDay && state.birthMonth 
            && state.birthYear && state.phoneInput.currentInputNumber && state.operators)
        {
            state.letEnter = true
        }
        else
        {
            state.letEnter = false
        }
    },
    [changeGender] : (state, action) =>
    {
        state.gender = action.payload.changeInf
    },
    [changeBirthDay] : (state, action) =>
    {
        state.birthDay = action.payload.changeInf
    },
    [changeBirthMonth] : (state, action) =>
    {
        state.birthMonth = action.payload.changeInf
    },
    [changeBirthYear] : (state, action) =>
    {
        state.birthYear = action.payload.changeInf
    },
    [changeNumber]:(state,action) =>
    {
        switch (action.payload.changeInf.name)
        {
            case "phoneCodeInput":
                {
                    state.phoneInput.code = action.payload.changeInf.value;

                    switch(state.phoneInput.code)
                    {
                        case '+375' :
                        case '+7' :
                        case '+380':
                        case '+48':
                       case '+370':
                        case '+371':
                            {
                                state.phoneInput.isCodeConfirmed = true;
                                state.phoneInput.currentInputNumber = state.phoneInput.code
                                
                                break;
                               
                            }



                        default: 
                        {
                            state.phoneInput.currentInputNumber = action.payload.changeInf.value
                            break;
                        }
                    }

                    
                    break;
                }
            case "phoneInput": 
            {
                switch(state.phoneInput.code)
                {
                    case "+375" :
                        {
                            state.operators = ['МТС' ,'A1', 'life:)']
                                break;
                        }
                    case "+7" :
                        {
                            state.operators = ['Билайн', 'Мегафон', 'МТС', 'Tele2']
                                 break;
                        }
                    case "+380" :
                        {
                            state.operators = ['Lifecell', 'Vodafone', 'Київстар']
                                break;
                        }
                    case "+48" :
                        {
                            state.operators = ['Orange', 'Play', 'Plus', 'T-mobile']
                                 break;
                        }
                    case "+370" :
                        {
                            state.operators = [	'Telia', 'Bite', 'Tele2']
                                break;
                        }
                    case "+371" :
                        {
                            state.operators = ['LMT', 'Tele2', 'Bite']
                                 break;
                        }
                } 
            
                switch(state.phoneInput.code)
                {
                    case "+375" :
                    case "+380" :
                    case "+370" :
                        {
                            
                           
                            switch(action.payload.changeInf.value.length)
                            {
                     
                                case state.phoneInput.currentInputNumber.length-1:
                                    {
                                        state.phoneInput.isCodeConfirmed = false;
                                        state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                    }
                                case 5:
                                 
                                    {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat("(");  break;}
                                    
                                case 8:
                                    {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat(") ");  break;}
                                case 13:
                                case 16:
                                    {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat("-");  break;}
                                  default:
                                    {
                                        state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                    }
                            }
                        
                            break;
                        }
                        case "+7" :
                            {
                                switch(action.payload.changeInf.value.length)
                                {
                         
                                    case state.phoneInput.currentInputNumber.length-1:
                                        {
                                            state.phoneInput.isCodeConfirmed = false;
                                            state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                        }
                                    case 3:
                                        {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat("(");  break;}
                                    case 7:
                                        {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat(") ");  break;}
                                    case 12:
                                    case 15:
                                        {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat("-");  break;}
                                      default:
                                        {
                                            state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                        }
                                }
                                break;
                            }
                            case "+48" :
                            {
                                switch(action.payload.changeInf.value.length)
                                {
                         
                                    case state.phoneInput.currentInputNumber.length-1:
                                        {
                                            state.phoneInput.isCodeConfirmed = false;
                                            state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                        }
                                    case 7:
                                    case 11:
                                        {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat("-");  break;}
                                    
                             
                                      default:
                                        {
                                            state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                        }
                                }
                                break;
                            }
                              case "+371" :
                            {
                                switch(action.payload.changeInf.value.length)
                                {
                         
                                    case state.phoneInput.currentInputNumber.length-1:
                                        {
                                            state.phoneInput.isCodeConfirmed = false;
                                            state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                        }
                                    case 9:
                                        {state.phoneInput.currentInputNumber= action.payload.changeInf.value.concat("-");  break;}
                                    
                             
                                      default:
                                        {
                                            state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                        }
                                }
                                break;
                            }
                            default:
                                {
                                    state.phoneInput.currentInputNumber = action.payload.changeInf.value; break;
                                }
                }
              
                break;
            }
            case "select" :
                {
                   
                    state.phoneInput.code = action.payload.changeInf.value;
                    state.phoneInput.isCodeConfirmed = true;
                    state.phoneInput.currentInputNumber = state.phoneInput.code
                }
        }
    }
    
}
)

export default Laba5Reducer;