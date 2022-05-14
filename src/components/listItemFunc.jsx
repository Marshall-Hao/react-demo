
import React from 'react';

let count = 0;


function manageCount() {
    return count + '个'
}

const ListItem = (props) => {
    return (  
    <div className='row mb-3'>
        <div className='col-6 grid-col border'>{props.data.name}</div>
        <div className='col-1 grid-col border'>¥{props.data.price}</div>
        <div className='col-2 grid-col border'>{manageCount()}</div>
    </div>
    );
}
 
export default ListItem;