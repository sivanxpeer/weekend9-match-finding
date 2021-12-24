import React, { Component } from 'react'
import { data } from '../Api';
// import Home from '../Home/Home.js';
export class CounterButton extends Component {
    state = { likes: 0, imageURL: "", index: 0, };

    changeImage = (i) => {
        // let i = this.state.index+1;
        if (data[this.state.index+1]) {

            this.setState({ index: i });
            console.log(this.state)
            // return (<img src={data[this.state.index].imageURL} alt={""} style={{ width: "200px", height: "200px" }}></img>);
            return <img src={`${data[this.state.index + 1].imageURL}`} alt={""} style={{ width: "200px", height: "200px" }}></img>
        }
    }


    handleLike = () => {
        // let home = new Home();
        const stateTemp = {};
        stateTemp.index = this.state.index + 1;
        if (data[this.state.index]) {
            stateTemp.likes = this.state.likes + 1;
            stateTemp.imageURL = data[this.state.index].imageURL;
            console.log(stateTemp.likes, stateTemp.imageURL);
            this.setState({ likes: stateTemp.likes, imageURL: stateTemp.imageURL, index: stateTemp.index });
            this.changeImage(stateTemp.index);
            // home.getDataImage();
            return (<div>
                {this.stateTemp}
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
