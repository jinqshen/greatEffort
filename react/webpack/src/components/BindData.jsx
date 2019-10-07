import React from 'react';
import '_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';

export default class BindData extends React.Component {

    constructor(){
        super();
        this.state = {
            msg: 'hhhhh'
        }
    }

    changeMsg = (arg1, arg2) => {
        this.setState({
            msg: this.state.msg + arg1 + arg2
        });
    }

    render() {
        return <div>
                   <p>{ this.state.msg }</p>
                   <button className="btn btn-dark" onClick={ () => this.changeMsg('😀', '🆒') }>改变信息</button>
               </div>;
    }
}