import React from 'react'

class Parent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            uname: '',
            job: '',
            introduce: '',
            gender: 'male',
            favour: []
        }
    }
    handleItem = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    handleFavour = (e) => {
        let current = e.target.value
        let favour = [...this.state.favour]
        if (favour.includes(current)) {
            let index = favour.findIndex(item => {
                return item === current
            })
            favour.splice(index,1)
        } else {
            favour.push(current)
        }
        this.setState({
            favour: favour
        })
    }
    handleSubmit = () => {
        console.log(this.state.favour)
    }
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="uname">用户名</label>
                    <input value={this.state.uname} onChange={this.handleItem} type="text" id="uname"/>
                </div>
                <div>
                    <label htmlFor="job">职业 </label>
                    <select id="job" value={this.state.job} onChange={this.handleItem}>
                        <option value="1">攻城狮</option>
                        <option value="2">产品狗</option>
                        <option value="3">程序猿</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="male">男</label>
                    <input name="gender" checked={this.state.gender === 'male' ? true: false} type="radio" id="male" value="male" onChange={this.handleGender}/>
                    <label htmlFor="female">女</label>
                    <input name="gender" checked={this.state.gender === 'female' ? true: false} type="radio" id="female" value="female" onChange={this.handleGender}/>
                </div>
                <div>
                    爱好
                    <label htmlFor="sing">唱歌</label>
                    <input type="checkbox" name="sing" id="sing" value="sing" onChange={this.handleFavour}/>
                    <label htmlFor="dancing">跳舞</label>
                    <input type="checkbox" name="dancing" id="dancing" value="dancing" onChange={this.handleFavour}/>
                    <label htmlFor="drinking">喝酒</label>
                    <input type="checkbox" name="drinking" id="drinking" value="drinking" onChange={this.handleFavour}/>
                </div>
                <div>
                    <label htmlFor="introduce">个人简介</label>
                    <textarea id="introduce" cols="30" rows="10" 
                    value={this.state.introduce} onChange={this.handleItem}></textarea>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
            </div>
        )
    }
}
export default Parent