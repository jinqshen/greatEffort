import React from 'react';
import MovieList from '@/components/MovieList';
import '_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';
//父组件 
export default class Cmd extends React.Component {
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
                </ul>
                <button className="btn btn-primary" onClick={ () => this.bindok() } >按钮</button>
                </div>;
    }

    bindok = () => {
        console.log('aaa');
    }
}