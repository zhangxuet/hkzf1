import React from 'react'


class Child extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    handleX = () => {
        this.props.handleClose()
    }
    render() {
        let { isShow,titleName,titleColor } = this.props
        let styles = {
            top: {
                display: isShow ? 'block': 'none'
            },
            bg: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            center: {
                position: 'fixed',
                left: '50%',
                top: '100px',
                marginLeft: '-200px',                 
                width: '400px',
                height: '300px',
                background: '#fff'
            },
            title: {
                position: 'relative',
                height: '40px',
                lineHeight: '40px',
                background: titleColor
            },
            close: {
                position: 'absolute',
                right: '30px',
                cursor: 'pointer'
            }
        }
        return (
            <div style={styles.top}>
                <div className="bg" style={styles.bg}></div>
                <div className="center" style={styles.center}>
                    <div style={styles.title}>
                        <div>{titleName}</div>
                        <div style={styles.close} onClick={this.handleX}>X</div>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

class Parent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    handleChange = () => {
        this.setState({
            isShow: true
        })
    }
    handleClose = () => {
        this.setState({
            isShow: false
        })
    }
    render() {
        return (
            <div>
                <Child isShow={this.state.isShow} titleName='登录' titleColor="lightblue"
                handleClose={this.handleClose}>
                        <div>
                            <label htmlFor="uname">用户名</label>
                            <input type="text" id="uname"/>
                        </div>
                </Child>
                <button onClick={this.handleChange}>点击</button>
            </div>
        )
    }
}
export default Parent