import React, { PureComponent } from 'react';
import style from './listItem.module.css'  
import classnames from 'classnames/bind'
import cn from 'classnames'

const cls = classnames.bind(style)


class ListItem extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.handleDecrease = this.handleDecrease.bind(this)
    }

    componentDidUpdate(nextProps) {
        // * 可以跟服务端交换数据
        if(nextProps.data.value !== this.props.data.value) {
            console.log('Item - Updated')
        }
    }

    componentWillUnmount() {
        // * 去除一些eventlister 和 timer
        console.log('Item - delete')
    }
    // doSthWithCount = () => {
    //     if (this.props.data.value <= 0) {
    //         // * setState 是异步的，为了优化，可能多个setState同步执行
    //         this.setState({
    //             count: 0
    //         })
    //     }
    // }

    // handleDecrease = (id,ev) => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    //     this.doSthWithCount()
    // }

    // handleIncrease = () => {
    //     // console.log('step 1',this.state.count)
    //         // * setState 是异步的，为了优化，可能多个setState同步执行
    //         // * 需要使用回调获取更新的值
    //     this.setState({
    //         count: this.state.count + 1
    //     },() => {
    //         //   console.log('step 3',this.state.count) 
    //     })
    //     // console.log('step 2',this.state.count)

    // }

    // * 优化重复渲染,避免不必要渲染执行
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('props', this.props, nextProps)
    //     console.log('state', this.state, nextState)

    //     if (this.props.data.id === nextProps.data.id && this.state.count === nextState.count) return false
        

    //     return true
    // }

    render() { 
        console.log('item - rendering')
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
                    <button onClick={(ev) => {this.props.onDecrease(this.props.data.id,ev)}} type='button' className='btn btn-primary'> - </button>
                       <span className={cls('digital')}>{this.props.data.value}</span>
                    <button onClick={() => {this.props.onIncrease(this.props.data.id)}} type='button' className='btn btn-primary'> + </button>
                </div>
                <div className='col-2 border'>¥{this.props.data.price * this.props.data.value}</div>
                <div className='col-1 border'>
                    <button onClick={() => {this.props.onDelete(this.props.data.id)}} className='btn btn-danger btn-sm'>delete</button>
                </div>
            </div>
            </>
        );
    }
}
 
export default ListItem;