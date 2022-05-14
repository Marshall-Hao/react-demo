import React, { Component } from 'react';

const product = {
    id: 1,
    name: "fuck machine",
    price: 3000,
    stock: 20,
  };
  
  let count = 0;

class ListItem extends Component {

    manageCount() {
        return count + '个'
    }

    render() { 
        return (
            <div className='row mb-3'>
                <div className='col-6 grid-col border'>{product.name}</div>
                <div className='col-1 grid-col border'>¥{product.price}</div>
                <div className='col-2 grid-col border'>{this.manageCount()}</div>
            </div>
        );
    }
}
 
export default ListItem;