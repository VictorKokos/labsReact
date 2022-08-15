
import PropTypes, { shape } from 'prop-types'
import React from 'react'
import { useEffect } from 'react';
const CheckPropTypes = (props) =>
{
let pr = props.Laba10.propsCheck;
useEffect(
    ()=> {props.SomeFunction()}, []
)

let doNothing = () =>
{
    props.SomeFunction()
}
    return(
        <div>
          {pr.someArray.map(
            (elem) =>{return (<li key={elem} onClick={doNothing}>{elem} </li>)}
          )}  
          {pr.SomeBool}
          {pr.SomeNumber}
          {pr.someObject.a}
          {pr.SomeString}
          {pr.SomeSymbol}
        </div>
    )
}

CheckPropTypes.propTypes = {
  Laba10:PropTypes.shape({
    propsCheck:PropTypes.shape({
        someArray:PropTypes.array,
        someBool:PropTypes.bool,
        someNumber:PropTypes.number,
        someObject:PropTypes.object,
        someString:PropTypes.string,
        someSymbol:PropTypes.symbol

    })
    
})
   
   };


export default CheckPropTypes



