import React, { Component } from 'react';
import style from './listItem.module.css'  
import classnames from 'classnames/bind'
import cn from 'classnames'

const cls = classnames.bind(style)


class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.handleDecrease = this.handleDecrease.bind(this)
    }

    manageCount() {
        return this.state.count + '个'
    }

    doSthWithCount = () => {
        if (this.state.count <= 0) {
            // * setState 是异步的，为了优化，可能多个setState同步执行
            this.setState({
                count: 0
            })
        }
    }

    handleDecrease = (id,ev) => {
        console.log(ev)
        console.log('id:',id)
        this.setState({
            count: this.state.count - 1
        })
        this.doSthWithCount()
    }

    handleIncrease = () => {
        console.log('step 1',this.state.count)
            // * setState 是异步的，为了优化，可能多个setState同步执行
            // * 需要使用回调获取更新的值
        this.setState({
            count: this.state.count + 1
        },() => {
              console.log('step 3',this.state.count) 
        })
        console.log('step 2',this.state.count)

    }



    render() { 
        // * 方便条件渲染了
        const _cn = cn({
            'bg-black': !this.state.count
        })

        return (
            <>
            <span className={cls('title', 'list-title')}>complex</span>
            <div className='row mb-3'>
                <div className={`col-6 grid-col border ${style.title} ${style['list-title']}`} >{this.props.data.name}</div>
                <div className='col-1 grid-col border'>¥{this.props.data.price}</div>
                <div className={`col-2 grid-col border flex' ${_cn}`}>
                    <button onClick={(ev) => {this.handleDecrease(this.props.data.id,ev)}} type='button' className='btn btn-primary'> - </button>
                       <span className={cls('digital')}>{this.state.count}</span>
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