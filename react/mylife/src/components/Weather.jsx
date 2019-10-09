import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import '_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';

export default class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            weather: []
        }
    }

    componentDidMount() {
        axios.get('/Joke/QueryJokeByTime?key=dd765149e6ef45f08c1cacb0353f8f37&page=2&rows=10&sort=asc&time=1418745237')
        .then((res) => {
            console.log(res.result);
            this.setState({
                weather: res.result
            });
        });
        /* $.ajax({ 
            url:"/app/Weather/Query?key=1dcd916cdd454313ace370882625a0ab&cityname=成都", 
            type:'GET', 
            dataType:'JSON',  // 处理Ajax跨域问题
            success: function(res){ 
                this.setState({
                    weather: res.result.weather
                }); 
            } 
        });  */
    }

    render() {
        if (this.state.weather.length === 0) {
            return <div>
                  <p>成都天气</p>{}
               </div>;
        }else {
            return <div>
                  <p>成都天气</p>{this.state.weather[0].content}
               </div>;
        }
        
    }
}