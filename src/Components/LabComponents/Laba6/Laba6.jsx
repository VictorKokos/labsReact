import s from './Laba6.module.css'
import NotesContainer from './Notes/NotesContainer'
import StudentInfoContainer from './StudentInfo/StudentInfoContainer'


let Laba6 = () =>
{
    return(
        <div className={s.laba4} >
            <div className={s.title}>
            Laba6
            </div >
          <StudentInfoContainer />
          <NotesContainer />
            </div>
    )
}
export default Laba6