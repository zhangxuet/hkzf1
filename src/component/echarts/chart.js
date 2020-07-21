import React from 'react'
import echarts from 'echarts'
import Axios from 'axios'

class Chart extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            condition:'',
            chartData: {}
        }
    }
    handleQuery = () => {
        fetch('http://localhost:3001/data?condition='+this.state.condition)
         .then(res => {
             return res.json()
         })
         .then(data => {
                console.log(data)
                this.setState({
                    chartData: data
                }, () => {
                    this.initData()
                })
         })
    }
    handleChange = (e) => {
        this.setState({
            condition: e.target.value
        })
    }
    initData = () => {
        const myChart = echarts.init(document.getElementById('chart'))
        const option = {
            title: {
                text: 'Step Line'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['Step Start', 'Step Middle', 'Step End']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'Step Start',
                    type:'line',
                    step: 'start',
                    data:this.state.chartData.data1
                },
                {
                    name:'Step Middle',
                    type:'line',
                    step: 'middle',
                    data:this.state.chartData.data2
                },
                {
                    name:'Step End',
                    type:'line',
                    step: 'end',
                    data:this.state.chartData.data3
                }
            ]
        }
        myChart.setOption(option)
    }
    componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <div>chart</div>
                <input type="text" value={this.state.condition} onChange={this.handleChange}/>
                <button onClick={this.handleQuery}>查询</button>
               <div id="chart" style={{height: '400px'}}></div> 
            </div>
        )
    }
}

export default Chart