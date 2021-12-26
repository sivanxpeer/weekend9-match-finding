import React, { Component } from 'react'
// import Home from '../Home/Home.js';
export class CounterButton extends Component {
    render() {

        return (
            <div>
                <div className="count-likes">
                    {this.props.numOfLikes}
                    {this.props.numOfDislikes}
                </div>
                <button onClick={this.props.clickHandler}>{this.props.buttonname}</button>
            </div>
        )
    }
}

export default CounterButton
