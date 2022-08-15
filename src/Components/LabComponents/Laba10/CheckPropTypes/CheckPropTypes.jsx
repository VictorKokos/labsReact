
import PropTypes, { shape } from 'prop-types'
import React from 'react'
import { useEffect } from 'react';
const CheckPropTypes = (props) =>
{

useEffect(
    ()=> {props.SomeFunction()}, []
)
    return(
        <div>
          Компонент CheckPropTypes Принимает props, но не использует их в разметке
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



