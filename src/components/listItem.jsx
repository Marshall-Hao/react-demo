import React, { Component } from 'react';
import style from './listItem.module.css'  
import classnames from 'classnames/bind'
import cn from 'classnames'

const cls = classnames.bind(style)

let count = 0;
class ListItem extends Component {
    constructor(props) {
        super(props)

        // this.handleDecrease = this.handleDecrease.bind(this)
    }

    manageCount() {
        return count + '个'
    }

    doSthWithCount = () => {
        if (count < 0) {
            count = 0
        }
    }

    handleDecrease = (id,ev) => {
        console.log(ev)
        console.log('id:',id)
         count --;
         this.doSthWithCount()
    }

    handleIncrease = () => {
        count ++;
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
                <div className={`col-2 grid-col border flex' ${_cn}`}>
                    <button onClick={(ev) => {this.handleDecrease(this.props.data.id,ev)}} type='button' className='btn btn-primary'> - </button>
                       <span className={cls('digital')}>{count}</span>
                    <button onClick={this.handleIncrease} type='button' className='btn btn-primary'> + </button>
                </div>
                <div className='col-1 border'>
                    <button onClick={() => {this.props.onDelete(this.props.data.id)}} className='btn btn-danger btn-sm'>delete</button>
                </div>
            </div>
            </>
        );
    }
}
 
export default ListItem;