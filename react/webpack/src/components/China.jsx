import React from 'react';

//class语法糖
export default class China extends React.Component {
    /* constructor(name, message) {
        super();//使用继承必须手动调用父类的构造super(),
        this.name = name;
        this.message = message;
    }; */

    //static info = '静态属性';
    //需要由render函数，作用时渲染当前组件所对应的虚拟DOM元素
    render() {
        return <label>中国,{ this.props.name }祝您{ this.props.message }</label>;
    }

    //挂载到原型对象的实例方法，在__proto__中
    /* getChina() {
        return <label>中国,{ this.name }祝您{ this.message }</label>;
    }; */

    //静态方法，挂载到China类上，不能用实例调用
    static show() {
        console.log('静态方法');
    }
    
}