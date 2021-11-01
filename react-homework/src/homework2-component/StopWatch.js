import React from 'react';
class StopWatch extends React.Component {

    constructor(props){
        super(props);
        this.state = {timerTime: props.setTime};
    }  
    componentDidMount() {
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 1;
            if(newTime >= 0) {
                this.setState({timerTime: newTime});
            } else {
                clearInterval(this.timer);
                alert('Time is up');
                this.timer = null;
            }
        }, 1000)
    };

    componentWillUnmount() { 
        if(this.timer !== null) {  
            console.log('stop');
            clearInterval(this.timer);
        };    
    }
    render() {
        return (<h2>{this.state.timerTime} second left</h2>)
    }
}

export default StopWatch;