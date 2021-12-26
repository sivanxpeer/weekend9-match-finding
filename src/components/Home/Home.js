import React, { Component } from 'react'
import { data } from '../Api';
import CounterButton from '../CounterButton/CounterButton';
import './Home.css';

export class Home extends Component {
    printData = (item) => {
        // console.log(data);
        data.forEach(() => {
            this.getDataImage();
            this.getDataDescription();
        })
    }

    getDataImage = () => {
        const obj = {};
        obj.index = 0;
        obj.imageURL = data[obj.index].imageURL;
        return (<img src={obj.imageURL} alt={""} style={{ width: "200px", height: "200px" }}></img>);
    }
    getDataDescription = () => {
        const obj = {};
        obj.index = 0;
        obj.description = data[obj.index].description;
        return (obj.description);
    }

    render() {
        return (
            <div className="Home">
                {this.printData()}
                <div className="main-container">
                    <div className="image">
                        <img func={this.props.handleLike} src="" alt={""}>
                        </img >
                            {this.getDataImage()}
                        {this.printData()}
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
