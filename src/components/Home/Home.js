import React, { Component } from 'react'
import { data } from '../Api';
import CounterButton from '../CounterButton/CounterButton';
import './Home.css';

export class Home extends Component {
    printData = () => {
        console.log(data);
    }


    // getObjFromData=()=>{
    //     let button = new CounterButton();
    //     const obj = {};
    //     obj.index = button.state.index;
    //     obj.imageURL = data[obj.index].imageURL;
    //     obj.description=button.state.description;
    //     // return (<img src={obj.imageURL} alt={""} style={{ width: "200px", height: "200px" }}></img>);
    //     return ob
    // }

    getDataImage = () => {
        const obj = {};
        obj.index = 0;
        obj.imageURL = data[obj.index].imageURL;
        return (<img src={obj.imageURL} alt={""} style={{ width: "200px", height: "200px" }}></img>);
    }
    getDataDescription = () => {
        const obj = {};
        obj.index=0;
        obj.description = data[obj.index].description;
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
