import React from 'react';
import Css from '@/css/color.less';

console.log(Css);

//子组件
export default function MovieList(props) {
    //Css.title + ' test'
    return <li className={[Css.title, 'test'].join(' ')}>id:{ props.id } name:{ props.name } director:{ props.director }</li>;
}