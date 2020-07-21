import React from 'react'
import {BrowserRouter, Route, Link } from 'react-router-dom'

function CommonInfo (props) {
    // console.log(props)
    let id = props.match.params.id
    let data = [{
        id: 123,
        name: 'zs',
        age: 10
    }, {
        id: 456,
        name: 'lisi',
        age: 11
    }]
    let ret = data.filter(item => {
        return item.id === parseInt(id)
    })
    let user = ret[0]
    console.log(user)
    return (
        <div>
            <div>姓名：{user && user.name}</div>
            <div>年龄：{user && user.age}</div>
        </div>
    )
}

function BookInfo (props) {
    let bid = props.match.params.bid
    return <div>图书信息：{bid}</div>
}

class BaseRouter extends React.Component{
    render () {
        return (
            <BrowserRouter>
                <Link to="/user/123">ZhangSan</Link>
                <Link to="/user/123/book/1">ZhangSan--图书1</Link>
                <Link to="/user/123/book/2">ZhangSan--图书2</Link>
                <span>-----</span>
                <Link to="/user/456">LiSi</Link>
                <Route exact path="/user/:id" component={CommonInfo}/>
                <Route path="/user/:id/book/:bid" component={BookInfo}/>
            </BrowserRouter>  
        )
    }
}
export default BaseRouter