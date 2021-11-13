import React, { Component } from "react";
import MyList from "./MyList";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            travelList: [
                {title: 'Italy in 2012', imgsrc: '../../src/trevi fountain.jpg', key: '01'},
                {title: 'France in 2013', imgsrc: '../../src/france.jpg', key: '02'},
                {title: 'Austrila in 2014', imgsrc: '../../src/austrilia.jpg', key: '03'},
                {title: 'Thailand in 2015', imgsrc: '../../src/thailand.jpg', key: '04'},
                {title: 'America in 2016', imgsrc: '../../src/america.jpg', key: '05'},
                {title: 'North Europe in 2017', imgsrc: '../../src/sevilla7.jpg', key: '06'},
                {title: 'South Europe in 2018', imgsrc: '../../src/sevilla1.jpg', key: '07'},
                {title: 'South Island in 2021', imgsrc: '../../src/queenstown.jpg', key: '08'},
            ]
        };
    } 
    render() {
        return(
            <div className ="travel-list">
                <h2>Travel Guide</h2>
                    <div className = "mylist">
                        <MyList travelList = {this.state.travelList}/>
                    </div>
            </div>
        )
    }
}
export default AboutMe;