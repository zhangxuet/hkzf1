import React from 'react'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

function NotFound() {
    return <div>主页被外星人抓走了</div>
}
function Zs() {
    return <div>ZS</div>
}

function Ls() {
    return <div>LS</div>
}

function Home () {
    // return (
        // <div>
        //     <Link to="/home/zs">ZS</Link>
        //     <Link to="/home/ls">LS</Link>
        //     <Route path="/home/zs" component={Zs}/>
        //     <Route path="/home/ls" component={Ls}/>
        // </div>
        // )
    let token = sessionStorage.getItem('mytoken')
    let content  = null
    if (token) {
        content = <div>Home</div>
    } else {
        content = <Redirect to="/login"></Redirect>
    }
    return (
        <div>{content}</div>
    )
}
function Tech () {
    return <div>Tech</div>
}
function Edu () {
    return <div>Edu</div>
}
function Login () {
    return <div>login</div>
}
class BaseRouter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <BrowserRouter>
                <div>BaseRouter</div>
                <Link to="/">主页</Link>
                <Link to="/home">主页</Link>
                <Link to="/tech">科技</Link>
                <Link to="/edu">教育</Link>
                <Link to="/login">登录</Link>
                <Switch>
                    <Redirect exact path="/" to="/home"/>
                    <Route path="/home" component={Home}/>
                    <Route path="/tech" component={Tech}/>
                    <Route path="/edu" component={Edu}/>
                    <Route path="/login" component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default BaseRouter