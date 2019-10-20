import React from 'react';
//import axios from 'axios';
import { Calendar } from 'antd';
import '_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';

export default class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            weather: {},
            list: []
        }
    }

    /* componentDidMount() {
        const url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        axios.get(url)
        .then((res) => {
            console.log(res);
            this.setState({
                list: res.data.result
            });
        });
        $.ajax({ 
            url:url, 
            type:'GET', 
            dataType:'json',  // 处理Ajax跨域问题
            success: (res) => { 
                console.log(res);
                this.setState({
                    list: res.result
                }); 
            } 
        }); 
    } */

    render() {
       
            return (
                <Calendar />
            )
        }
        
}