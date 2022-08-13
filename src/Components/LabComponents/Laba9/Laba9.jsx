import { useState } from 'react'
import s from './Laba9.module.css'
import SortTableContainer from './SortTable/SortTebleContainer'





let Laba9 = () =>
{
let [showSortTable, setShowSortTable] = useState(false)
let [showCatalog, setShowCatalog] = useState(false)



    return(
        <div className={s.laba4} >
            <div className={s.title}>
            Laba9
            </div >
            <button className={s.button} onClick={() => setShowSortTable(!showSortTable)}>Показать/скрыть таблицу</button>
            <button className={s.button} onClick={() => setShowCatalog(!showCatalog)}>Показать/скрыть каталог</button>
         {showSortTable && !showCatalog ?  <SortTableContainer /> : null     }
         {showCatalog && !showSortTable ?  <div>catalog</div> : null     }
            </div>
    )
}
export default Laba9