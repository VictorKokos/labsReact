import React from 'react'
import s from './Search.module.css'
const Search = (props) =>
{
let onSearchChange = (e) =>
{
let changeInf = {
   value: e.target.value,
    name:e.target.name,
}

props.SearchFill(changeInf)
}


    return(
    <div className={s.search}>
      <div> SEARCH</div> 
         <input name="type" type="text" onChange={onSearchChange} value = {props.Laba10.searchValue} className={s.text} />
        <div><input type="radio" name="mode" value="strict" onChange={onSearchChange}/> Точное совпадение</div> 
        <div><input type="radio" name="mode" value="notstrict" onChange={onSearchChange}/>Частичное совпадение</div> 
        <button name="search" onClick={onSearchChange}>Поиск</button>
        {props.Laba10.FoundProducts.map((prod) => {return(<div key ={prod.id} className={s.foundProd}> 

           <div>Наименование: {prod.name}</div>
           <div>Количество: {prod.amount}шт</div>
           <div>Стоимость: {prod.cost}р</div>
           {prod.discount ? <div>Стоимость со скидкой: {prod.cost - prod.discount*prod.cost/100}р </div> : null}
           <div>{prod.description}</div>




        </div>)})}
        </div>
    )
}



export default Search



