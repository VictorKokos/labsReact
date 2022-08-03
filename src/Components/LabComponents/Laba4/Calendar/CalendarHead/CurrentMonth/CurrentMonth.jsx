import { render } from '@testing-library/react';
import React from 'react';
import s from './CurrentMonth.module.css'


class CurrentMonth extends React.Component
{
    constructor(props)
    {
        super(props)
        this.props.setMonth(new Date())
    }
    

    

    

    
    render()
    {
    return (
        <div className={s.CurrentMonth}>
            {this.props.Laba4.monthName} {this.props.Laba4.year}
            </div>
    )
    }
}
export default CurrentMonth