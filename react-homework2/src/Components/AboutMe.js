import React, { Component } from "react";
import MyList from "./MyList";
import Menu from "./Menu";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            travelList: [
                {title: 'Italy in 2012', imgsrc: '/trevi fountain.jpg', key: '01'},
                {title: 'France in 2013', imgsrc: '/castle.jpg', key: '02'},
                {title: 'Austrila in 2014', imgsrc: '/austrilia.jpg', key: '03'},
                {title: 'Thailand in 2015', imgsrc: '/thailand.jpg', key: '04'},
                {title: 'America in 2016', imgsrc: '/america.jpg', key: '05'},
                {title: 'North Europe in 2017', imgsrc: '/sevilla1.jpg', key: '06'},
                {title: 'South Europe in 2018', imgsrc: '/spain plaza.jpg', key: '07'},
                {title: 'South Island in 2021', imgsrc: '/queenstown.jpg', key: '08'},
            ]
        };
    } 
    render() {
        return(
            <div className ="travel-list">
                <Menu/>
                <h2>Travel Guide</h2>
                    <div className = "mylist">
                        <MyList travelList = {this.state.travelList}/>
                    </div>
            </div>
        )
    }
}
export default AboutMe;