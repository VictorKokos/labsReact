import s from "./SortTable.module.css"





let SortTable = (props) =>
{
    
    let onSortClick = (e) =>
    {
        
        let changeInf = 
        {
            id:e.target.id
        }

        props.sort(changeInf)
    }



    return(
    <div>
        <table className={s.SortTable}>
<tr> 
<td id="number" onClick={onSortClick} className={s.tdSort}>Номер</td>
<td id="name" onClick={onSortClick} className={s.tdSort}>Название</td>
<td className={s.td}>Описание</td>
<td id="amount" onClick={onSortClick} className={s.tdSort}>Количество на складе</td>
<td className={s.td}>Статус</td>
<td className={s.td}>Старая цена</td>
<td id="discount" onClick={onSortClick} className={s.tdSort}>Скидка</td>
<td id="cost" onClick={onSortClick} className={s.tdSort}>Новая цена</td>
<td className={s.td}>Изображение </td>

</tr>
{props.Laba9.Products.map((product)=>{return(<tr>
     <td className={s.td}>{product.id}</td>
     <td className={s.td}>{product.name}</td>
     <td className={s.td}>{product.description}</td>
     <td className={s.td}>{product.amount}</td>
     <td className={s.td}>{product.isNew ? <div>Новинка!</div>: null}</td>
     <td className={s.tdOldCost}>{product.cost}</td>
     <td className={s.td}>{product.discount}%</td>
     <td className={s.td}>{product.cost - product.discount/100*product.cost}</td>
     <td className={s.td}><img className={s.miniImg} src={product.image} /></td>
     </tr>)})}


        </table>
    </div>
    )
}
export default SortTable