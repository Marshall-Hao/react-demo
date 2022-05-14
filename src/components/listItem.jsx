import React, { Component } from 'react';
import style from './listItem.module.css'  
import classnames from 'classnames/bind'
import cn from 'classnames'

const cls = classnames.bind(style)

let count = 0;
class ListItem extends Component {
    constructor(props) {
        super(props)
    }

    manageCount() {
        return count + '个'
    }

    render() { 
        // * 方便条件渲染了
        const _cn = cn({
            'bg-black': !count
        })

        return (
            <>
            <span className={cls('title', 'list-title')}>complex</span>
            <div className='row mb-3'>
                <div className={`col-6 grid-col border ${style.title} ${style['list-title']}`} >{this.props.data.name}</div>
                <div className='col-1 grid-col border'>¥{this.props.data.price}</div>
                <div className={`col-2 grid-col border' ${_cn}`}>{this.manageCount()}</div>
            </div>
            </>
        );
    }
}
 
export default ListItem;