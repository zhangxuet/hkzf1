import React from 'react';
import './css/tab.css';

function Tab() {
    // let data = (
//     <div className="tab">
//         <button className="active">1</button>
//         <button>2</button>
//         <button>3</button>
//         <div className="active">a</div>
//         <div>b</div>
//         <div>c</div>
//     </div>
// )

let data = [{
    id: 1,
    title: '草莓',
    desc: 'strawberry'
},
{
    id: 2,
    title: '眼睛',
    desc: 'eyes'
},{
    id: 3,
    title: '手机',
    desc: 'phone'
}]
let btns = []
let divs = []
let currentIndex = 1
data.forEach(item => {
    btns.push(<button className={currentIndex === item.id?'active':''} key={item.id}>{item.title}</button>)
    divs.push(<div className={currentIndex === item.id?'active':''} key={item.id}>{item.desc}</div>)
})
let ele = <div className="tab">
                {btns}
                {divs}
               </div>
return <div>{ele}</div>
}
export default Tab