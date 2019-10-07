import React from 'react';
import '_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';
import {HashRouter, Route, Link} from 'react-router-dom';
import MovieList from '@/components/MovieList';
import Movie from '@/components/Movie';
import Cmd from '@/components/Cmd';

export default class BindInputValue extends React.Component {

    constructor() {
        super();
        this.state = {
            msg: '套你猴子'
        };
    }

    //得到最新文本框的值(两种方法：1.通过事件参数e来获取  2.ref获取DOM元素引用)
    //setState更新值
    //重新渲染页面
    changeValue = (e) => {
        /* this.setState({
            msg: e.target.value
        }); 事件参数e获取*/
        //ref引用
        this.setState({
            msg: this.refs.txt.value
        })
    }


    render() {
        return <HashRouter>{/*启用路由*/}
                <div className="form-group">
                    <p>{ this.state.msg }</p>
                    <input className="from-control" type="text" value={this.state.msg} ref="txt" onChange={ (e) => this.changeValue(e) } />
                </div>
                <Link to="/home">首页</Link>{/* 创建链接 */}&nbsp;&nbsp;
                <Link to="/movie/top50/10">电影</Link>&nbsp;&nbsp;
                <Link to="/about">关于</Link>
                {/*定义路由规则 path表示要匹配的路由 component表示要展示的组件
                    Route两种身份：定义路由和占位符
                    匹配规则：默认是模糊匹配，添加exact属性，变为精确匹配  */}
                <Route path="/home" component={MovieList}></Route>
                <Route path="/movie/:type/:id" component={Movie} exact></Route>
                <Route path="/about" component={Cmd}></Route>
               </HashRouter>;
    }
}