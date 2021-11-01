import React,{ Component } from "react";
import StopWatch from "./StopWatch";
class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countDown: true
        };
    }
    render() {
        return(
            <div>
                <p>Stopwatch is {this.state.countDown? "display" : "hided"}</p>
                <button
                    onClick = {() => {
                        this.setState({countDown: !this.state.countDown});
                    }}
                >
                    {this.state.countDown? "Hide Stopwatch": "Show Stopwatch"}
                </button>
                {this.state.countDown && (
                    <div>
                        <StopWatch setTime = "10"/>
                    </div>
                )}
            </div>
        )
    }
}
export default CountDown;