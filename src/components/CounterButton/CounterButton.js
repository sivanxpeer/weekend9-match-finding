import React, { Component } from 'react'
import { data } from '../Api';
// import Home from '../Home/Home.js';
export class CounterButton extends Component {
    state = { likes: 0, imageURL: "", index: 0, description: "woman", };

    handleLike = () => {
        const stateTemp = {...this.state};
        stateTemp.index = this.state.index;
        console.log(stateTemp);
        if (data[stateTemp.index + 1]) {
            stateTemp.index = this.state.index + 1;
            stateTemp.likes = this.state.likes + 1;
            stateTemp.description=data[stateTemp.index].description;
            stateTemp.imageURL = data[stateTemp.index].imageURL;
            console.log(stateTemp.imageURL);
            this.setState({...stateTemp})
            return (
                <div>
                    {this.state}
                </div>
            )
        }
        // else return;
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
