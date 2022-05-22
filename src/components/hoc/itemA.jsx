import React, { Component } from 'react';
import withTooptip from './withToolTip';

const ItemA = (props) => {
    return (
        <div className='container'>
            <button className='btn btn-primary' type='btn'>Tooltip A</button>

            {props.action.showToolTip && <span className='badge badge-pill badge-primary ml-10 z-99'>{props.action.content + "asdasdsa"}</span>}
        </div>
    )
}

export default withTooptip(ItemA)