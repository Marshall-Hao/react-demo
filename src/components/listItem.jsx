import React, { Component } from 'react';
  
let count = 0;
class ListItem extends Component {
    constructor( props) {
        super(props)
    }

    manageCount() {
        return count + '个'
    }

    render() { 
        return (
            <div className='row mb-3'>
                <div className='col-6 grid-col border'>{this.props.data.name}</div>
                <div className='col-1 grid-col border'>¥{this.props.data.price}</div>
                <div className={`col-2 grid-col border' ${count ? '':' bg-black'}`}>{this.manageCount()}</div>
            </div>
        );
    }
}
 
export default ListItem;