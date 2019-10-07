//评论列表案例
import React from 'react'//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'//渲染组件和虚拟DOM
//import Cmd from '@/components/Cmd'
//import BindData from '@/components/BindData'
import BindInputValue from '@/components/BindInputValue'
/* //子组件
function MovieList(props) {
    return <li>id:{ props.id } name:{ props.name } director:{ props.director }</li>
}

//父组件
class Cmd extends React.Component {
    constructor() {
        super();
        this.state = {
            CmdList: [
                {id: '1', name: '哪吒之魔童降世', director: '饺子'},
                {id: '2', name: '流浪地球', director: '吴京'},
                {id: '3', name: '战狼2', director: '吴京'},
                {id: '4', name: '攀登者', director: '李仁港'}
            ]
        }
    }

    render() {
        return <div>
                <ul>
                    { this.state.CmdList.map(item => <MovieList {...item} key={ item.id }></MovieList>)}
                </ul></div>;
    }
}
 */
ReactDOM.render(<BindInputValue></BindInputValue>, document.getElementById('app'));