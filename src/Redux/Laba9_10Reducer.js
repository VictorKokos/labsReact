import { createReducer, createAction} from '@reduxjs/toolkit';

export const sort = createAction("Laba9sort",
(changeInf) => {return{payload:{changeInf:changeInf}}})

export const SearchFill = createAction("Laba9SearchFill",
(changeInf) => {return{payload:{changeInf:changeInf}}})

export const newFirst = createAction("Laba9newFirst")
export const SomeFunction = createAction("Laba9SomeFunction")


let initialState = { 
    Products:
    [
        {
            id:1,
            name: "LG 32LM6350PLA",
            cost: 1320,
            amount:10,
            image:"/tv/1.jpg",
            description:'32" 1920x1080 (Full HD), частота матрицы 60 Гц, Smart TV (LG webOS), HDR, Wi-Fi',
            isNew:false,
            discount:5,
        },
        {
            id:2,
            name: "Samsung UE32T5300AU",
            cost:1830,
            amount:4,
            image:"/tv/2.jpg",
            description:'32" 1920x1080 (Full HD), частота матрицы 60 Гц, индекс динамичных сцен 1000, Smart TV (Samsung Tizen), Wi-Fi',
            isNew:false,
            discount:8,
        },
        {
            id:3,
            name: 'Xiaomi MI TV 4S 43" (международная версия)',
            cost:1300,
            amount:15,
            image:"/tv/3.jpg",
            description:'43" 3840x2160 (4K UHD), матрица IPS, частота матрицы 60 Гц, Smart TV (Android TV), HDR, Wi-Fi',
            isNew:true,
            discount:8,
        },
        {
            id:4,
            name: "Samsung UE32N5000AU",
            cost:2600,
            amount:1,
            image:"/tv/4.jpeg",
            description:'32" 1920x1080 (Full HD), частота матрицы 60 Гц, индекс динамичных сцен 300',
            isNew:false,
            discount:15,
        },
        {
            id: 5,
            name: "LG 43LM5500PLA",
            cost:935,
            amount:5,
            image:"/tv/5.jpg",
            description:'43" 1920x1080 (Full HD), частота матрицы 60 Гц',
            isNew:true,
            discount:0,
        },
        {
            id:6,
            name: "Harper 43F660TS",
            cost:1470,
            amount:35,
            image:"tv/6.jpg",
            description:'43" 1920x1080 (Full HD), частота матрицы 60 Гц, Smart TV (Android), Wi-Fi',
            isNew:true,
            discount:0,
        },
        {
            id:7,
            name: "Samsung UE43T5300AU",
            cost:2300,
            amount:3,
            image:"tv/7.jpg",
            description:'43" 1920x1080 (Full HD), частота матрицы 60 Гц, индекс динамичных сцен 1000, Smart TV (Samsung Tizen), Wi-Fi',
            isNew:false,
            discount:5,
        },
        {
            id:8,
            name: "Olto 3220R",
            cost:1250,
            amount:14,
            image:"tv/8.jpeg",
            description:'32" 1366x768 (HD), частота матрицы 60 Гц',
            isNew:false,
            discount:10,
        },
        {
            id:9,
            name: "Horizont 24LE5511D",
            cost:470,
            amount:13,
            image:"tv/9.jpg",
            description:'24" 1366x768 (HD), частота матрицы 60 Гц',
            isNew:true,
            discount:0,
        },
        {
            id:10,
            name: "Econ EX-60US001B",
            cost:780,
            amount:8,
            image:"tv/10.jpg",
            description:'60" 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (Android), Wi-Fii',
            isNew:false,
            discount:20,
        },
        
    ],
    FoundProducts:
    [],
    sortId:false,
    sortName:false,
    sortAmount:false,
    sortDiscount:false,
    sortCost:false,
    propsCheck:
    {
        someArray:[1, 2, 3],
        someBool:false,
        someNumber:34,
        someObject:{a:"проп - объект"},
        someString:"string",
        someSymbol:undefined
    },
    searchValue:'',
    searchMode:undefined
}


let Laba9Reducer = createReducer(
    initialState,
    {
        [sort] : (state, action) =>
        {
            switch(action.payload.changeInf.id)
            {
                case "number" :
                    {
                        if(!state.sortId || state.sortId=="toMin" )
                        {
                        state.Products.sort(
                            (a,b) =>
                             {
                                if(a.id > b.id)
                                {return 1}
                                if(a.id <= b.id)
                                {return -1}
                            })
                           
                        state.sortId = "toMax";
                        }
                        else if (state.sortId == "toMax")
                        {
                            state.Products.sort(
                                (a,b) =>
                                 {
                                    if(a.id > b.id)
                                    {return -1}
                                    if(a.id <= b.id)
                                    {return 1}
                                })
                                state.sortId="toMin"
                              
                        }

                        break;
                    }
                    case "name" :
                        {
                            if(!state.sortName || state.sortName=="toMin" )
                            {
                            state.Products.sort(
                                (a,b) =>
                                 {
                                    if(a.name > b.name)
                                    {return 1}
                                    if(a.name <= b.name)
                                    {return -1}
                                })
                               
                            state.sortName = "toMax";
                            }
                            else if (state.sortName == "toMax")
                            {
                                state.Products.sort(
                                    (a,b) =>
                                     {
                                        if(a.name > b.name)
                                        {return -1}
                                        if(a.name <= b.name)
                                        {return 1}
                                    })
                                    state.sortName="toMin"
                                  
                            }
    
                            break;
                        }
                        case "amount" :
                        {
                            if(!state.sortAmount || state.sortAmount=="toMin" )
                            {
                            state.Products.sort(
                                (a,b) =>
                                 {
                                    if(a.amount > b.amount)
                                    {return 1}
                                    if(a.amount <= b.amount)
                                    {return -1}
                                })
                               
                            state.sortAmount = "toMax";
                            }
                            else if (state.sortAmount == "toMax")
                            {
                                state.Products.sort(
                                    (a,b) =>
                                     {
                                        if(a.amount > b.amount)
                                        {return -1}
                                        if(a.amount <= b.amount)
                                        {return 1}
                                    })
                                    state.sortAmount="toMin"
                                  
                            }
    
                            break;
                        }
                        case "discount" :
                        {
                            if(!state.sortDiscount || state.sortDiscount=="toMin" )
                            {
                            state.Products.sort(
                                (a,b) =>
                                 {
                                    if(a.discount > b.discount)
                                    {return 1}
                                    if(a.discount <= b.discount)
                                    {return -1}
                                })
                               
                            state.sortDiscount = "toMax";
                            }
                            else if (state.sortDiscount == "toMax")
                            {
                                state.Products.sort(
                                    (a,b) =>
                                     {
                                        if(a.discount > b.discount)
                                        {return -1}
                                        if(a.discount <= b.discount)
                                        {return 1}
                                    })
                                    state.sortDiscount="toMin"
                                  
                            }
    
                            break;
                        }
                        case "cost" :
                        {
                            if(!state.sortCost || state.sortCost=="toMin" )
                            {
                            state.Products.sort(
                                (a,b) =>
                                 {
                                    if(a.cost > b.cost)
                                    {return 1}
                                    if(a.cost <= b.cost)
                                    {return -1}
                                })
                               
                            state.sortCost = "toMax";
                            }
                            else if (state.sortCost == "toMax")
                            {
                                state.Products.sort(
                                    (a,b) =>
                                     {
                                        if(a.cost > b.cost)
                                        {return -1}
                                        if(a.cost <= b.cost)
                                        {return 1}
                                    })
                                    state.sortCost="toMin"
                                  
                            }
    
                            break;
                        }
                default:
                    {
                        break;
                    }
            }
        },
        [newFirst] : (state) =>
        {
            for(let i = 0; i < state.Products.length; i++)
            {
          
                if(state.Products[i].isNew)
                {
                    let removed = state.Products.splice(i,1)
                    state.Products.splice(0,0, removed[0] )  
                    
                }
            }
        },
        [SomeFunction] : (state) =>
        {
            state.propsCheck.someSymbol = Symbol("symbol")
        },
        [SearchFill] : (state, action) =>
        {
            switch(action.payload.changeInf.name)
            {
                case "type":
                    {
                        state.searchValue = action.payload.changeInf.value;
                        break;
                    }
                    case "mode":
                    {
                        state.searchMode = action.payload.changeInf.value;
                        break;
                    }
                    case "search":
                    {
                        state.FoundProducts.splice(0,state.FoundProducts.length)
                        if(!state.searchMode)
                        {
                            
                        }
                        if(state.searchMode === "strict")
                        {
                            for(let i = 0; i< state.Products.length; i++)
                            {
                              if(  state.Products[i].name === state.searchValue)
                              {
                                state.FoundProducts.push(state.Products[i])
                               
                              }
                            }
                            
                        }
                        if(state.searchMode === "notstrict")
                        {
                            for(let i = 0; i< state.Products.length; i++)
                            {
                              if(  state.Products[i].name.includes(state.searchValue))
                              {
                                state.FoundProducts.push(state.Products[i])
                               
                              }
                            }
                        }
                        break;
                    }
                    default:
                        {
                            break;
                        }
            }
            
        }
           
    }
    )

export default Laba9Reducer;