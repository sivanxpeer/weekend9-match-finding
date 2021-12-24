import React, { Component } from 'react'
import { data } from '../Api';
import Home from '../Home/Home.js';
export class CounterButton extends Component {
    state = { likes: 0, imageURL: "", index: 0, };
    // data[0].imageURL

    handleLike = () => {
        // set the new state 
        // show likes and unlikes to screen
        //change image when clicking =1
        const stateTemp = {};
        stateTemp.index = this.state.index + 1;
        if (data[this.state.index]) {
            stateTemp.likes = this.state.likes + 1;
            stateTemp.imageURL = data[this.state.index].imageURL;
            console.log(stateTemp.likes, stateTemp.imageURL);
            this.setState({ likes: stateTemp.likes, imageURL: stateTemp.imageURL, index: stateTemp.index });
            return (<div>
                {this.state}
                {<img src={stateTemp.imageURL}></img>}
            </div>
            )
        }
    }

    render() {

        return (
            <div>
                <div className="count-likes">
                    {this.state.likes}
                </div>
                <button onClick={this.handleLike}>{this.props.buttonname}</button>

            </div>
        )
    }
}

export default CounterButton
