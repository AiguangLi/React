import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default function Tables(props) {
    console.log(props.goods)
    return <div className="container-fluid">
        <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">      
                <h3>商品清单</h3>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>商品编号</th>
                                <th>商品名称</th>
                                <th>商品类别</th>
                                <th>商品价格</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.goods.map(item => {
                                    return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>￥{item.price}</td>
                                            <td><button className='btn btn-danger'>删除</button></td>
                                        </tr>
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
}
