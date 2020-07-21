import React from 'react'
import '../css/ts.css'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:3001/'
axios.interceptors.response.use(res => {
    return res.data
})

class Book extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            bookId: '',
            bookName: '',
            flag: true
        }
    }
    loadData = async() => {
        let res = await axios.get('books')
        this.setState({
            list: res
        })
    }
    componentDidMount() {
        this.loadData()
    }
    // 表单绑定
    handleItem = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = () => {
        // console.log(this.state.bookId)
        // console.log(this.state.bookName)
        if (this.state.flag) {
            this.addBook()
        } else {
            this.editBook()
            // alert(1)
        }
    }
    // 添加图书
    addBook = async() => {
        // 表单验证
        if (!this.state.bookName) {
            alert('请输入图书名称')
            return
        }
        let ret = await axios.get('books/book/' + this.state.bookName)
        if (ret.status === 1) {
            alert('图书名称重复')
            return
        }
        let res = await axios.post('books', {
            name: this.state.bookName
        })
        // console.log(res)
        if (res.status === 200) {
            this.loadData()
            this.setState({
                bookName: ''
            })
        }
    }
    // 删除图书
    deleteBook = async(id) => {
        let res = await axios.delete('books/' + id)
        if (res.status === 200) {
            this.loadData()
        }
    }
    // 编辑图书
    toEdit = async(id) => {
        let res = await axios.get('books/' + id)
        this.setState({
            bookId: res.id,
            bookName: res.name,
            flag: false
        })
    }
    editBook = async() => {
        let res = await axios.put('books/' + this.state.bookId,{
            name: this.state.bookName
        })
        if (res.status === 200) {
            this.loadData()
            this.setState({
                bookId: '',
                bookName: '',
                flag: true
            })
        }
    }
    render() {
        let listTag = this.state.list.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                    <button onClick={this.toEdit.bind(this,item.id)}>编辑</button>
                    <button onClick={this.deleteBook.bind(this,item.id)}>删除</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="book">
                <div className="title">图书管理系统</div>
                <div className="form">
                    <label htmlFor="bookName">图书名称</label>
                    <input value={this.state.bookName} onChange={this.handleItem} type="text" id="bookName"/>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <div className="grid">
                    <table border="1" cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.length === 0 && <tr><td colSpan="3">正在加载......</td></tr>}
                            {listTag}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Book