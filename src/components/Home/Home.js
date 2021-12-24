import React, { Component } from 'react'
import { data } from '../Api';
import CounterButton from '../CounterButton/CounterButton';
import './Home.css';

export class Home extends Component {
    printData = () => {
        console.log(data);
    }
    getDataImage = (i=0) => {
        let button = new CounterButton();
        const obj = {};
        obj.index = i+1;
        obj.imageURL = data[obj.index].imageURL;
        button.setState({imageURL: obj.imageURL,index: obj.index})
        console.log(button.state);
        return (<img src={obj.imageURL} style={{ width: "200px", height: "200px" }}></img>);
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
