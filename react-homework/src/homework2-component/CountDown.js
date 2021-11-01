import React,{ Component } from "react";
import StopWatch from "./StopWatch";
class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayStopWatch: true
        };
    }
    render() {
        return(
            <div>
                <p>Stopwatch is {this.state.displayStopWatch? "display" : "hided"}</p>
                <button
                    onClick = {() => {
                        this.setState({displayStopWatch: !this.state.displayStopWatch});
                    }}
                >
                    {this.state.displayStopWatch? "Hide Stopwatch": "Show Stopwatch"}
                </button>
                {this.state.displayStopWatch && (
                    <div>
                        <StopWatch setTime = "10"/>
                    </div>
                )}
            </div>
        )
    }
}
export default CountDown;