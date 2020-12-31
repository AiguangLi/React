import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {getGoods} from '@/services/goods';
import Tables from '@/components/tables'

export default class Cart extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            goods: getGoods()
        }
    }

    render() {
        return <div>
            <span className={this.getGoodsCountStyles()}>{this.getGoodsCount()}</span>
            <button className='btn btn-primary' onClick={() => { this.increaseCount() }}>添加</button>
            <Tables goods={this.state.goods}></Tables>
        </div>
    }

    getGoodsCountStyles = () => {
        const styles = 'badge m-2 badge-';

        return this.state.count === 0 ? styles + 'warning' : styles + 'primary';
    }

    getGoodsCount = () => {
        return this.state.count;
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}
