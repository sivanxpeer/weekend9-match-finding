import React, { Component } from 'react'
import { data } from '../Api';
import CounterButton from '../CounterButton/CounterButton';
import './Home.css';

export class Home extends Component {
    state = { likes: 0, dislikes: 0, index: 0 };

    handleLike = (counter) => {
        if (data[this.state.index]) {
        this.setState((prevState) => ({
            [counter]: prevState[counter] += 1,
            index: prevState.index += 1
        }));
        return [counter];
        }
        else return;
    };

    // isDataEnd() {
        // if (!data[this.state.index]) {
            // return (<div className="image"><img className="ii" src={"https://www.kindpng.com/picc/m/253-2530327_oops-there-is-nothing-to-show-hd-png.png"} alt={""}></img></div>);
            // return (<img src="https://cdn.dribbble.com/users/2666881/screenshots/11346959/media/eea44d0bd2ba581f2087172a3891caba.png?compress=1&resize=400x300"></img>)}
            // ;
        
        // return false;
    // }

    getDataImage = (i) => {
        const imageURL = data[i].imageURL;
        console.log(imageURL);
        return (<img className={"ii"} src={imageURL} alt={""} style={{ width: "200px", height: "200px" }}></img>);
    };
    
    getDataDescription = (i) => {
        const description = data[i].description;
        return (<div>{description}</div>);
    };

    render() {
        return (
            <div className="Home">
                <div className="main-container">
                    <div className="image">
                        <img className="ii" src="" alt={""}>
                        </img >
                        {this.getDataImage(this.state.index)}
                    </div>
                    <div className="description">
                        {this.getDataDescription(this.state.index)}
                    </div>
                    <div className="buttons">
                        <CounterButton
                            clickHandler={() => { this.handleLike('likes') }}
                            buttonname="Like"
                            numOfLikes={this.state.likes}
                            counter={this.state.likes}
                        />
                        <CounterButton
                            clickHandler={() => { this.handleLike('dislikes') }}
                            buttonname="Unlike"
                            numOfLikes={this.state.dislikes}
                            counter={this.state.dislikes}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
