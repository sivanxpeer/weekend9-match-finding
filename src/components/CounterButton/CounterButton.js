import React, { Component } from 'react'
// import Home from '../Home/Home.js';
export class CounterButton extends Component {
    render() {

        return (
            <div>
                <div className="count-likes">
                    {/* {this.props.numOfLikes} */}
                    {this.props.numOfLikes}
                </div>
                <button onClick={this.props.clickHandler} f={this.props.numOfLikes}>{this.props.buttonname} </button>
            </div>
        )
    }
}

export default CounterButton
