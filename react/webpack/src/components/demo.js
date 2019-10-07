//webpack打包入口文件
//console.log('o0k');
//webpack-dev-server打包好的main.js是在根目录下，不在dist目录下，虽然看不见，但是是有的

import React from 'react'//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'//渲染组件和虚拟DOM
import Hello from '@/components/Hello'//@为src目录，webpack.config.js配置别名
import China from '@/components/China'
import Movie from '@/components/Movie'

//必须返回一个合法的JSX虚拟DOM元素，可以return null
/* function Hello (props) {//形参，接收数据，只读
    return <p>Hello World!---{ props.name }---{ props.age }---{ props.gender }</p>;
}
 */
const dog = {
    name : '柯园',
    age : 30,
    gender : '雌'
};

const myh1 = React.createElement('h1', { id : 'myh1', title : 'this is my h1'}, '这是我的h1');

const mydiv = React.createElement('div', null, '这是一个div元素', myh1);

const age = 18;

/* let Birth = new China('jinqshen', '生日快乐').getChina();
console.log(Birth); */
//jsx 需要使用babel来转换jsx
const mytest = <div>
    aaabbbsdsdsd
    <h1 id="h1dsds">jinqshen{age}</h1>
    {/* 传入外界参数 */}
    <Hello name={ dog.name } age={ dog.age } gender={ dog.gender } />
    <Hello {...dog} />
    </div>

ReactDOM.render(mytest, document.getElementById('app'));
//ReactDOM.render(Birth, document.getElementById('china'));//调用方法传参，不建议使用，一般用render函数
ReactDOM.render(<China name="jinqshen" message="生日快乐"></China>, document.getElementById('china1'));

const movie = {
    name : '哪吒之魔童降世',
    director : '饺子'
}
ReactDOM.render(<Movie {...movie} />, document.getElementById('movies'));