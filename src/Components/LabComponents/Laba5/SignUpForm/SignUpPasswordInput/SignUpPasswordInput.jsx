import s from './SignUpPasswordInput.module.css'

let ProgressBar = (props) =>
{
    return(
        <div className={s.progressBar}>
{(props.Laba5.security == 0) ? <div></div> 
          : (props.Laba5.security == 1) 
          ? <div className={s.lowsec}>Паароль  ненадёжный!</div> 
          : (props.Laba5.security == 2) 
          ? <div className={s.midsec}>Паароль  ненадёжный!</div> 
          :<div className={s.highsec}>Паароль  надёжный!</div>   }
        </div>
    )
}


let SignUpPasswordInput = (props) =>
{
    return(
        <div className={s.password}>
  <div>Пароль</div>  <input type="text" name="password"  onChange={props.changeTextInput} value={props.Laba5.password}/>
          <div>Подтвердите пароль</div>  <input type="text" name="passwordCheck"  onChange={props.changeTextInput} value={props.Laba5.passwordCheck}/>
        <ProgressBar Laba5 = {props.Laba5}/>
          
        </div>
    )
}

export default SignUpPasswordInput