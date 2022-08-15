import { useState } from 'react'
import CatalogContainer from './Catalog/CatalogContainer'
import s from './Laba9.module.css'
import SortTableContainer from './SortTable/SortTebleContainer'





let Laba9 = (props) =>
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
         {showSortTable  ?  <SortTableContainer /> : null     }
         {showCatalog  ?  <CatalogContainer  /> : null     }
            </div>
    )
}
export default Laba9