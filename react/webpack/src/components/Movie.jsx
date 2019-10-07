import React from 'react';

export default class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: '我是私有数据可读可写',
            routeParam: props.match.params
        }
    }
    //必须要有render函数，作用时渲染当前组件所对应的虚拟DOM元素，需要有返回值(虚拟DOM or null)
    //数据传递可以直接使用
    render() {
        //this.props.director = 'jinqshen';我不能被改变哦
        //this.state.msg = '我被改变了';我可以被改变
        return <div>
                <p>电影名:{ this.props.name }</p>
                <p>导演:{ this.props.director }</p>
                <p>私有数据:{ this.state.msg }</p>
                <p>路由匹配参数:{ this.props.match.params.type }{ this.props.match.params.id }</p>
                <p>路由匹配参数:{ this.state.routeParam.type }{ this.state.routeParam.id }</p>
               </div>;
    }
}
