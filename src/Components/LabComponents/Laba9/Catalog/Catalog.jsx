import s from "./Catalog.module.css"





let Catalog = (props) =>
{
    let onSortClick = (e) =>
    {
      let changeInf =
      {
        id:e.target.id
      }
      props.sort(changeInf)
      props.newFirst()
    }
    
    


    return(
    <div className={s.Catalog}>
      <div className={s.sort}>
      <div onClick={onSortClick} id="name" className={s.sortType}>Сортировать по имени</div>
      <div onClick={onSortClick} id="cost" className={s.sortType}>Сортировать по стоимости</div>
      <div onClick={onSortClick} id="amount" className={s.sortType}>Сортировать по количеству</div>
      <div onClick={onSortClick} id="discount" className={s.sortType}>Сортировать по скидке</div>
      </div>
      {props.Laba9.Products.map((product) => {return (<div key={product.id} className={s.CatalogItem}>
        <div className={s.extra}>
        {product.isNew ? <div className={s.new}> Новинка </div>:null}
        {product.discount ? <div className={s.discount}>Скидка {product.discount}% </div>:null}
        </div>
        <div className={s.pic}>
            <img className={s.img} src={product.image} />
         </div>

         <div className={s.inf}>
            <div className={s.name}> {product.name}</div>
         { product.discount!=0 ? <div className={s.cost}>{product.cost - product.discount/100*product.cost}руб <span className={s.crossed}>{product.cost}руб</span> </div>
         :<div className={s.cost}> {product.cost}руб</div>}
            <div className={s.amount}>Количество: {product.amount} шт </div>
           <div className={s.description}>{product.description} </div>
            </div>


      </div>)})}
    </div>
    )
}
export default Catalog