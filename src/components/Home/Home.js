import React, { Component } from 'react'
import { data } from '../Api';
import CounterButton from '../CounterButton/CounterButton';
import './Home.css';


//todo- catch items name and items id and display to screen one of them 
//make a button to go to other data 


export class Home extends Component {

    printData = () => {
        console.log(data);
    }
    getDataImage = () => {
        const obj = {};
            obj.imageURL = data[0].imageURL;
        return (<img src={obj.imageURL}  style={{ width: "200px", height: "200px" }}></img>);
    }
    getDataDescription = () => {
        const obj = {};
        obj.description = data[0].description;
        return (obj.description);
    }

    render() {
        return (
            <div className="Home">
                {this.printData()}
                <div className="main-container">
                    <div className="image">
                        {this.getDataImage()}
                    </div>
                    <div className="description">
                        {this.getDataDescription()}
                    </div>
                    <div className="buttons">
                        <CounterButton buttonname="Like"></CounterButton>
                        <CounterButton buttonname="Unlike"></CounterButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
