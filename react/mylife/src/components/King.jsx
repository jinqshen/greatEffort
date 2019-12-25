import React from 'react';
import zbj from '../images/zbj.jpg';

export default class King extends React.Component {

    constructor() {
        super();
        this.state = {
            heroList : []
        }
    }

    render() {
        return (
            <div>aaaa
                <img src={zbj} alt="" />
            </div>
        );
    }
}