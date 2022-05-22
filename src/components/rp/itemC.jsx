import React, { Component } from 'react';
import WithTooptip from './withToolTip';

const ItemC = (props) => {
    return (
        <div className='container'>
            <WithTooptip render={({showToolTip,content}) => 
                (
                <>
                    <button className='btn btn-primary' type='btn'>Tooltip C</button>
                    {showToolTip && (<span className='badge badge-pill badge-primary ml-10 z-99'>{content + "asdasdsa"}</span>)}
                </>
            )} />
        </div>
    )
}

export default ItemC;