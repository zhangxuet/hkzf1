    import React from 'react'
import {BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

class Login extends React.Component {
    handleLogin = () => {
        this.props.history.push('/home', {
            info: 'hello'
        })
    }
    render () {
        return (
            <div>
                <div>
                    用户名：
                    <input type="text"/>
                </div>
                <div>
                    密码：
                    <input type="text"/>
                </div>
                <div>
                    <button onClick={this.handleLogin}>登录</button>
                </div>
            </div>
        )
    }
}

const MyLogin = withRouter(Login)
function TestLogin () {
    return (
        <div>
            <MyLogin/>
        </div>
    )
}

function Home(props) {
    let params = props.location.state
    return <div>首页{params.info}</div>
}

class BaseRouter extends React.Component{
    render () {
        return (
            <BrowserRouter>
                <Link to="login"></Link>
                <Route path="/login" component={TestLogin}/>
                <Route path="/home" component={Home}/>
            </BrowserRouter>
        )
    }
}
export default BaseRouter